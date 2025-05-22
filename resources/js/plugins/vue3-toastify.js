import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    install(app) {
        app.use(Vue3Toastify, { autoClose: 1000 })
        app.config.globalProperties.$toast = toast
    }
}
