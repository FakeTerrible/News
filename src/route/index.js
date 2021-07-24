import { createRouter,createWebHashHistory } from "vue-router";
import index from "../views/index.vue";
import channelManage from "../views/channelManage.vue";
const routes = [
    {
        path:'/index',
        redirect: '/'
    },
    {
        path:'/',
        name:'index',
        component:index
    },
    {
        path:"/channelManage",
        name:"channelManage",
        component: channelManage
        
    }
];

const route =  createRouter({
    history:createWebHashHistory(),
    routes,
})

export default route;