import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home/home'
import login from '../components/login/login'
import ownerProfile from '../components/ownerProfile/ownerProfile'
import profile from '../components/profile/profile'
import signUp from '../components/signUp/signUp'
import naviBar from '../components/shared/naviBar'
import space from '../components/space/space'
import cadastrarSpace from '../components/space/cadastrarSpace'
import newGroup from '../components/newGroup/newGroup'
import favorites from '../components/favorites/favorites'
import groupProfiles from '../components/groupProfile/groupProfile'
import bestSpaces from '../components/bestSpaces/bestSpaces'
import sitemap from '../components/aboutus/sitemap'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: home
		},
		{
			path: '/home',
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
			path: '/novo-espaco',
			name: 'Cadastrar Espaço',
			component: cadastrarSpace
    	},
    	{
			path: '/novo-grupo',
			name: 'Novo Group',
			component: newGroup
		},
		{
			path: '/naviBar',
			name: 'naviBar',
			component: naviBar
		},
		{
			path: '/favoritos',
			name: 'Espaços Favoritos',
			component: favorites
		},
		{ 
			path: '/grupo',
			name: 'Grupo',
			component: groupProfiles
		},
		{ 
			path: '/melhoreslocais',
			name: 'Melhores Locais',
			component: bestSpaces
		},
		{ 
			path: '/sitemap',
			name: 'sitemap',
			component: sitemap
		}
	]
})