import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ivy-design-wc",
  description: "使用 vue3 开发的web component组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "组件", link: "/component/button" },
    ],

    sidebar: {
      "/component/": [
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/component/button" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
