<template>
    <div>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<naviBarHeader/>

			<div class="container myPreferences">
				<div class ="new-group-content">
					<!-- Back Button -->
					<backButton />
				
					<!-- Header -->
					<div style="margin-top:10px" align="left">
						<span style="font-weight: bold; font-size: 14pt;margin-left:10px;">minhas preferências</span>
						
					</div>
					<br/> <br/>

					<!-- 3 itens submenu -->
					<div class="myPreferences-submenu">

				        <div class="row about">
				          <div class="col-auto">
				            <img src="../../assets/profile/addProfile.png" class="rounded-circle" style="width:25px; float:left; margin-left:10px;"/>
				            
							<router-link to="" style="float:left; margin-left: 10px;">adicione seus horários disponíveis</router-link>
				          </div>
				          
				        

						
							<div class="col-auto">
							  <img src="../../assets/profile/favorite.png" class="rounded-circle" style="width:25px; float:left; margin-left:10px; "/>

							  <router-link to="" text-wrap style="float:left; margin-left: 5px;">usar mesmos horários da semana passada</router-link>
							</div>

						</div><br />
			
			      	</div><br />

			      	<div>
			      		<img src="../../assets/my-calendar.png"/>
			      	</div>

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

	.myPreferences {
		font-family: Nunito;
		color: #6e5077;
		min-height: 100%;
		position: relative;
	}

	.myPreferences-content{
		font-family: Nunito;
		min-height: cal(100vh - 170px);
	}

	.name-person {

		font-weight: bold;
		margin-bottom: 100px;
		font-size: 16pt; 
		align: center;
	}

	.about a {
		color: #6e5077;
		font-size: 12pt;
	}

	.name-group span {
		
		font-weight: bold;
		font-size: 14pt;
		margin-top: 10px;
		float:left; 
		margin-left: 30px;
	}

	.title-space span{
		font-weight: bold;
		font-size: 12pt;
		margin-top: 10px;
		float:left; 
		margin-left: 30px;
	}

	.descr-day-place h5{
		font-size: 12pt;
		color: #757376;
		margin-top: 10px;
		float:left; 
		margin-left: 30px;
	}

	.next span {
		color: #757376; 
		font-size: 10pt; 
		/*float:left; */
		margin-left: 30px;
	}

	hr { 
		height: 1px;
		color: #6e5077;
		background-color: #6e5077;
		border: none;
		margin-left: 10px;
		margin-right: 10px;
		align:center;
	}

	::-webkit-input-placeholder { /* Chrome */
		color: #6E5077;
		opacity: 0.75;
	}

	:-ms-input-placeholder { /* IE 10+ */
		color: #6E5077;
		opacity: 0.75;
	}

	::-moz-placeholder { /* Firefox 19+ */
		color: #6E5077;
		opacity: 0.75;
	}

	:-moz-placeholder { /* Firefox 4 - 18 */
		color: #6E5077;
		opacity: 0.75;
	}

</style>