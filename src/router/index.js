import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import DummyPage from '@/pages/dummy'
import AddNewCart from '@/pages/add-new-cart'
import Payment from '@/pages/payment'
import PersonalProfile from '@/pages/personal-profile'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'home',
		component: Home
	},
	{
		path: '/otherPages',
		name: 'otherPages',
		component: DummyPage
	},
	{
		path: '/addCart',
		name: 'addCart',
		component: AddNewCart
	},
	{
		path: '/payment',
		name: 'payment',
		component: Payment
	},
	{
		path: '/personalProfile',
		name: 'home',
		component: PersonalProfile
	},
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router;
