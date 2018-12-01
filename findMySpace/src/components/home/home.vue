<template>
	<div>
	<meta name="viewport" content="width=device-width, initial-scale=1">
		<div class="displayContainer backgroundImage">
		  
			  <ul class="naviBarHeaderBar">
					<li class="naviBarHeaderLogo">
						<img src="../../assets/navBar/logo-white.png">
					</li>
				  <li align="right" class="naviBarHeaderGridButton">
					<naviBar/>
				  </li>
				</ul>
			<div class="titlediv"  align="center" >
			
				<p class="title" > 
				Encontre o 
				<b> melhor local</b>,
				<br>
				 no 
				 <b> melhor preço</b>,
				<br>
				 no 
				 <b> horário perfeito </b>
				<br>
				 para seu grupo.
				</p>
			
			  <!-- 
			<p align="center" class="title">Encontre o <b>melhor local</b>,<br>no <b>melhor preço</b>,<br>no <b>horário perfeito</b><br>para seu grupo.
			</p>      
			
				<span class="displayInTheMiddle alignLeft title">Encontre o <b>melhor local</b>,<br>no <b>melhor preço</b>,<br>no <b>horário perfeito</b><br>para seu grupo.</span>      
				-->
			</div>
		</div>
	</div>
</template>

<script>
import naviBar from '../../components/shared/naviBar'
import cssBarraPadrao from '../../assets/css/styleBarPadrao.css'
import nunito from '../../assets/css/nunito.css'

export default {

  components: {	
	naviBar
  } 
}
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.displayContainer {
  position:fixed;
}


@media screen and (max-width: 500px) {
  .title {
	font-size: 23px !important;
  }
  .titlediv {
	top: 24% !important;
  }
}

@media screen and (max-height: 370px) {
  .titlediv {
	top: 0 !important;
  }
  .title {
	font-size: 26px !important;
  }
  .naviBarHeaderBar {
	margin-bottom: 0px !important;
  }
}


@media screen and (min-height: 370px) {
  .titlediv {
	top: 25% !important;
  }
  .title {
	font-size: 26px !important;
  }
}

.naviBarHeaderBar{
	margin-top:3%;
}
.titlediv {
	top: 27%;
	height: 100%;
	position: relative;
}
.title {
  color:#fff!important;
  font-size:35px;
  text-align: center;
  display: inline-block;
  margin-bottom: 8px;
  font-family: Nunito;
  text-align:left!important
  
}

.backgroundImage {
  background: url("../../assets/home/studio.png") no-repeat center center;
  background-position: 32% center;
  background-size: cover; /* background size */
  min-height: 100%; /* Set the minimum height of a element */
  width:100%;
  height:100%;
  
}

.opacity,.hoverOpacity:hover {
  opacity:0.60;filter:alpha(opacity=60);-webkit-backface-visibility:hidden
}

</style>