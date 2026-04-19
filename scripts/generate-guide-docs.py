from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs" / "guide"
COMMANDS_DIR = ROOT / "commands_temp"

FALLBACK_PY = {
    "B_GroupByBound": "B_GroupByRegion",
}

TAG_OVERRIDES = {
    "B_AddAngularDimensionByNode": ["标注", "曲线"],
    "B_AddAxisNumber": ["标注"],
    "B_AddDot": ["标注", "物件"],
    "B_AddDotByDistance": ["标注", "点"],
    "B_AddDotByLength": ["标注", "曲线"],
    "B_AddDotByLocation": ["标注", "点"],
    "B_AddLinearDimensionBy3Pt": ["标注"],
    "B_AddLinearDimensionByArc": ["标注", "曲线"],
    "B_AddLinearDimensionByDiagonal": ["标注", "曲面"],
    "B_AddLinearDimensionByInterior": ["标注", "曲面"],
    "B_AddLinearDimensionByNaked": ["标注", "曲面"],
    "B_AddRadialDimension": ["标注", "曲线"],
    "B_Area": ["分析", "统计"],
    "B_CopyLayerToClipboard": ["图层", "工具"],
    "B_CornerPin": ["变换", "曲面"],
    "B_CurveSnap": ["变换", "曲线"],
    "B_ExportLocation": ["点", "工具"],
    "B_FindText": ["文字"],
    "B_FindTextFromInsertion": ["文字"],
    "B_FitArc": ["曲线"],
    "B_GroupByBound": ["分组"],
    "B_ImportLayerFromClipboard": ["图层", "工具"],
    "B_ImportPoints": ["点", "工具"],
    "B_LayerFullPath": ["图层", "工具"],
    "B_LayerNameReplace": ["图层"],
    "B_LayerOnlyShow": ["图层"],
    "B_Length": ["分析", "统计", "曲线"],
    "B_Make2D": ["曲线"],
    "B_ObjectAttributes": ["物件"],
    "B_ObjectDrop": ["物件", "工具"],
    "B_ObjectFilter": ["物件"],
    "B_ObjectNameReplace": ["物件"],
    "B_ObjectShare": ["物件", "工具"],
    "B_ObjectTable": ["物件"],
    "B_PlanarHeightTest": ["分析", "统计", "曲面"],
    "B_Planarization": ["变换", "曲面"],
    "B_Project": ["变换"],
    "B_ResetRtf": ["文字", "工具"],
    "B_Rotate": ["变换"],
    "B_Scale": ["变换"],
    "B_SelBlock": ["选择"],
    "B_SelEdge": ["选择", "曲面"],
    "B_SelLength": ["选择", "曲线"],
    "B_SelObject": ["选择", "物件"],
    "B_SelSimilar": ["选择", "物件"],
    "B_SetMacro": ["工具"],
    "B_SetSequence": ["物件"],
    "B_Slide": ["变换"],
    "B_Text": ["文字", "工具"],
    "B_ToPolyline": ["曲线", "变换"],
    "B_UniformDirection": ["变换", "曲线", "曲面"],
    "B_Volume": ["分析", "统计"],
}

SUMMARY_MAP = {
    "B_AddAngularDimensionByNode": "对曲线节点或折点自动生成角度标注，支持过滤直角与角度容差。",
    "B_AddAxisNumber": "根据 Sequence 点物件和轴向参考，批量生成轴号、辅助圆线及尺寸标注。",
    "B_AddDot": "按物件属性格式批量生成文字点，适合把属性值转成现场标记。",
    "B_AddDotByDistance": "通过两点距离创建带数值的距离线和文字点。",
    "B_AddDotByLength": "对曲线或边缘的分段长度批量生成文字点标注。",
    "B_AddDotByLocation": "根据点坐标生成文字点，可设置基准平面与输出格式。",
    "B_AddLinearDimensionBy3Pt": "通过三个点直接创建线性尺寸标注。",
    "B_AddLinearDimensionByArc": "对弧线生成弧长或半径相关的尺寸标注。",
    "B_AddLinearDimensionByDiagonal": "对曲面或面域的对角方向生成线性尺寸标注。",
    "B_AddLinearDimensionByInterior": "对 Brep 内角边缘批量生成尺寸标注。",
    "B_AddLinearDimensionByNaked": "对 Brep 裸边批量生成尺寸标注。",
    "B_AddRadialDimension": "对圆、圆弧或圆形边缘生成径向或直径标注。",
    "B_Area": "统计所选闭合曲线、曲面、网格、SubD 或填充的面积。",
    "B_CopyLayerToClipboard": "把选中图层的层级与颜色信息复制到剪贴板，供别处粘贴导入。",
    "B_CornerPin": "以边角固定方式重建或调整曲面/多重曲面，并输出新的 Brep。",
    "B_CurveSnap": "将源曲线端点吸附到目标曲线附近的最近位置。",
    "B_ExportLocation": "打开点位导出对话框，把选中点物件的坐标整理后导出。",
    "B_FindText": "打开文本查找对话框，按文本条件检索注释与文字内容。",
    "B_FindTextFromInsertion": "在图块实例内部检索文本内容，并选中命中的图块。",
    "B_FitArc": "对曲线尝试拟合圆弧，并可附带误差或半径文字点。",
    "B_GroupByBound": "按边界区域把物件重新分组；当前页面对应实现源码为 B_GroupByRegion.py。",
    "B_ImportLayerFromClipboard": "读取剪贴板中的图层结构，并在当前选中图层下创建对应子层。",
    "B_ImportPoints": "打开点位导入对话框，解析文本或表格数据后生成点。",
    "B_LayerFullPath": "复制当前选中图层的完整路径到剪贴板。",
    "B_LayerNameReplace": "批量替换当前选中图层名称中的指定字符串。",
    "B_LayerOnlyShow": "仅显示当前选中图层及其父层，其余图层自动隐藏。",
    "B_Length": "统计所选曲线或边缘的总长度，并同时输出当前单位与米制结果。",
    "B_Make2D": "按方向线或当前视图生成 2D 隐线或切剖线结果。",
    "B_ObjectAttributes": "打开物件属性创建对话框，配置或生成属性模板。",
    "B_ObjectDrop": "将物件序列化到剪贴板，或从剪贴板还原物件与群组关系。",
    "B_ObjectFilter": "打开物件过滤对话框，按条件筛选目标物件。",
    "B_ObjectNameReplace": "批量替换所选物件名称中的指定字符串。",
    "B_ObjectShare": "通过分享码把物件导出到共享目录，或按分享码导入。",
    "B_ObjectTable": "打开表格查看器，集中浏览所选物件的数据。",
    "B_PlanarHeightTest": "计算曲面偏离平面的最大弦高，并可上色或加文字点。",
    "B_Planarization": "将单面 Brep 平面化，可预览包围盒、信息点和边角固定结果。",
    "B_Project": "提供原位投影、移动到地面、投影到地面三种拍平方式。",
    "B_ResetRtf": "清除注释物件的富文本内容，保留纯文本。",
    "B_Rotate": "调用 MedBox 自定义旋转流程处理物件。",
    "B_Scale": "以包围盒中心或指定原点为基准缩放物件。",
    "B_SelBlock": "选取图块实例，可按同定义图块一起选中。",
    "B_SelEdge": "对 Brep 边缘使用多种规则进行选择，并继续执行边缘动作。",
    "B_SelLength": "按目标长度或长度范围筛选曲线。",
    "B_SelObject": "按同图层或选中图层批量选取物件，可包含子图层。",
    "B_SelSimilar": "以参考物件为基准筛选相似物件并直接选中。",
    "B_SetMacro": "批量设置或重置 MedBox 预设别名与快捷键。",
    "B_SetSequence": "沿参考曲线为物件写入顺序，并可附加编号文字点。",
    "B_Slide": "调用 Rhino 平移控件让所选物件沿指定方向滑动。",
    "B_Text": "对注释文字执行替换、清理、转纯文本、格式化、提取数字、复制等处理。",
    "B_ToPolyline": "按容差把曲线转换或拉直为多段线。",
    "B_UniformDirection": "依据参考线方向统一曲线方向或曲面法向。",
    "B_Volume": "统计实体体积、体积误差，并估算钢重。",
}

EXTRA_NOTES = {
    "B_AddAxisNumber": ["需要先准备可用于排序的 Sequence 点物件。"],
    "B_CopyLayerToClipboard": ["依赖系统剪贴板，适合与“导入图层”配合使用。"],
    "B_CurveSnap": ["命令会直接替换源曲线端点位置，请先确认备份需求。"],
    "B_FindTextFromInsertion": ["关键字支持正则表达式匹配。"],
    "B_GroupByBound": ["区域边界来自图层 `med_export::bound` 上的边界曲线。"],
    "B_ImportLayerFromClipboard": ["执行前需要在图层面板选中一个或多个目标根图层。"],
    "B_LayerFullPath": ["执行前需要在图层面板选中目标图层。"],
    "B_LayerNameReplace": ["只会修改当前选中图层的名称。"],
    "B_LayerOnlyShow": ["执行前需要在图层面板选中目标图层。"],
    "B_ObjectDrop": ["复制与粘贴都依赖系统剪贴板。"],
    "B_ObjectShare": ["共享目录需要可访问，否则无法分享或读取。"],
    "B_PlanarHeightTest": ["结果受模型公差、面类型和点位取样方式影响。"],
    "B_Planarization": ["更适合单面 Brep 或单片曲面，结果受公差设置影响。"],
    "B_Project": ["标注物件在拍平后会额外处理文本公式，以尽量保持显示内容。"],
    "B_ResetRtf": ["只处理注释类物件，不会作用到普通几何。"],
    "B_SetMacro": ["会直接写入 Rhino 的别名和快捷键设置。"],
    "B_SelSimilar": ["锁定物件会被排除。"],
    "B_Text": ["部分处理模式会直接改写原文字内容。"],
    "B_Volume": ["钢重按代码中的 7850 kg/m3 进行估算。"],
}

DIALOG_NAME_MAP = {
    "AttributesCreationDialog": "属性创建对话框",
    "ContentPickerDialog": "内容格式对话框",
    "ImportPointsDialog": "导入点对话框",
    "ObjectFilterDialog": "物件过滤对话框",
    "SuperTableViewer": "表格查看器",
    "TextFindDialog": "文本查找对话框",
}

OPTION_NAME_MAP = {
    "AcceptCurve": "接受闭合曲线",
    "AcceptHatch": "接受填充",
    "AcceptMesh": "接受网格",
    "AcceptSurface": "接受曲面",
    "AddDot": "附加文字点",
    "AngleToleranceDegrees": "角度容差（度）",
    "ApplyColor": "应用颜色",
    "ByBrother": "按同定义图块",
    "BySameLayer": "按同图层",
    "BySelectedLayer": "按选中图层",
    "CopyAttributes": "复制属性",
    "CopyGroup": "复制群组",
    "CornerPin": "边角固定",
    "CornerPinOptions": "边角固定选项",
    "DecimalPlaces": "小数位",
    "DeleteInput": "删除输入",
    "Dim_Type": "尺寸类型",
    "DimArrowSize": "箭头大小",
    "DimDistance": "尺寸距离",
    "DimTextHeight": "尺寸文字高度",
    "Dim_Distance": "尺寸距离",
    "Dim_Position": "尺寸位置",
    "DotLength": "轴号引线长度",
    "DotPosition": "文字点位置",
    "DotRadius": "轴号圆半径",
    "DotTextHeight": "轴号文字高度",
    "Force": "强制执行",
    "Get": "获取",
    "HideInput": "隐藏输入",
    "IgnoreExedge": "忽略扩展边",
    "IgnoreRightAngles": "忽略直角",
    "IgnoreShort": "忽略短项",
    "IncludeChildren": "包含子图层",
    "Is2D": "二维模式",
    "JoinCurves": "连接曲线",
    "KnotSnap": "节点吸附",
    "Length": "目标长度",
    "LengthTol": "长度容差",
    "LinearTolerance": "线性容差",
    "Manual": "手动",
    "MaxLength": "最大长度",
    "MergeAllEdges": "合并全部边",
    "MinLength": "最小长度",
    "OnlyClosest": "仅最近端",
    "OnlyLine": "仅直线",
    "OnlyLinear": "仅直线边",
    "OnlyNonlinearEdge": "仅非直线边",
    "Offset": "偏移",
    "OutputLayer": "输出图层",
    "Pick": "拾取",
    "Position": "位置",
    "Radius": "半径",
    "Remap": "重映射",
    "Reset": "重置",
    "ResetBase": "重置基准",
    "Reverse": "反向",
    "Scale": "比例",
    "Segments": "分段",
    "SetBase": "设置基准",
    "SetFormat": "设置格式",
    "Share": "分享",
    "ShareList": "分享列表",
    "ShowArcLength": "显示弧长",
    "ShowArcRadius": "显示半径",
    "ShowBoundingBox": "显示包围盒",
    "ShowDot": "显示文字点",
    "ShowMessage": "显示信息",
    "Simplify": "简化",
    "SnapRadius": "吸附半径",
    "SplitByGroup": "按群组拆分",
    "Tolerance": "公差",
}

ADD_OUTPUT_MAP = {
    "AddAngularDimension": "生成角度标注",
    "AddArc": "生成圆弧",
    "AddBrep": "生成新的 Brep",
    "AddCircle": "生成圆",
    "AddLine": "生成直线",
    "AddLinearDimension": "生成线性标注",
    "AddRadialDimension": "生成径向或直径标注",
    "AddText": "生成文字",
    "AddTextDot": "生成文字点",
}

INPUT_CALL_MAP = {
    "command_line_options.name_list": "先选择命令模式",
    "custom.geometry.plane.XAxis2D": "设置二维轴向参考",
    "custom.geometry.plane.options": "设置或拾取基准平面",
    "custom.geometry.solids": "选择实体几何",
    "custom.geometry.transform.translation.options": "通过平移控件定义滑动方向与距离",
    "custom.object.breps_single": "选择单面 Brep",
    "geometry.breps": "选择 Brep 几何",
    "geometry.curve": "选择一条参考曲线",
    "geometry.curves": "选择曲线或边缘",
    "geometry.custom_geometrys": "选择符合过滤条件的几何",
    "object.any_object": "选择一个参考物件",
    "object.any_objects": "选择一个或多个物件",
    "object.breps": "选择 Brep 物件",
    "object.curves": "选择曲线物件",
    "object.custom_objects": "按命令过滤选择物件",
    "object.instance_references": "选择图块实例",
    "object.points": "选择点物件",
    "object.surfaces": "选择曲面或多重曲面",
}


def unique(items: list[str]) -> list[str]:
    result: list[str] = []
    for item in items:
        if item and item not in result:
            result.append(item)
    return result


def parse_frontmatter(source: str) -> tuple[str, list[str], str, str]:
    match = re.search(r"^---\r?\n([\s\S]*?)\r?\n---", source)
    if not match:
        return "", [], "", ""
    lines = match.group(1).splitlines()
    title = ""
    icon = ""
    cmd_val = ""
    tags: list[str] = []
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
    return title, tags, icon, cmd_val


def translate_option_token(token: str) -> str:
    if token in OPTION_NAME_MAP:
        return OPTION_NAME_MAP[token]
    token = re.sub(r"([a-z])([A-Z])", r"\1 \2", token.replace("_", " ")).strip()
    return token


def extract_option_labels(source: str) -> list[str]:
    labels: list[str] = []
    for line in source.splitlines():
        if "AddOption" not in line:
            continue
        quoted = re.findall(r'"([^"]+)"', line)
        if not quoted:
            continue
        labels.append(translate_option_token(quoted[-1]))

    for line in source.splitlines():
        if "name_list([" not in line:
            continue
        quoted = re.findall(r'"([^"]+)"', line)
        for token in quoted:
            if token == "Option":
                continue
            labels.append(translate_option_token(token))

    return unique(labels)


def extract_input_calls(source: str) -> list[str]:
    return unique(re.findall(r"med\.input\.([A-Za-z0-9_\.]+)\(", source))


def extract_dialogs(source: str) -> list[str]:
    return unique(re.findall(r"med\.ui\.dialogs\.([A-Za-z0-9_]+)\(", source))


def derive_inputs(source: str, dialogs: list[str]) -> list[str]:
    inputs = [INPUT_CALL_MAP.get(call, f"调用 {call}") for call in extract_input_calls(source)]

    if "RhinoGet.GetLine(" in source:
        inputs.append("拾取一条方向线或参考线")
    if "GetPoint(" in source or "RhinoGet.GetPoint(" in source:
        inputs.append("按提示拾取点位")
    if "ShowEditBox(" in source:
        inputs.append("输入关键字、替换文本或其他字符串参数")
    if "Layers.GetSelected(" in source:
        inputs.append("先在图层面板选中目标图层")

    for dialog in dialogs:
        inputs.append(f"在{DIALOG_NAME_MAP.get(dialog, dialog)}中填写参数")

    return unique(inputs)


def derive_outputs(command: str, source: str, dialogs: list[str]) -> list[str]:
    output_overrides = {
        "B_CopyLayerToClipboard": ["把图层结构写入剪贴板"],
        "B_ImportLayerFromClipboard": ["在选中图层下创建导入的图层结构"],
        "B_LayerFullPath": ["把完整图层路径写入剪贴板"],
        "B_LayerOnlyShow": ["修改图层可见性并刷新视图"],
        "B_ObjectDrop": ["把物件数据写入剪贴板，或从剪贴板恢复物件与群组"],
        "B_ObjectShare": ["导出分享文件并生成分享码，或按分享码导入共享物件"],
        "B_ObjectTable": ["打开表格查看器展示所选物件数据"],
        "B_FindText": ["打开文本查找对话框并按条件检索结果"],
        "B_FindTextFromInsertion": ["选中命中的图块实例，并在命令行输出数量"],
        "B_ResetRtf": ["直接清除注释物件的富文本内容"],
        "B_Rotate": ["执行 MedBox 自定义旋转流程"],
        "B_SelEdge": ["生成边缘选择集，并进入后续边缘动作"],
        "B_SelSimilar": ["选中相似物件，并在命令行输出数量"],
        "B_Text": ["直接修改文字内容，或把整理后的结果复制到剪贴板"],
        "B_SetMacro": ["写入或重置 Rhino 别名与快捷键"],
    }
    if command in output_overrides:
        return output_overrides[command]

    outputs: list[str] = []
    for add_name in unique(re.findall(r"Rhino\.RhinoDoc\.ActiveDoc\.Objects\.(Add[A-Za-z0-9_]+)", source)):
        mapped = ADD_OUTPUT_MAP.get(add_name)
        if mapped:
            outputs.append(mapped)

    if re.search(r"med\.doc\.objects\.(add|_add_item)\(", source):
        outputs.append("添加新的几何或标注结果")
    if "med.doc.objects.select(" in source or "Objects.Select(" in source:
        outputs.append("选中符合条件的物件")
    if "Objects.Replace(" in source:
        outputs.append("直接替换原始物件")
    if "Objects.Transform(" in source or "med.doc.objects.transform.apply(" in source:
        outputs.append("直接变换原始物件")
    if "Clipboard.SetText(" in source:
        outputs.append("把结果写入剪贴板")
    if "Rhino.RhinoApp.WriteLine(" in source or "print(" in source:
        outputs.append("在命令行输出结果")
    if "Groups.Add(" in source:
        outputs.append("需要时把结果自动编组")
    if dialogs and not outputs:
        outputs.append("在对话框确认后执行对应处理")
    if not outputs:
        outputs.append("按命令逻辑处理当前输入")
    return unique(outputs)


def derive_notes(command: str, source: str, outputs: list[str]) -> list[str]:
    notes: list[str] = []
    if "scriptcontext.sticky" in source:
        notes.append("命令会记住上一次使用的选项。")
    if "delete_input" in source:
        notes.append("支持删除输入物件时，执行前请确认是否需要保留原始数据。")
    if "hide_input" in source:
        notes.append("支持隐藏输入物件时，便于和结果进行对比。")
    if "Clipboard." in source:
        notes.append("依赖系统剪贴板，跨会话前请确认剪贴板内容没有被覆盖。")
    if "Layers.GetSelected(" in source:
        notes.append("执行前需要先在图层面板选中目标图层。")
    if "Visible == True" in source:
        notes.append("只会处理当前可见范围内的内容。")
    if re.search(r"Tolerance|tolerance", source):
        notes.append("结果会受到模型公差或命令容差设置影响。")
    if any("命令行输出结果" in item for item in outputs) and not any("生成" in item for item in outputs):
        notes.append("该命令的主要结果通常显示在命令行，不一定会新增几何。")
    notes.extend(EXTRA_NOTES.get(command, []))
    return unique(notes)


def derive_steps(inputs: list[str], options: list[str], outputs: list[str], dialogs: list[str]) -> list[str]:
    steps: list[str] = []
    if dialogs:
        steps.append("打开命令后，先在对话框中填写需要的参数或筛选条件。")
    if inputs:
        steps.append(f"按提示准备输入：{'、'.join(inputs)}。")
    if options:
        steps.append(f"根据需要调整命令行选项：{'、'.join(options)}。")
    steps.append(f"确认执行后，系统会{'、'.join(outputs)}。")
    return steps[:4]


def rewrite_docs() -> int:
    count = 0
    for md_path in sorted(DOCS_DIR.glob("B_*.md")):
        command = md_path.stem
        py_name = FALLBACK_PY.get(command, command)
        py_path = COMMANDS_DIR / f"{py_name}.py"
        source = py_path.read_text(encoding="utf-8") if py_path.exists() else ""

        title, existing_tags, icon_val, cmd_val = parse_frontmatter(md_path.read_text(encoding="utf-8"))
        tags = TAG_OVERRIDES.get(command, existing_tags)
        tags = unique(["物件" if tag == "对象" else tag for tag in tags])

        dialogs = extract_dialogs(source)
        inputs = derive_inputs(source, dialogs)
        outputs = derive_outputs(command, source, dialogs)
        options = extract_option_labels(source)
        notes = derive_notes(command, source, outputs)
        steps = derive_steps(inputs, options, outputs, dialogs)
        summary = SUMMARY_MAP.get(command, "根据对应源码整理该命令的用途、输入和输出行为。")

        content = [
            "---",
            f"icon: {icon_val}" if icon_val else f"icon: /media/svgs/med_{command}.svg",
            f"title: {title or command}",
            f"cmd: {cmd_val or command}",
            "tag:",
            *[f"  - {tag}" for tag in tags],
            "---",
            "",
            f"# {command}",
            "",
            "## 功能说明",
            "",
            summary,
            "",
            "## 源码要点",
            "",
            f"- 输入：{'；'.join(inputs) if inputs else '按界面提示完成输入。'}",
            f"- 输出：{'；'.join(outputs)}",
            f"- 可调项：{'、'.join(options) if options else '无明显命令行选项。'}",
            f"- 选项记忆：{'会记住上一次设置。' if 'scriptcontext.sticky' in source else '本次源码未见持久化选项。'}",
            "",
            "## 操作步骤",
            "",
            *[f"{index}. {step}" for index, step in enumerate(steps, start=1)],
            "",
            "## 注意事项",
            "",
            *[f"- {note}" for note in notes],
            "",
        ]

        md_path.write_text("\n".join(content), encoding="utf-8")
        count += 1
    return count


if __name__ == "__main__":
    updated = rewrite_docs()
    print(f"updated {updated} guide docs")
