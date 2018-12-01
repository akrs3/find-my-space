<template>
 <div> 
 	<naviBarHeader/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	
	<div class="container" style="padding-bottom: 20px">

		<backButton/>

		<div class ="resume">

			<!-- Header -->
			<div align="left" style="margin-top: 25px">

				<span style="color: #6E5077; font-weight: bold; font-size: 20pt; word-wrap: break-word">
			      	Resumo
				</span>
				<br/>
			</div>

			<!-- Date -->
			<div align="left" style="margin-top: 25px">
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold; word-wrap: break-word">
			      	data
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	{{ resume.startDate.getDate() }} de {{ ptbrMonth(resume.startDate.getMonth()) }}
				</span>
			</div>

			<div align="left" style="margin-top: 45px">
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold; word-wrap: break-word">
			      	horário
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	{{ resume.startDate.getHours() }}h - {{ resume.endDate.getHours() }}h
				</span>
			</div>

			<div align="left" style="margin-top: 45px">
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold; word-wrap: break-word">
			      	grupo
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	{{ resume.group }}
				</span>
			</div>

			<div align="left" style="margin-top: 45px">
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold;">
			      	preço
				</span>
			</div>
			<div class="row">
				<span align="left" class="col-md-6 col-xs-6" style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	R${{ resume.pricePerHour }} x {{ resume.totalTime }}
			      	horas 
				</span>
				<span align="right" class="col-md-6 col-xs-6" style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	R${{ resume.totalPrice }}
				</span>
			</div>
			<!--
			<div style="margin-top: 15px">pontinhos</div>
			<div class="row" style="margin-top: 15px">
				<span align="left" class="col-md-6 col-xs-6" style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	total
				</span>
				<span align="right" class="col-md-6 col-xs-6" style="color: #6E5077; font-size: 16pt; word-wrap: break-word">
			      	R${{ resume.totalPrice }}
				</span>
			</div>
			-->
		</div>

		<!-- Find Button -->
		<router-link :to="{ path: '/Home' }">
			<roundedButton title='finalizar e pagar' style="margin-top: 25px" v-bind:compressed='false' v-bind:handler='findSpace' />
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
  },

  beforeMounted() {
		this.$moment.locale('fr');
  },

  data() {
  	return {
  		resume: {
  			startDate: new Date("2018-10-28T12:00:00-03:00"),
  			endDate: new Date("2018-10-28T14:00:00-03:00"),
  			group: 'Super Girls',
  			pricePerHour: 50,
  			totalTime: 0,
  			totalPrice: 0
  		}
  	}
  },

  created: function() {
  	this.resume.totalTime = this.resume.endDate.getHours() - this.resume.startDate.getHours();
  	this.resume.totalPrice = this.resume.pricePerHour * this.resume.totalTime;
  },

  methods: {
		ptbrMonth: function(x) {
			var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
						 "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
			return meses[x];
		}
  }

}
</script>

<style scoped>

.resume {
	min-height: calc(100vh - 230px);
}

</style>