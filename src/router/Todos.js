import Todos from "@/components/Todos";

export default {
	ROUTES: [
		{
			path: '/todos',
			name: 'Todos',
			component: Todos
		},
		{
			path: '/todos/:id',
			name: 'Todos',
			component: Todos
		}
	]
}
