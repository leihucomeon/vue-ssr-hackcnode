import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'
import TopComponent from '../views/top/index.vue'
Vue.use(VueRouter)

const Comp404 = Vue.extend({
    template: '<h1>404</h1>'
})

export const createRouter = () => {
    return new VueRouter({
        mode: 'history',
        scrollBehavior: () => {
            return {
                x: 0,
                y: 0
            }
        },
        routes: [
            {
                path: '/',
                component: Layout,
                redirect: '/top',
                children: [
                    {
                        path: '/top',
                        component: TopComponent                        
                    }
                ]
            },
            {
                path: '*',
                comonent: Comp404
            }
        ]
    })
}