import MyHome from "@/components/MyHome.vue";
import SignUp from "@/components/SignUp.vue";
import LoginPage from "@/components/LoginPage.vue";
import AddItem from "@/components/AddItem.vue";
import UpdateItem from "@/components/UpdateItem.vue";
import {createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        name:'MyHome',
        component:MyHome,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'AddItem',
        component:AddItem,
        path:'/add'
    },
    {
        name:'UpdateItem',
        component:UpdateItem,
        path:'/update/:id',
        props:true
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass: 'pages-active-link',
    linkExactActiveClass: 'pages-exact-active-link'
});

export default router;