import { defineConfig } from "vitepress";

import sidebar from "./config/sidebar";
import nav from "./config/nav";

export default defineConfig({
  title: "ivyDesign",
  description: "使用 vue3 开发的web component组件库",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    logo: "/images/logo.png",
    nav,
    sidebar,
    outline: [2, 3],
    outlineTitle: "章节目录",
    socialLinks: [
      { icon: "github", link: "https://github.com/ivy-design/ivy-design-wc" },
    ],
    search: {
      provider: "local",
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("ivy-"),
      },
    },
  },
  sitemap: {
    hostname: "https://ce.ivy-design.press",
  },
});
