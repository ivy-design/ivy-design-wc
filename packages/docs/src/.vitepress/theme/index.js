// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { registerComponents } from "@ivy-design/ce";
import "@ivy-design/ce/dist/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // ...
    if (!import.meta.env.SSR) {
      registerComponents();
    }
  },
};
