import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Guide",
      icon: "book",
      // collapsible: false, // 可选的, 设置分组是否可以折叠，默认值是 false
      // link: "guide/", // 可选的, 分组标题对应的链接
      prefix: "guide/", // 可选的，会添加到每个 item 链接地址之前
      // activeMatch: "guide", // 对象格式
      children: "structure",
    },
    // "slides",
  ],
});
