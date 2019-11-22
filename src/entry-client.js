import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './app'


const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
    app.$mount('#app')
})
