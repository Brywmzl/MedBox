import os
import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs" / "guide"
OUT_JSON = ROOT / "docs" / ".vuepress" / "command-index.json"

def build_index():
    commands = []
    
    for md_path in DOCS_DIR.glob("*.md"):
        content = md_path.read_text(encoding="utf-8")
        match = re.search(r"^---\r?\n([\s\S]*?)\r?\n---", content)
        if not match:
            continue
        
        lines = match.group(1).splitlines()
        title = ""
        icon = ""
        cmd_val = ""
        tags = []
        
        i = 0
        while i < len(lines):
            line = lines[i]
            if line.startswith("title:"):
                title = line.split(":", 1)[1].strip()
            elif line.startswith("icon:"):
                icon = line.split(":", 1)[1].strip()
            elif line.startswith("cmd:"):
                cmd_val = line.split(":", 1)[1].strip()
            elif line.strip() == "tag:":
                i += 1
                while i < len(lines):
                    tag_match = re.match(r"^\s*-\s*(.+)$", lines[i])
                    if not tag_match:
                        break
                    tags.append(tag_match.group(1).strip())
                    i += 1
                continue
            i += 1
            
        if cmd_val and title:
            # We map cmd frontmatter to `title` (english cmd) 
            # and title frontmatter to `label` (Chinese title)
            # because that matches the JSON format CommandSidebar assumes.
            commands.append({
                "title": cmd_val,
                "label": title,
                "link": f"/guide/{md_path.stem}",
                "icon": icon,
                "tags": tags
            })
            
    # sort by title
    commands = sorted(commands, key=lambda x: x["title"])
    OUT_JSON.write_text(json.dumps(commands, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Built command-index.json with {len(commands)} entries.")

if __name__ == "__main__":
    build_index()
