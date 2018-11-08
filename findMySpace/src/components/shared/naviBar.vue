<template>
	<div>
		<div id="mySidenav" class="sidenav" align="left" onfocusout="document.getElementById('mySidenav').style.width = '0'">
			<div style="padding-bottom: 20px">
				<a class="title"><img src="../../assets/navBar/logo.png"></a>
				<a href="javascript:void(0)" class="closebtn" onclick="document.getElementById('mySidenav').style.width = '0'">&times;</a>
			</div>
			<router-link to="login">entrar</router-link>
			<a href="#">inscreva seu grupo</a>
			<a href="#">eu tenho um espaço</a>
			<hr>
			<a href="#">reporte um problema</a>
			<a href="#">sobre nós</a>
		</div>
		

		<div class="hello">
			<div align="right" style="margin-top: 1%; margin-right: 2%">
				<span style="font-size:30px;cursor:pointer" onclick="{var g = document.getElementById('mySidenav');	g.style.width = '250px';}">&#9776;</span>
			</div>
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
//nunito
/* vietnamese */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofIOuaBXso.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofIO-aBXso.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofINeaB.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: Nunito;
}

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
	font-family: Nunito;
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

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>