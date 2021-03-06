import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/WelcomeView.vue")
    },
    {
        path: "/puzzle-selector",
        name: "puzzle-selector",
        component: () => import("./views/PuzzleSelector.vue")
    },
    {
        path: "/puzzle",
        name: "puzzle",
        component: () => import("./views/PuzzleView.vue")
    },
    {
        path: "/test",
        name: "test",
        component: () => import("./views/TestView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
