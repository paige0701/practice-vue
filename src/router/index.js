import Router from 'vue-router'
import Vue from "vue";
import Todos from "@/components/Todos";
import HelloWorld from "@/router/HelloWorld";

Vue.use(Router)

export default new Router({
    routes: [
        HelloWorld.routes,
        {
            path:'/todos',
            name: 'Todos',
            component: Todos
        }
    ], mode:'history' // remove # from url
})
