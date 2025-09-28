// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { readdirSync } from "node:fs";
import { defineConfig } from "file:///E:/private/Web/ivy-design-wc/node_modules/.pnpm/vite@5.4.3_@types+node@18.18.12_sass@1.78.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/private/Web/ivy-design-wc/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.4.3_@types+node@18.18.12_sass@1.78.0__vue@3.5.0_typescript@5.3.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/private/Web/ivy-design-wc/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.3_@types+node@18.18.12_sass@1.78.0__vue@3.5.0_typescript@5.3.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///E:/private/Web/ivy-design-wc/node_modules/.pnpm/vite-plugin-dts@3.6.3_@types+node@18.18.12_rollup@4.21.2_typescript@5.3.2_vite@5.4.3_@types+node@18.18.12_sass@1.78.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/private/Web/ivy-design-wc/packages/ivy-design-wc/vite.config.ts";
var genInput = () => {
  const target = {};
  const dir = readdirSync("./src/components");
  dir.forEach((name) => {
    target[`${name}`] = fileURLToPath(
      new URL(`./src/components/${name}/index.ts`, __vite_injected_original_import_meta_url)
    );
  });
  return target;
};
var vite_config_default = defineConfig(({ mode }) => {
  const plugins = [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ivy-")
        }
      },
      customElement: true
    }),
    vueJsx()
  ];
  if (mode !== "dev") {
    plugins.push(
      dts({
        outDir: "types"
      })
    );
  }
  let build = {};
  if (mode === "production" || mode === "dev") {
    build = {
      target: "es2017",
      lib: {
        entry: fileURLToPath(new URL("./src/index.ts", __vite_injected_original_import_meta_url)),
        name: "ivy-design",
        fileName: (format) => {
          if (format === "es") return "ivy-design.mjs";
          return "ivy-design.js";
        }
      },
      rollupOptions: {
        output: {
          exports: "named"
        }
      },
      cssTarget: "chrome61"
    };
  } else if (mode === "es") {
    build = {
      outDir: "dist/es",
      lib: {
        entry: genInput(),
        formats: ["es"]
      },
      rollupOptions: {
        output: {
          exports: "named"
        }
      }
    };
  }
  return {
    appType: "custom",
    publicDir: false,
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    build
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwcml2YXRlXFxcXFdlYlxcXFxpdnktZGVzaWduLXdjXFxcXHBhY2thZ2VzXFxcXGl2eS1kZXNpZ24td2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHByaXZhdGVcXFxcV2ViXFxcXGl2eS1kZXNpZ24td2NcXFxccGFja2FnZXNcXFxcaXZ5LWRlc2lnbi13Y1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcHJpdmF0ZS9XZWIvaXZ5LWRlc2lnbi13Yy9wYWNrYWdlcy9pdnktZGVzaWduLXdjL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ25vZGU6ZnMnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5jb25zdCBnZW5JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXJnZXQ6IGFueSA9IHt9XG4gICAgY29uc3QgZGlyID0gcmVhZGRpclN5bmMoJy4vc3JjL2NvbXBvbmVudHMnKVxuICAgIGRpci5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIHRhcmdldFtgJHtuYW1lfWBdID0gZmlsZVVSTFRvUGF0aChcbiAgICAgICAgICAgIG5ldyBVUkwoYC4vc3JjL2NvbXBvbmVudHMvJHtuYW1lfS9pbmRleC50c2AsIGltcG9ydC5tZXRhLnVybClcbiAgICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgIHZ1ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IHRhZy5zdGFydHNXaXRoKCdpdnktJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgdnVlSnN4KClcbiAgICBdXG4gICAgaWYgKG1vZGUgIT09ICdkZXYnKSB7XG4gICAgICAgIHBsdWdpbnMucHVzaChcbiAgICAgICAgICAgIGR0cyh7XG4gICAgICAgICAgICAgICAgb3V0RGlyOiAndHlwZXMnXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxuICAgIGxldCBidWlsZCA9IHt9XG4gICAgaWYgKG1vZGUgPT09ICdwcm9kdWN0aW9uJyB8fCBtb2RlID09PSAnZGV2Jykge1xuICAgICAgICBidWlsZCA9IHtcbiAgICAgICAgICAgIHRhcmdldDogJ2VzMjAxNycsXG4gICAgICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgICAgICBlbnRyeTogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpdnktZGVzaWduJyxcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdlcycpIHJldHVybiAnaXZ5LWRlc2lnbi5tanMnXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaXZ5LWRlc2lnbi5qcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3NzVGFyZ2V0OiAnY2hyb21lNjEnXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdlcycpIHtcbiAgICAgICAgYnVpbGQgPSB7XG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0L2VzJyxcbiAgICAgICAgICAgIGxpYjoge1xuICAgICAgICAgICAgICAgIGVudHJ5OiBnZW5JbnB1dCgpLFxuICAgICAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBUeXBlOiAnY3VzdG9tJyxcbiAgICAgICAgcHVibGljRGlyOiBmYWxzZSxcbiAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWlsZFxuICAgIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVWLFNBQVMsZUFBZSxXQUFXO0FBQzFYLFNBQVMsbUJBQW1CO0FBRTVCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBTnlNLElBQU0sMkNBQTJDO0FBUTFRLElBQU0sV0FBVyxNQUFNO0FBQ25CLFFBQU0sU0FBYyxDQUFDO0FBQ3JCLFFBQU0sTUFBTSxZQUFZLGtCQUFrQjtBQUMxQyxNQUFJLFFBQVEsQ0FBQyxTQUFTO0FBQ2xCLFdBQU8sR0FBRyxJQUFJLEVBQUUsSUFBSTtBQUFBLE1BQ2hCLElBQUksSUFBSSxvQkFBb0IsSUFBSSxhQUFhLHdDQUFlO0FBQUEsSUFDaEU7QUFBQSxFQUNKLENBQUM7QUFDRCxTQUFPO0FBQ1g7QUFHQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN0QyxRQUFNLFVBQVU7QUFBQSxJQUNaLElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLGlCQUFpQjtBQUFBLFVBQ2IsaUJBQWlCLENBQUMsUUFBUSxJQUFJLFdBQVcsTUFBTTtBQUFBLFFBQ25EO0FBQUEsTUFDSjtBQUFBLE1BQ0EsZUFBZTtBQUFBLElBQ25CLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxFQUNYO0FBQ0EsTUFBSSxTQUFTLE9BQU87QUFDaEIsWUFBUTtBQUFBLE1BQ0osSUFBSTtBQUFBLFFBQ0EsUUFBUTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0w7QUFBQSxFQUNKO0FBQ0EsTUFBSSxRQUFRLENBQUM7QUFDYixNQUFJLFNBQVMsZ0JBQWdCLFNBQVMsT0FBTztBQUN6QyxZQUFRO0FBQUEsTUFDSixRQUFRO0FBQUEsTUFDUixLQUFLO0FBQUEsUUFDRCxPQUFPLGNBQWMsSUFBSSxJQUFJLGtCQUFrQix3Q0FBZSxDQUFDO0FBQUEsUUFDL0QsTUFBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFdBQW1CO0FBQzFCLGNBQUksV0FBVyxLQUFNLFFBQU87QUFDNUIsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ0osU0FBUztBQUFBLFFBQ2I7QUFBQSxNQUNKO0FBQUEsTUFFQSxXQUFXO0FBQUEsSUFDZjtBQUFBLEVBQ0osV0FBVyxTQUFTLE1BQU07QUFDdEIsWUFBUTtBQUFBLE1BQ0osUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLFFBQ0QsT0FBTyxTQUFTO0FBQUEsUUFDaEIsU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ0osU0FBUztBQUFBLFFBQ2I7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDQSxTQUFPO0FBQUEsSUFDSCxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN4RDtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
