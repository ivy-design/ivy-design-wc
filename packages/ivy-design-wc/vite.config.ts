import { fileURLToPath, URL } from 'node:url'
import { readdirSync } from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const genInput = () => {
    const target: any = {}
    const dir = readdirSync('./src/components')
    dir.forEach((name) => {
        target[`components/${name}`] = fileURLToPath(
            new URL(`./src/components/${name}/index.ts`, import.meta.url)
        )
    })
    return target
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const plugins = [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('ivy-')
                }
            },
            customElement: true
        }),
        vueJsx()
    ]
    if (mode !== 'dev') {
        plugins.push(
            dts({
                outDir: 'types'
            })
        )
    }
    return {
        appType: 'custom',
        publicDir: false,
        plugins: plugins,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            target: 'es2017',
            lib: {
                entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
                name: 'ivy-design',
                fileName: (format) => {
                    if (format === 'es') return 'ivy-design.mjs'
                    return 'ivy-design.js'
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
                    exports: 'named'
                }
            },

            cssTarget: 'chrome61'
        }
    }
})
