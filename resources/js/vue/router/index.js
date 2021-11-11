import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import('../views/Login.vue')
    },
    {
        path: "/Register",
        name: "Register",
        component: () => import('../views/Register.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('../views/Articles.vue')
    },
    {
        path: '/articles/categories/:slug',
        name: 'ArticlesCategories',
        component: () => import('../views/ArticlesCategories')
    },
    {
        path: '/articles/search',
        name: 'Search',
        component: () => import('../views/Articles.vue')
    },


    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../views/About.vue')
    // },
    // {
    //     path: '/jobs',
    //     name: 'Jobs',
    //     component: () => import('../views/jobs/Jobs.vue')
    // },
    // {
    //     path: '/job/:id',
    //     name: 'JobDetails',
    //     component: () => import('../views/jobs/JobDetails.vue'),
    //     props: true
    // },
    // // redirect
    // {
    //     path: "/all-jobs",
    //     redirect: "/jobs"
    // },
    // not founc page
    {
        path: "/:catchAll(.*)",
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router