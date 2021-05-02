import Router from 'vue-router'
import Vue from "vue";
import HelloWorld from "@/router/HelloWorld";
import Todos from "@/router/Todos"

Vue.use(Router)

export default new Router({
	routes: [
		HelloWorld.ROUTES,
		Todos.ROUTES
	], mode: 'history' // remove # from url
})
