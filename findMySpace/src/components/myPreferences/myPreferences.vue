<template>
    <div>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<naviBarHeader/>

			<div class="container-fluid my-preferences">
				<div class ="new-group-content">
	      	<!-- Back Button -->
	      	<backButton />
	      
	      	<!-- Header -->
	      	<div style="margin-top:10px" align="left">
		      	<span style="font-weight: bold; font-size: 14pt;margin-left:10px;">minhas preferências</span>
		      	<divisor />
		      </div>

					<!-- CORPO DA PAGINA DAS MINHAS PREFERÊNCIAS -->
					...<br/>
					...<br/>
					...
					<!-- FIM CORPO DA PAGINA DAS MINHAS PREFERÊNCIAS -->

				</div>

				<!-- BOTAO CONCLUIDO REDIRECIONA DE VOLTA PRA O PERFIL MESMO? -->
				<router-link to="perfil">
					<roundedButton title='concluído!' style="margin-top: 25px" v-bind:compressed='false' v-bind:handler='findSpace' />
				</router-link>

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

</style>