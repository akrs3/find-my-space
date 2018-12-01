<template>
	<div>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<naviBarHeader/>

		<div class="container">

		<backButton />

				<div class="bodyCadSpac">

					<br>
					<p align="left"><b> cadastrar novo espaço </b> </p>
					<divisor/>
				</div>
				<!-- CORPO DA 1 PAGINA DO CADASTRO DO ESPAÇO -->
					...<br/>
					...<br/>
					...
				<!-- FIM DO CORPO DA 1 PAGINA DO CADASTRO DO ESPAÇO -->
			</div>

		<button onclick="alert('conclui!')" style=" background-color: #6e5077; margin-bottom: 50px; width: 100%; min-height:55px; border-radius: 20px; color: #ffffff; font-weight: bold;" align="left">concluído!</button>
						
	</div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
import backButton from '../shared/backButton'
import nextButton from '../shared/nextButton'
import divisor from '../shared/divisor'
import roundedButton from '../shared/roundedButton'
import designUX from '../../assets/css/designUX.css'

export default {
   components: {
	naviBarHeader,
	backButton,
	nextButton,
	divisor,
	roundedButton
  }
}
</script>

<style scoped>
a{
	display:block;
	color: #6e5077;
	height:44px;
}

.bodyCadSpac {
	color:#6e5077;
	margin-left: 6%;
	margin-right: 6%;
}

.novoespaco2 {
	position:absolute;
  	align:left;
	margin-left:10px;
}

.menu {
  list-style-type:none;
  margin:0;
  padding:0;
  overflow:hidden;
  position:fixed; 
}


</style>