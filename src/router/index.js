import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
    import ('views/home/Home.vue')
const Cart = () =>
    import ('views/cart/Cart.vue')
const My = () =>
    import ('views/My/My.vue')
const Center = () =>
    import ('views/center/Center.vue')

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/cart', component: Cart },
    { path: '/my', component: My }, { path: '/center', component: Center }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router