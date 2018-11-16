<template>
 <div> 
 	<naviBarHeader/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	
	<div class="container" style="padding-bottom: 20px">

		<backButton/>

		<div class ="group-content">

			<!-- Header -->
			<div align="left" style="margin-top: 25px">

				<span style="color: #6E5077; font-weight: bold; font-size: 20pt; word-wrap: break-word">
			      	{{ group.name }}
				</span>
				<br/>

				<span style="color: #757376; font-weight: bold; font-size: 14pt; word-wrap: break-word">
			      	semana {{ voting.fromWeek | moment("DD/MM") }} - {{ voting.toWeek | moment("DD/MM") }}
				</span>
			</div>

			<!-- Voting Status -->
			<div align="left" style="margin-top: 15px">
				<span style="color: #6E5077; font-size: 17pt; word-wrap: break-word">
			      	{{ voting.members }}/{{ group.members }}
				</span>

				<span style="color: #757376; font-size: 17pt; word-wrap: break-word">
			      	membros já votaram
				</span>
			</div>

			<divisor/>

			<div align="left" style="margin-top: 25px">
				<span style="color: #757376; font-size: 13pt; word-wrap: break-word">
			      	horário mais votado
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 16pt; font-weight: bold; word-wrap: break-word">
			      	{{ voting.date | moment("dddd DD/MM - HH") }}h às {{ voting.toDate | moment("HH") }}h
				</span>
			</div>

			<div align="left" style="margin-top: 45px">
				<span style="color: #757376; font-size: 13pt; word-wrap: break-word">
			      	bairro mais votado
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 16pt; font-weight: bold; word-wrap: break-word">
			      	{{ voting.neighborhood }}
				</span>
			</div>

			<div align="left" style="margin-top: 45px">
				<span style="color: #757376; font-size: 13pt; word-wrap: break-word">
			      	zona de preço mais votada
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 16pt; font-weight: bold; word-wrap: break-word">
			      	R${{ voting.pricePerHour }} - R${{ voting.MaxPricePerHour }} por hora
				</span>
			</div>

		</div>

		<!-- Find Button --> 
		<!-- talvez aqui fique o locais favoritos, pois pela buscaButton esta acessivel nessa tela, favoritos nao... troquei pra favoritos --> 
		<router-link :to="{ path: '/favoritos' }">
			<roundedButton title='encontre meu espaço!' style="margin-top: 25px" v-bind:compressed='false' v-bind:handler='findSpace' />
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
	this.$moment.locale('fr')
  },

  data() {
  	return {
  		group: {
  			name: 'Super Girls',
  			members: 5
  		},

  		voting: {
  			members: 4,
  			fromWeek: new Date(1572566400*1000),
  			toWeek: new Date(1573084800*1000),
  			date: new Date(1541419200*1000),
  			toDate: new Date(1541426400*1000),
  			neighborhood: 'Graças',
  			pricePerHour: 50,
  			MaxPricePerHour: 100
  		}
  	}
  },

  methods: {

  	findSpace: function() {
  	}
  }

}
</script>

<style scoped>

.group-content {
	min-height: calc(100vh - 230px);
}

</style>