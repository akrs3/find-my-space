<template>
 <div> 
      <table align="center">
	  Cadastro: 
			<tr>
				<p class="queryCadSpac" align="left">Usuário: </p>
				
				
						<input align="left" type="text" name="user">
			</tr>
			
			<tr align="left">
				<p class="queryCadSpac" align="left">Senha: </p>
				
						<input align="left" type="password" name="senhaSignup">
			</tr>
			
			<tr align="left">
				<p class="queryCadSpac" align="left">Confirme a senha: </p>
				
						<input align="left" type="password" name="confirmesenha">
			</tr>
		</table>
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
  margin: 0;
}

p {
	margin:0;
}

input {
	float: left;
	background: transparent;
	border: none;
	font-weight: bold;
	font-size: 20px;
	
	
    border: 0px solid red;
    padding-left: 20px;
	margin-bottom: 20px;
    border-radius: 25px;
    background-color: #bbadbf;
	opacity: 0.5;
	
	width: 100%; height: 44px !important;
}

.queryCadSpac {
	color:#6e5077;
	margin-left: 6%;
	margin-right: 6%;
}

.fotoArea {
}
</style>