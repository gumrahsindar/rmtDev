import { VueQueryPlugin } from "@tanstack/vue-query"
import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify"
Vue3Toastify
import "vue3-toastify/dist/index.css"

const app = createApp(App)

app.use(VueQueryPlugin)

app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions)

app.mount("#app")
