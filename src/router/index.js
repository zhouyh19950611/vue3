import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path:"/login",
        name: "login",
        component: ()=>import("@/views/login")
    },
    {
        path:"/register",
        name: "register",
        component: ()=>import("@/views/register")
    },
    {
        path:'/',
        name: "main",
        component: ()=>import("@/views/Main"),
        redirect: "/home",
        children:[
            {
                path:"/home",
                name: "home",
                meta:{ title: "首页" },
                component: ()=>import("@/views/home"),
                children:[
                    {
                        path:"/home/detail",
                        name: "detail",
                        meta:{ title: "详情" ,parent: "home"},
                        component: ()=>import("@/views/home/detail"),
                    },
                ]
            },
            {
                path:"/numeral",
                name: "numeral",
                meta:{ title: "数码", parent: ''},
                component: ()=>import("@/views/numeral")
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: ()=>import("@/views/error/404")
    },
]
const router = createRouter({
    // createWebHashHistory 
    // createWebHistory
    history: createWebHistory(),
    routes
})
export default router