import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig((configEnv) => {
    const config = viteConfig(configEnv)
    return mergeConfig(
        config,
        defineConfig({
            test: {
                environment: 'jsdom',
                exclude: [...configDefaults.exclude, 'e2e/*'],
                root: fileURLToPath(new URL('./', import.meta.url)),
                testTransformMode: {
                    web: ['\\.[jt]sx$']
                }
            }
        }) as never
    )
})
