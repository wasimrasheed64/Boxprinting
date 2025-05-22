import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/css/app.css',
                'resources/scss/main.scss',
                'vue3-carousel/dist/carousel.css'
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@assets': path.resolve(__dirname, '/assets/*'),
        },
    },
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
})
