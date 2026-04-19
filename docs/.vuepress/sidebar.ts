import { sidebar } from "vuepress-theme-hope";
import commandIndex from "./command-index.json";

const sortedCommandIndex = [...commandIndex].sort((left, right) =>
  left.title.localeCompare(right.title, "zh-Hans-CN", { numeric: true, sensitivity: "base" })
);

export default sidebar({
  "/guide/": [
    {
      text: "命令",
      prefix: "",
      children: sortedCommandIndex.map((item) => ({
        text: item.title,
        link: item.link,
      })),
    },
  ],
});
