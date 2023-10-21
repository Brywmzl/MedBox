import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "",

  author: {
    name: "Brywmzl",
    url: "https://brywmzl.Github.io/",
  },

  iconAssets: [
    "fontawesome",
  ],

  // logo: "/logo.svg",

  // repo: "Brywmzl/MedBox",
  docsRepo: "Brywmzl/MedBox",
  docsDir: "docs",

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
    editLink: "编辑此页",
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
        // "AudioPlayer",
        // "Badge",
        // "BiliBili",
        // "CodePen",
        // "PDF",
        // "Replit",
        // "Share",
        // "SiteInfo",
        // "StackBlitz",
        // "VidStack",
        "VideoPlayer",
        // "XiGua",
        // "YouTube",
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
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/android-chrome-192x192.png",
        color: "#ffffff",
      },
      manifest: {
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
                "sizes": "192x192",
                "src": "/assets/icon/android-chrome-192x192.png",
                "type": "image/png"
            },
            {
                "sizes": "512x512",
                "src": "/assets/icon/android-chrome-512x512.png",
                "type": "image/png"
            }
        ],
        "name": "medbox",
        "short_name": "medbox",
        "theme_color": "#ffffff"
      },
    },
  },
});
