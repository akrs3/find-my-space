<template>
	<div>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<naviBarHeader/>

		<div class="container">
	
		<div class="bodyCadSpac">
			<p align="left"><b> cadastrar novo espaço </b> </p>
			<hr>
			
			<form action="" onsubmit="{ return false;}">
				<table align="left">
					<tr>
						<p class="queryCadSpac" align="left">qual o nome do seu espaço?</p>
						<input align="left" type="text" name="nomeSpace" placeholder="Awesome Space">
					</tr>
					
					<tr>
						<p class="queryCadSpac" align="left">delimite o custo por hora <strong>R$ /h</strong></p>
						<input style="width:100px" align="left" type="number" name="custoHora" placeholder="50">
					</tr>
					
					<tr>
						<p class="queryCadSpac" align="left">endereço do espaço</p>
						<input align="left" type="text" name="endSpace" placeholder="Rua do melhor, n 10">
					</tr>
					
					<tr>
						<p class="queryCadSpac" align="left">escreva um pouco sobre seu espaço</p>
						<textArea align="left" type="text" name="endSpace" placeholder="espaço com espelhos e cantina"/>
					</tr>
					
					<tr>
						<p class="queryCadSpac" align="left">adicione algumas fotos do seu espaço</p>
						
						<div class="fotoArea"> 
							<button onclick="alert('ok!')" class="centerImg"/>
						</div>
					</tr>
					
					<tr>
						<router-link to="novo-espaco-1"><nextButton class="nextButton" align="left"><span>avançar</span></nextButton></router-link >
					</tr>
					<br>							
				</table>
			</form>
		</div>
		</div>
	</div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
import designUX from '../../assets/css/designUX.css'

export default {
  components: {
    naviBarHeader
  }  
}
</script>

<style scoped>
hr{ 
  margin: 0;
}

.nextButton {
  background-color:  #FFFFFF;
  color:#6e5077;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: 50px; 
  width: 100%; 
  min-height:55px; 
  border-radius: 20px; 
  font-weight: bold;
}

.nextButton span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.nextButton span:after {
  content: '\003E';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.nextButton:hover span {
  padding-right: 25px;
}

.nextButton:hover span:after {
  opacity: 1;
  right: 0;
}

.corPadrao{
	color: #6E5077;
}

input {
	display: inline-block;
	float: left;
	background: transparent;
	border: none;
	border-bottom: 1px #7f7d80;
	margin-bottom: 40px;
	font-weight: bold;
	font-size: 24px;
	color: #684572;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */    
	color: #6E5077 !important;
	opacity: 0.55 !important;
}

textArea {
	display: inline-block;
	float: left;
	background: transparent;
	border: none;
	border-bottom: 0.5px #7f7d80;
	margin-bottom: 40px;
	font-size: 20px;
	color: #684572;
	width: 100%; height: 100%; min-height:100px;
}


.fotoArea {
    border: 0px solid red;
    padding: 10px;
    border-radius: 25px;
    background-color: #bbadbf;
	margin-bottom: 50px;
	
	width: 100%; height: 100%; min-height: 180px;
}

.centerImg {
	border: none;
	background: url("../../assets/add.png") no-repeat center center;
	width: 100%; height: 100%; min-height: 180px;
}

.bodyCadSpac {
	color:#6e5077;
	margin-left: 6%;
	margin-right: 6%;
}
.queryCadSpac {
	margin-top: 20px;
}
</style>