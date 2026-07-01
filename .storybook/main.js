const config = {
    stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)', '../src/hooks/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-vitest', '@storybook/addon-a11y', '@storybook/addon-docs'],
    staticDirs: ['../public'],
    framework: {
        name: 'storybook-solidjs-vite',
        options: {
            docgen: false, // <-- Add this to disable TypeScript component parsing
        },
    },
    core: {
        allowedHosts: ['.watsonised.me'],
    },
    // override the inner Vite HMR behavior to get a successful websocket connection
    async viteFinal(config) {
        // detect if Vitest is running the headless test suite
        const isTesting = process.env.VITEST === 'true';
        return {
            ...config,
            server: {
                ...config.server,
                // If testing, kill HMR entirely. Otherwise, pass your proxy settings.
                hmr: isTesting
                    ? false
                    : {
                        protocol: 'wss',
                        clientPort: 443,
                        path: 'vite-hmr',
                        },
            },
        };
    },
};
export default config;
