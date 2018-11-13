<template>
	<div>
		<naviBarHeader/>
		<div class="container-fluid cadastrar-space"
  		<div class="bodyCadSpac">
				<p align="left" style="margin-left:10px;"><b> cadastrar novo espaço </b> </p>
				<divisor/>
			</div>
			<!-- CORPO DA 1 PAGINA DO CADASTRO DO ESPAÇO -->
				...<br/>
				...<br/>
				...
			<!-- FIM DO CORPO DA 1 PAGINA DO CADASTRO DO ESPAÇO -->
		</div>
	</div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
import backButton from '../shared/backButton'
import divisor from '../shared/divisor'
import roundedButton from '../shared/roundedButton'

export default {
   components: {
	naviBarHeader,
	backButton,
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

</style>