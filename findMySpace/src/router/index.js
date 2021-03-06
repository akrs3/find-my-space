import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home/home'
import login from '../components/login/login'
import ownerProfile from '../components/ownerProfile/ownerProfile'
import profile from '../components/profile/profile'
import signup from '../components/signup/signup'
import naviBar from '../components/shared/naviBar'
import space from '../components/space/space'
import cadastrarSpace2 from '../components/space/cadastrarSpace2'
import cadastrarSpace1 from '../components/space/cadastrarSpace1'
import newGroup from '../components/newGroup/newGroup'
import myPreferences from '../components/myPreferences/myPreferences'
import favorites from '../components/favorites/favorites'
import groupProfiles from '../components/groupProfile/groupProfile'
import bestSpaces from '../components/bestSpaces/bestSpaces'
import sitemap from '../components/aboutus/sitemap'
import resume from '../components/resume/resume'

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
			name: 'Perfil Dono',
			component: ownerProfile
		},
		{
			path: '/perfil',
			name: 'Perfil Dançarino',
			component: profile
		},
		{
			path: '/signup',
			name: 'Registrar',
			component: signup
		},
		{
			path: '/espaco',
			name: 'Espaço',
			component: space
		},
		{
			path: '/novo-espaco-1',
			name: 'Cadastrar Espaço - 1',
			component: cadastrarSpace1
		},
		{
			path: '/novo-espaco-2',
			name: 'Cadastrar Espaço - 2',
			component: cadastrarSpace2
		},
    	{
			path: '/novo-grupo',
			name: 'Novo Group',
			component: newGroup
		},
		{
			path: '/minhas-preferencias',
			name: 'Minhas Preferências',
			component: myPreferences
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
		},
		{ 
			path: '/resume',
			name: 'resume',
			component: resume
		}
	]
})