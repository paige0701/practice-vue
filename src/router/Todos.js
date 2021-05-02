import Todos from "@/components/Todos";
import TodoDetail from "@/components/TodoDetail";

export default {
	ROUTES: [
		{
			path: '/todos',
			name: 'Todos',
			component: Todos
		},
		{
			path: '/todos/:id',
			name: 'TodoDetail',
			component: TodoDetail,
			props: true
		}
	]
}
