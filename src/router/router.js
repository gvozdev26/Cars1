import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import CarPage from "@/pages/CarPage";
import CarIdPage from "@/pages/CarIdPage";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostidPage"

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
    {
        path: '/posts',
        component: PostPage,
    },

    {
        path: '/posts/:id',
        component: PostIdPage,
    }, 
    {
        path: '/about',
        component: About,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;