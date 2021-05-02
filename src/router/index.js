
import Router from 'vue-router'
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";
import Todos from "@/components/Todos";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/todos',
            name: 'Todos',
            component: Todos
        }
    ], mode:'history' // remove # from url
})