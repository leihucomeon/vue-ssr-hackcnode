import Vue from 'vue'
import { createStore } from './store'
import { createRouter } from './router'
import App from './App.vue'
export const createApp = () => {
    const store = createStore()
    const router = createRouter()

    const app = new Vue({
        store,
        router,
        render: (h) => h(App)
    })
    return {
        app,
        store,
        router
    }
}