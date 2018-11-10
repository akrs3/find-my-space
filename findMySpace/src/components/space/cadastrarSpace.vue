<template>
  <div class="bodyCadSpac">
	<p align="left"><strong> cadastrar novo espaço </strong></p>
	<hr>
	
	<form action="" onsubmit="{ return false;}">
		<table align="left">
			<tr>
				<p class="queryCadSpac" align="left">qual o nome do seu espaço?</p>
				<input align="left" type="text" name="nomeSpace">
			</tr>
			
			<tr>
				<p class="queryCadSpac" align="left">delimite o custo por hora <strong>R$ /h</strong></p>
				<input style="width:100px" align="left" type="number" name="custoHora">
			</tr>
			
			<tr>
				<p class="queryCadSpac" align="left">endereço do espaço</p>
				<input align="left" type="text" name="endSpace">
			</tr>
			
			<tr>
				<p class="queryCadSpac" align="left">escreva um pouco sobre seu espaço</p>
				<textArea align="left" type="text" name="endSpace"/>
			</tr>
			
			<tr>
				<p class="queryCadSpac" align="left">adicione algumas fotos do seu espaço</p>
				
				<div class="fotoArea"> 
					<button onclick="alert('ok!')" class="centerImg"/>
				</div>
			</tr>
			
			<tr>
				<button onclick="alert('conclui!')" style=" background-color: #6e5077; margin-bottom: 50px; width: 100%; min-height:55px; border-radius: 20px; color: #ffffff; font-weight: bold;" align="left">concluído!</button>
				
			</tr>
			
			
			
		</table>
	</form>
	
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
  margin: 0;
}

input {
	display: inline-block;
	float: left;
	background: transparent;
	border: none;
	border-bottom: 1px dotted #7f7d80;
	margin-bottom: 40px;
	font-weight: bold;
	font-size: 24px;
}

textArea {
	display: inline-block;
	float: left;
	background: transparent;
	border: none;
	border-bottom: 0.5px dotted #7f7d80;
	margin-bottom: 40px;
	font-size: 20px;
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