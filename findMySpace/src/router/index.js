import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home/home'
import login from '../components/login/login'
import ownerProfile from '../components/ownerProfile/ownerProfile'
import profile from '../components/profile/profile'
import signUp from '../components/signUp/signUp'
import shared from '../components/shared/naviBar'
import space from '../components/space/space'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: home
		},
		{
			path: '/login',
			name: 'Login',
			component: login
		},
		{
			path: '/me',
			name: 'Perfil Usuário',
			component: ownerProfile
		},
		{
			path: '/perfil',
			name: 'Perfil',
			component: profile
		},
		{
			path: '/signup',
			name: 'Registrar',
			component: signUp
		},
		{
			path: '/espaco',
			name: 'Espaço',
			component: space
		},
		{
			path: '/shared',
			name: 'Shared',
			component: shared
		}
	]
})