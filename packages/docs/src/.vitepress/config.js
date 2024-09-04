import { defineConfig } from "vitepress";

import sidebar from "./config/sidebar";
import nav from "./config/nav";

export default defineConfig({
    title: "ivyDesign",
    titleTemplate: false,
    description: "使用 vue3 开发的 web component 组件库",
    head: [["link", { rel: "icon", href: "/favicon.png" }]],
    themeConfig: {
        logo: "/images/logo.png",

        nav,
        sidebar,

        outline: {
            level: [2, 3],
            label: "章节目录",
        },
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/ivy-design/ivy-design-wc",
            },
        ],

        search: {
            provider: "local",
        },

        editLink: {
            text: "在 GitHub 上编辑此页",
            pattern:
                "https://github.com/ivy-design/ivy-design-wc/edit/main/packages/docs/src/:path",
        },
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        footer: {
            message: "MIT Licensed",
            copyright: "Copyright © 2023-present GuoJiKun",
        },

        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
    },
    markdown: {
        container: {
            tipLabel: "提示",
            warningLabel: "警告",
            dangerLabel: "危险",
            infoLabel: "信息",
            detailsLabel: "详细信息",
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
