import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MedBox/",

  lang: "zh-CN",
  title: "MedBox",
  description: "MedBox Rhino Utility Plugin & GH Component",

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
  
});
