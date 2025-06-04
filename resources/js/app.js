import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import MasonryWall from '@yeger/vue-masonry-wall';
import 'vue3-carousel/dist/carousel.css';

// 🔄 Load all Vue pages from the Pages directory
const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });

// ✅ Import your error page directly
import ErrorPage from './Pages/error.vue'; // <-- Make sure this file exists

// ⚙️ Set up Inertia App
createInertiaApp({
  // Dynamically resolve pages
  resolve: name => {
    const page = pages[`./Pages/${name}.vue`];
    if (!page) {
      // Fallback if page doesn't exist
      return pages['./Pages/error.vue'];
    }
    return page;
  },

  // Set up your Vue app
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) });

    app.use(plugin);
    app.use(createPinia());
    app.use(MasonryWall);
    app.use(Vue3Toastify, { autoClose: 1000 });

    app.mount(el);
  },

  // ✅ Handle 404, 500 and other server errors
  errorComponent: ErrorPage,
});
