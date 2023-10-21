import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "",

  author: {
    name: "Brywmzl",
    url: "https://brywmzl.Github.io/",
  },

  iconAssets: [
    // "fontawesome-with-brands",
    // "/FontAwesome/Web/css/all.min.css", // Gitee上404
    // "/FontAwesome/Web/js/all.min.js", // Gitee上文件太大
    "/FontAwesome/Web/css/all.css",
  ],

  // logo: "/logo.svg",
  
  // repo: "Brywmzl/MedBox",

  docsDir: "src",
  
  // navbar
  navbar,
  navTitle: 'MedBox',

  // sidebar
  sidebar,

  footer: false,

  displayFooter: true,
  darkmode: "toggle",
  backToTop:false,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: false,
  },

  plugins: {
    readingTime: false, // 阅读时间
    // 代码复制按钮
    copyCode: { 
      showInMobile: false, // 移动端不显示
      duration: 2000, // 复制提醒时长单位ms，不需要的话设置为0， 默认2000ms
    },
    
    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VidStack",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
      presets: ["ts", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    
    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
           },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
               sizes: "192x192",
               purpose: "maskable",
               type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
