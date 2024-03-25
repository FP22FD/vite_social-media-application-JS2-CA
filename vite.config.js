// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                feed: resolve(__dirname, 'feed/index.html'),
                postdetails: resolve(__dirname, 'feed/postdetails.html'),
                profile: resolve(__dirname, 'profile/index.html'),
            },
        },
    },
});
