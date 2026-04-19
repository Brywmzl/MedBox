import json
import re
import os
from pathlib import Path

index_path = r"c:\Users\Administrator\Desktop\AI Studio\MedBox\docs\.vuepress\command-index.json"
docs_dir = r"c:\Users\Administrator\Desktop\AI Studio\MedBox\docs\cmds"

with open(index_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    name = item["title"] # e.g. B_AddAngularDimensionByNode
    md_path = os.path.join(docs_dir, name + ".md")
    label = name
    if os.path.exists(md_path):
        with open(md_path, 'r', encoding='utf-8') as mf:
            content = mf.read()
            match = re.search(r"^title:\s*(.+)$", content, re.MULTILINE)
            if match:
                label = match.group(1).strip()
    item["label"] = label

with open(index_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated command-index.json")
