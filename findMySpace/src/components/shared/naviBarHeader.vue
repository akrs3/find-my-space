<template>
  <div>
  <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #73567c">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">       
	<a class="title"><img src="./assets/logo-white.png"></a>
    </div>
    <div class="navbar-collapse collapse order-3 dual-collapse2" style="display: none;" >
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">
					<naviBar/>
				</a>
            </li>
        </ul>
    </div>
</nav>


  </div>
</template>

<script>
import naviBar from './naviBar'
export default {
  components: {
	naviBar
  }  
}
</script>

<style scoped>
</style>