import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router"

const routes : Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "Home",
        component: () => import(('../components/Home.vue'))
    },
    {
        path: "/up/:count",
        name: "Upclicker",
        component: () => import(('../components/Upclicker.vue'))
    },
    {
        path: "/down",
        name: "Downclicker",
        component: () => import(('../components/Downclicker.vue'))
    }
]

const router: Router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;