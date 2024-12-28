import {createRouter, createWebHistory} from "vue-router";
import Home from "../Home.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
	{
        path: "/",
        name: 'Homepage',
        component: Home
    },
	{
        path: "/:pathMatch(.*)*",
        name: '404',
        component: NotFound
    }, // 404 route
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
