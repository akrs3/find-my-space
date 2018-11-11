<template>
    <div>
		<naviBarHeader/>
		<nav align="left" style="margin-left:30%;margin-top:4%">
		  <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}<br></router-link>
		</nav>
	</div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
export default {
   components: {
	naviBarHeader
  }
}
</script>

<style scoped>
a{
	display:block;
	color: #6e5077;
	height:44px;
}
</style>