import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [solid()],
    server: {
        open: true,
        port: 3333,
        allowedHosts: ['.watsonised.me'],
        watch: {
            ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
        },
    },
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                        storybookUrl: 'https://6006.watsonised.me', // force Playwright to test against the Nginx proxy URL
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                },
            },
        ],
    },
});
