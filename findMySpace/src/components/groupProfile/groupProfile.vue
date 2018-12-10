<template>
 <div> 
 	<naviBarHeader/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	
	<div class="container" style="padding-bottom: 20px">

		<backButton/>

		<div class ="group-content">

			<!-- Header -->
			<div align="left" style="margin-top: 10px;">

				<span style="color: #6E5077; font-weight: bold; font-size: 15pt; word-wrap: break-word; margin-bottom: 40px;">
			      	{{ group.name }}
				</span>
				<br/><br/>

				<span style="color: #757376; font-weight: bold; font-size: 11pt; word-wrap: break-word">
			      	semana atual
				</span>
			</div>

			<!-- Voting Status -->
			<div align="left" style="margin-top: 15px">
				<span style="color: #6E5077; font-size: 13pt; word-wrap: break-word">
			      	{{ voting.members }}/{{ group.members }}
				</span>

				<span style="color: #757376; font-size: 13pt; word-wrap: break-word">
			      	membros já votaram
				</span>
			</div>

			<div align="left" style="margin-top: 25px">
				<span style="color: #757376; font-size: 11pt; word-wrap: break-word">
			      	horário mais votado
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold; word-wrap: break-word">
			      	{{ voting.date | moment("dddd, DD/MM - HH") }}h às {{ voting.toDate | moment("HH") }}h
				</span>
			</div>

			<div align="left" style="margin-top: 20px">
				<span style="color: #757376; font-size: 11pt; word-wrap: break-word">
			      	bairro mais votado
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold; word-wrap: break-word">
			      	{{ voting.neighborhood }}
				</span>
			</div>

			<div align="left" style="margin-top: 20px">
				<span style="color: #757376; font-size: 11pt; word-wrap: break-word">
			      	zona de preço mais votada
				</span>
				<br/>
				<span style="color: #6E5077; font-size: 13pt; font-weight: bold; word-wrap: break-word">
			      	R${{ voting.pricePerHour }} - R${{ voting.MaxPricePerHour }} por hora
				</span>
			</div>

			<div align="left" style="margin-top: 20px;">
				<span style="color: #757376; font-size: 11pt; word-wrap: break-word;">
			      	principais recursos necessários para o ensaio
				</span>

				<div class="row" style="color: #6E5077; margin-top:10px; font-size: 10pt;">
					<div class="col-6 col-xl-2 col-md-4" v-for="option in filters" v-bind:key="option" style="font-weight: bold;" align="left">
						<input type="checkbox" v-bin:id="option.value" v-bind:value="option.text" v-model="filters_selected">
						<label for="option.value">{{ option.text }}</label>
					</div>
				</div>
			</div>

		</div>

		<roundedButton title='encontre meu espaço!' style="margin-top: 10px" v-bind:compressed='false' v-bind:handler='findSpace' />

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

  beforeMount() {
	this.$moment.locale('pt-br')

    FirebaseManager.getUserData('').then(userData => {

      if(!userData) return;
      if (!userData.preferences) return;

      const preference = userData.preferences[Object.keys(userData.preferences)[0]]

      console.log(preference)

  	  const rangeHour = preference.hours[0]
  	  this.voting.date = new Date(rangeHour[0])
  	  this.voting.toDate = new Date(rangeHour[1])

  	  this.voting.pricePerHour = preference.minPrice
  	  this.voting.MaxPricePerHour = preference.maxPrixe
  	})
  },

	created() {
		let group = this.$route.params.group
		if (group) {
			this.group.id = group.id
		    this.group.name = group.name
		    this.group.members = group.members.length
		    this.voting.members = group.members.length
		}
	},

  data() {
  	return {
  		group: {
  			name: 'Super Girls',
  			id: '',
  			members: 5
  		},

  		voting: {
  			members: 1,
  			fromWeek: new Date(1572566400*1000),
  			toWeek: new Date(1573084800*1000),
  			date: new Date(1541419200*1000),
  			toDate: new Date(1541426400*1000),
  			neighborhood: 'Graças',
  			pricePerHour: 50,
  			MaxPricePerHour: 100
  		},
		filters: [
			{text: 'Espelhos', value: 'espelhos'},
			{text: 'Barra', value: 'barra'},
			{text: 'Colchões', value: 'colchões'},
			{text: 'Piso antiderrapante', value: 'piso-antiderrapante'},
			{text: 'Linóleo', value: 'linoleo'},
		],
		filters_selected: []
  	}
  },

  methods: {

  	findSpace: function() {
        let find = {
        	group: this.group,
        	voting: this.voting
        }

       this.$router.push({ name: 'Melhores Locais', params: { find } })
  	}
  }

}
</script>

<style scoped>

.group-content {
	min-height: calc(100vh - 230px);
}

</style>