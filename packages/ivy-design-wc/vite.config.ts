import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    appType: 'custom',
    publicDir: false,
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        target: 'esnext',
        lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'ivy-design',
            fileName: (format) => {
                if (format === 'es') {
                    return 'ivy-design.mjs'
                } else {
                    return 'ivy-design.js'
                }
            }
        }
        // rollupOptions: {
        //     input: fileURLToPath(new URL('./src/index.ts', import.meta.url))
        // }
    }
})
