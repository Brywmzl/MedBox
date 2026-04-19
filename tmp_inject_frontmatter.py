import json
import re
import os
from pathlib import Path

index_path = r"c:\Users\Administrator\Desktop\AI Studio\MedBox\docs\.vuepress\command-index.json"
docs_dir = r"c:\Users\Administrator\Desktop\AI Studio\MedBox\docs\guide"

with open(index_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    command = item["title"] # e.g. B_AddAngularDimensionByNode
    icon = item.get("icon", "")
    md_path = os.path.join(docs_dir, command + ".md")
    
    if os.path.exists(md_path):
        with open(md_path, 'r', encoding='utf-8') as mf:
            content = mf.read()
            
        # We need to inject icon and cmd into the frontmatter.
        # Frontmatter looks like:
        # ---
        # title: 标注节点角度
        # tag:
        #   - 标注
        # ---
        
        # Check if already injected
        if "icon:" not in content and "cmd:" not in content:
            new_frontmatter = f"icon: {icon}\ncmd: {command}\ntitle:"
            content = content.replace("title:", new_frontmatter, 1)
            
            with open(md_path, 'w', encoding='utf-8') as mf:
                mf.write(content)

print(f"Injected frontmatter into {len(data)} markdown files.")
