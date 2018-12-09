<template>
    <div>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<naviBarHeader/>

			<div class="container myPreferences">
				<div class ="my-preferences-content">
					<!-- Back Button -->
					<backButton />
				
					<!-- Header -->
					<div style="margin-top:10px" align="left">
						<span style="font-weight: bold; font-size: 14pt;margin-left:10px;">minhas preferências</span>
					</div>
					<br/>

					<!-- 3 itens submenu -->
					<div class="myPreferences-submenu">

				        <div class="row about">
				          <div class="col-md-6 col-xd-6">
				            <img src="../../assets/profile/addProfile.png" class="rounded-circle" style="width:25px; float:left; margin-left:10px;"/>
							<router-link to="" style="float:left; margin-left: 10px;">adicione seus horários disponíveis</router-link>
				          </div>
						  <!--<div class="col-md-6 col-xd-6">
							<img src="../../assets/profile/favorite.png" class="rounded-circle" style="width:25px; float:left; margin-left:10px; "/>
							<router-link to="" text-wrap style="float:left; margin-left: 5px;">usar mesmos horários da semana passada</router-link>
						  </div>-->

						</div>
			      	</div>
					<div>
			      		<hourTable editing="true" v-bind:didChangeSchedules = "selectSchedule"/>
			      	</div>
					<br />
					<div>
						<div style="margin-left:10px;" align="left">
							<span style="color: #757376; font-size: 11pt">escolha o(s) melhor(es) bairro(s)</span>
							<br><br>
						</div>

						<div class="row" style="margin-left:10px;">
							<div class="col-6 col-xl-2 col-md-4" v-for="option in neighborhood" style="font-weight: bold;" align="left" :key="option.text">
								<input type="checkbox" v-bind:id="option.value" v-bind:value="option.text" v-model="neighborhood_selected">
								<label for="option.value">{{ option.text }}</label>
							</div>
						</div>
						<br>
					</div>
	
					<div style="margin-left:10px;" align="left">
						<span style="color: #757376; font-size: 11pt">delimite a zona de preço mais confortável</span>
						<br><br>
					</div>
					<div align="left" style="margin-left:10px;">
						
						<b>R$ {{ value[0] }} - R$ {{ value[1] }}/h</b>
					</div><br><br>
					
					<vue-slider v-model="value"></vue-slider>

				</div>

				<!-- BOTAO CONCLUIDO REDIRECIONA DE VOLTA PRA O PERFIL MESMO? -->
				<router-link to="perfil" style="margin-bottom:15px;">
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
import vueSlider from 'vue-slider-component'
import hourTable from '../shared/hourTable'

export default {
   components: {
	naviBarHeader,
	backButton,
	divisor,
	roundedButton,
	vueSlider,
	hourTable
  },

  methods: {
      selectSchedule:function(schedules) {
		console.log(schedules)
		}
    },

  data(){
	return {
		width: "100%",
		show: true,
		value: [
		20,
		50
		],
		min: 0,
		max: 250,
		disabled: false,
		tooltipMerge: false,
		tooltip: "always",

		neighborhood: [
			{text: 'Ibura', value: 'ibura'},
			{text: 'Casa Forte', value: 'casa-forte'},
			{text: 'Camaragibe', value: 'camaragibe'},
			{text: 'Casa Amarela', value: 'casa-amarela'},
			{text: 'Várzea', value: 'varzea'},
			{text: 'Jaqueira', value: 'jaqueira'},
			
		],
		neighborhood_selected: []
	}
  },
  methods: {
	  findSpace: function() {
		  console.log(this.neighborhood_selected)
		}
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
	.about a {
		color: #6e5077;
		font-size: 12pt;
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