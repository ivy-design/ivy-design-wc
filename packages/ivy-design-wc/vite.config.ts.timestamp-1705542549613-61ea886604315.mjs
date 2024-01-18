// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/private/ivy-design-wc/node_modules/.pnpm/vite@5.0.2_@types+node@18.18.12_sass@1.69.5/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/private/ivy-design-wc/node_modules/.pnpm/@vitejs+plugin-vue@4.5.0_vite@5.0.2_vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/private/ivy-design-wc/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.2_vue@3.3.8/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///E:/private/ivy-design-wc/node_modules/.pnpm/vite-plugin-dts@3.6.3_@types+node@18.18.12_typescript@5.3.2_vite@5.0.2/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/private/ivy-design-wc/packages/ivy-design-wc/vite.config.ts";
var vite_config_default = defineConfig({
  appType: "custom",
  publicDir: false,
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ivy-")
        }
      }
    }),
    vueJsx(),
    dts({
      outDir: "types"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    target: "es2017",
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", __vite_injected_original_import_meta_url)),
      name: "ivy-design",
      fileName: (format) => {
        if (format === "es")
          return "ivy-design.mjs";
        return "ivy-design.js";
      }
    },
    rollupOptions: {
      // treeshake: false,
      // input: {
      //     'ivy-design': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      //     ...genInput()
      // },
      output: {
        // interop: 'auto',
        // format: 'es',
        // entryFileNames: '[name].js',
        // assetFileNames: (assetInfo) => {
        //     if (assetInfo.name === 'ivy-design.css') return 'style.css'
        //     return 'assets/[name][extname]'
        // },
        exports: "named"
      }
    },
    cssTarget: "chrome61"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwcml2YXRlXFxcXGl2eS1kZXNpZ24td2NcXFxccGFja2FnZXNcXFxcaXZ5LWRlc2lnbi13Y1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxccHJpdmF0ZVxcXFxpdnktZGVzaWduLXdjXFxcXHBhY2thZ2VzXFxcXGl2eS1kZXNpZ24td2NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3ByaXZhdGUvaXZ5LWRlc2lnbi13Yy9wYWNrYWdlcy9pdnktZGVzaWduLXdjL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ25vZGU6ZnMnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5jb25zdCBnZW5JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXJnZXQ6IGFueSA9IHt9XG4gICAgY29uc3QgZGlyID0gcmVhZGRpclN5bmMoJy4vc3JjL2NvbXBvbmVudHMnKVxuICAgIGRpci5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIHRhcmdldFtgY29tcG9uZW50cy8ke25hbWV9YF0gPSBmaWxlVVJMVG9QYXRoKFxuICAgICAgICAgICAgbmV3IFVSTChgLi9zcmMvY29tcG9uZW50cy8ke25hbWV9L2luZGV4LnRzYCwgaW1wb3J0Lm1ldGEudXJsKVxuICAgICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGFwcFR5cGU6ICdjdXN0b20nLFxuICAgIHB1YmxpY0RpcjogZmFsc2UsXG4gICAgcGx1Z2luczogW1xuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB0YWcuc3RhcnRzV2l0aCgnaXZ5LScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdnVlSnN4KCksXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBvdXREaXI6ICd0eXBlcydcbiAgICAgICAgfSlcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIHRhcmdldDogJ2VzMjAxNycsXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvaW5kZXgudHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICAgIG5hbWU6ICdpdnktZGVzaWduJyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2VzJykgcmV0dXJuICdpdnktZGVzaWduLm1qcydcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2l2eS1kZXNpZ24uanMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vIHRyZWVzaGFrZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBpbnB1dDoge1xuICAgICAgICAgICAgLy8gICAgICdpdnktZGVzaWduJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgLy8gICAgIC4uLmdlbklucHV0KClcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAvLyBpbnRlcm9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgLy8gZm9ybWF0OiAnZXMnLFxuICAgICAgICAgICAgICAgIC8vIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAgICAgICAvLyBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdpdnktZGVzaWduLmNzcycpIHJldHVybiAnc3R5bGUuY3NzJ1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXVtleHRuYW1lXSdcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjc3NUYXJnZXQ6ICdjaHJvbWU2MSdcbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VSxTQUFTLGVBQWUsV0FBVztBQUc1VyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sU0FBUztBQU4rTCxJQUFNLDJDQUEyQztBQW9CaFEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ04saUJBQWlCO0FBQUEsVUFDYixpQkFBaUIsQ0FBQyxRQUFRLElBQUksV0FBVyxNQUFNO0FBQUEsUUFDbkQ7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN4RDtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU8sY0FBYyxJQUFJLElBQUksa0JBQWtCLHdDQUFlLENBQUM7QUFBQSxNQUMvRCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVztBQUNsQixZQUFJLFdBQVc7QUFBTSxpQkFBTztBQUM1QixlQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0o7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNWCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVNKLFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDSjtBQUFBLElBRUEsV0FBVztBQUFBLEVBQ2Y7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
