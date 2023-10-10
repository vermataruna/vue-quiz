import { createRouter, createWebHistory } from "vue-router"
import QuizesView from "../Views/QuizesView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView
        }
    ]
})

export default router