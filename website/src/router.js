import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'index',
            component: () => import('./views/Index.vue')
        },
        {
            path: '/spaces/create',
            name: 'create',
            component: () => import('./views/CreateSpace.vue')
        },
        {
            path: '/spaces/:space_id',
            name: 'spaces',
            component: () => import('./views/Spaces.vue')
        },
        {
            path: '/spaces/:space_id/edit',
            name: 'editSpace',
            component: () => import('./views/EditSpace.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./views/Admin.vue')
        }
    ]
})