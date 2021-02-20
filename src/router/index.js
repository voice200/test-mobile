import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import DummyPage from '@/pages/dummy'
import AddNewCard from '@/pages/add-new-card'
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
		path: '/addCard',
		name: 'addCard',
		component: AddNewCard
	},
	{
		path: '/payments',
		name: 'payments',
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
