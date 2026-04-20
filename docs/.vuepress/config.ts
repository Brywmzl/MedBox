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
        var d = document.documentElement;
        var theme = localStorage.getItem('vuepress-theme-hope-scheme') || 'auto';
        var isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        d.setAttribute('data-theme', isDark ? 'dark' : 'light');
        if (isDark) d.style.backgroundColor = '#12010d';
      })();
      `,
    ],
    [
      "style",
      {},
      `
      .vp-page-title h1 > .icon { width: 48px !important; height: 48px !important; object-fit: contain; }
      html[data-theme="dark"] { background-color: #12010d !important; }
      `,
    ],
  ],

  shouldPrefetch: false,
  
});
