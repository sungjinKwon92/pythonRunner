import{createRouter, createWebHistory}  from 'vue-router';

import Home from '../pages/HomePage.vue';
import LogIn from '../pages/LogIn.vue';
import SignUp from '../pages/SignUp.vue';


const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		component: LogIn,
	},
	{
		path: '/signup',
		component: SignUp
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;


