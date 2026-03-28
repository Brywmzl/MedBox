import { sidebar } from "vuepress-theme-hope";
import commandIndex from "./command-index.json";

export default sidebar({
  "/": [
    {
      text: "Guide",
      icon: "book",
      prefix: "guide/", // 可选的，会添加到每个 item 链接地址之前
      children: commandIndex.map((item) => ({
        text: item.title,
        link: item.link,
        icon: item.icon,
      })),
    },
  ],
});
