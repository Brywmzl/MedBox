import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/MedBox/",
  title: "MedBox",
  description: "MedBox Rhino Utility Plugin & GH Component",

  theme,

  head: [
    [
      "script",
      {},
      `
      (function() {
        const theme = localStorage.getItem('vuepress-theme-hope-scheme') || 'auto';
        if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      })();
      `,
    ],
  ],

  shouldPrefetch: false,
  
});
