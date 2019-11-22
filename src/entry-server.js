import Vue from 'vue'
import { createApp } from './app'
const isDev = process.env.NODE_ENV !== 'production'
export default function (context) {
    return new Promise((resolve, reject) => {
        const s = isDev && Date.now()
        const { app, store, router } = createApp()
        const { url } = context
        const { fullPath } = router.resolve(url).route
    
        if (fullPath !== url) {
            return reject({ url: fullPath })
        }
        
        router.push(url)

        // 只会在router初始化的时候调用一次
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            } 
            const promises = matchedComponents.filter(({ asyncData }) => typeof asyncData === 'function')
                .map(({ asyncData }) => asyncData({
                    store,
                    route: router.currentRoute
                }))
            Promise.all(promises || []).then(() => {
                isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
                context.state = store.state
                resolve(app)
            })
        }, reject)
    })

}