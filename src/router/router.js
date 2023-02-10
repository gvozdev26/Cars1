import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import CarPage from "@/pages/CarPage";
import CarIdPage from "@/pages/CarIdPage"



const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/cars',
        component: CarPage,
    },
    {
        path: '/cars/:id',
        component: CarIdPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;