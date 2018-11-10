<template>
	<div>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<header class="displayContainer backgroundImage">
      
	  <ul class="naviBarHeaderBar">
			<li class="naviBarHeaderLogo">
				<img src="../../assets/navBar/logo-white.png">
			</li>
		  <li align="right" class="naviBarHeaderGridButton">
			<naviBar/>
		  </li>
		</ul>
		
	  <span class="displayInTheMiddle alignLeft title">Encontre o <b>melhor local</b>,<br>no <b>melhor preço</b>,<br>no <b>horário perfeito</b><br>para seu grupo.</span>      
    </header>
	</div>
  </div>
</template>

<script>
import naviBar from '../../components/shared/naviBar'
import cssBarraPadrao from '../../assets/css/styleBarPadrao.css'

export default {

  components: {	
	naviBar
  } 
}
</script>

<style scoped>

.displayContainer {
  position:fixed;
}

.title {
  color:#fff!important;
  font-size:35px;
}

.displayInTheMiddle {
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%);
  width: 390px;
  height:200px;
  display: block;
}

.alignLeft {
  text-align:left!important
}

.backgroundImage {
  background: url("../../assets/home/studio.png") no-repeat center center;
  background-size: cover; /* background size */
  min-height: 100%; /* Set the minimum height of a element */
  width:100%;
  height:100%;
}

.opacity,.hoverOpacity:hover {
  opacity:0.60;filter:alpha(opacity=60);-webkit-backface-visibility:hidden
}

</style>