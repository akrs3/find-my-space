<template>
	<div>		
		<div id="mySidenav" class="sidenav" style="z-index: 10" align="left">
			<div style="padding-bottom: 20px">
				<router-link to="home" style="width:82%" class="title"><img src="../../assets/navBar/logo.png"></router-link>
				<a href="javascript:void(0)" class="closebtn" onclick="document.getElementById('mySidenav').style.width = '0'; var h = document.getElementById('areaCloseBehind'); h.style.display = 'none'; h.style.width = '0'">&times;</a>
			</div>
			<router-link class="linksNaviBar" to="login">entrar</router-link>
			<router-link class="linksNaviBar" to="novo-grupo">inscreva seu grupo</router-link>
			<router-link class="linksNaviBar" to="novo-espaco">eu tenho um espaço</router-link >
			<hr>
			<router-link class="linksNaviBar" to="">reporte um problema</router-link >
			<router-link class="linksNaviBar" to="">sobre nós</router-link >
		</div>
		
		<div id="areaCloseBehind" onclick="document.getElementById('mySidenav').style.width = '0'; var h = document.getElementById('areaCloseBehind'); h.style.display = 'none'; h.style.width = '0'" style="width:0; height:100%; z-index: 9; background:rgba(0,0,0,0.25); display:none" class="sidenav" align="right">
		</div>
    
			<div align="right">
				<span class="gridButton" onclick="{ document.getElementById('mySidenav').style.width = '250px'; var h = document.getElementById('areaCloseBehind'); h.style.display = 'block'; setTimeout(function(){h.style.width = '100%'},2);}"></span>
			</div>
	
  </div>
</template>

<script>
export default {
  components: {	
  } 
}
</script>

<style scoped>
hr{ 
  height: 1px;
  color: #6e5077;
  background-color: #6e5077;
  border: none;
  margin-left: 30px;
  margin-right: 30px;
}

.sidenav {
    height: 100%;
	align-content: left;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #f9f8f9;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
	width: 250px;
	//font-family: Nunito;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 19px;
    color: #7f5c8a;
    display: block;
    transition: 0.3s;
	//font-weight: bold;
	font-weight: normal;
	//text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;/text-shadow: 0 0 2px rgba(110,80,119,0.2);
	//-webkit-text-stroke: .009em rgba(51,51,51,0.30);
	font-smooth: always;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    float: left;
	width: 25%;
    top: 0;
    right: 25px;
    font-size: 36px;
    padding-left: 45px;
}

.sidenav .title {
    position: absolute;
    float: left;
    top: 11px;
    font-size: 20px;
}

.linksNaviBar {
	width:100%;
}

.gridButton {
	display: block;
	background: url("../../assets/navBar/gridButton.png") no-repeat center center;
	width: 44px !important; 
	height: 44px !important; 
	min-height: 44px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>