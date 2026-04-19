import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/MedBox/",
  title: "MedBox",
  description: "MedBox Rhino Utility Plugin & GH Component",

  theme,

  shouldPrefetch: false,
  
});
