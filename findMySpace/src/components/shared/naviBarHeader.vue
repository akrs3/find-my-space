<template>
	<div>
  <!-- bootstap nao estava adaptivo (qnd dava resize na pagina nao ajustava os itens)
	  <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #73567c">
			<div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">       
			<img align="left" src="./assets/logo-white.png">
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
	-->
	
		<ul class="naviBarHeaderBar">
			<li class="naviBarHeaderLogo">
				<img src="./assets/logo-white.png">
			</li>
		  <li class="naviBarHeaderGridButton">
			<naviBar/>
		  </li>
		</ul>

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

.navbar {

/*bootstrap
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
	padding: 0;
	padding-left: 1rem;
	*/
}

.naviBarHeaderBar {
	background-color: #73567c;
    list-style-type: none;
    margin: 0;
    padding: 0;
	margin-bottom: 20px;
    overflow: hidden;
}

.naviBarHeaderGridButton{
	float:right; 
	color:#c4b7c7;

}

.naviBarHeaderLogo{
	float:left;
}


</style>