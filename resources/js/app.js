import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import MasonryWall from '@yeger/vue-masonry-wall';
import 'vue3-carousel/dist/carousel.css'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        const pageModule = pages[`./Pages/${name}.vue`];
        const page = pageModule.default;
        return {
            ...page,
        };
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(plugin);
        app.use(createPinia());
        app.use(MasonryWall);
        app.use(Vue3Toastify, {
            autoClose: 1000,
        });
        app.mount(el);
    },
});
