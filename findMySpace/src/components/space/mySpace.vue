<template>
 <div> 
	<naviBarHeader/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    	<div class="container" style="padding-bottom: 20px">
			<backButton/>
        	<!-- Space Description -->
        	<div class="row align-items-start" style="margin-top: 5px">
        		<div class="col" align="left">
		      		<span style="color: #6E5077; font-weight: bold; font-size: 18pt; word-wrap: break-word">
		      			{{ space.title }}
			      	</span>
			    </div>
	      	</div>

	      	<div class="row">
	      		<div class="col" align="left">
	      			<span style="color: #757376; font-size: 13pt; word-wrap: break-word">
		      			{{ space.address }}
			      	</span>
	      		</div>
	      	</div>

	      	<div style="margin-top: 10px">

				<div style="display:block; margin-bottom:11px">
					<imgslider class="img-fluid space-content-spaceImages-image" alt="Responsive image"/>
				</div>
			</div>

	      	<div class="row align-items-center" style="margin-top: 15px">
	      		<div class="col-auto" align="left">
		      		<img v-for="n in space.rating" src="../../assets/start_filled.png" width="21px" height="21px" align="top" style="margin-right: 5px">
		      		<img v-for="n in remainingRating" src="../../assets/star_empty.png" width="21px" height="21px" align="top" style="margin-right: 5px">
			    </div>
			    <div class="col" align="left">
			    	<span style="color: #757376; font-size: 10pt;">
		      			{{ space.ratingCount }} avaliações
			      	</span>
			    </div>
	      	</div>

	      	<div style="margin-top: 25px" align="left">
	      		<span style="color: #757376; font-weight: bold; font-size: 10pt;">sobre</span>
			    <br />
			    <span style="color: #757376; font-size: 12pt; word-wrap: break-word">
		      		{{ space.description }}
			    </span>
	      	</div>

            <div align="left" style="margin-top: 25px;">
                <span style="color: #757376; font-weight: bold; font-size: 10pt;">
			      	preço por hora
				</span><br />
                <span style="color: #757376; font-size: 12pt; word-wrap: break-word">
                    R${{ space.pricePerHour }}/hora                       
                </span>
            </div>

			<div align="left" style="margin-top: 25px;">
				<span style="color: #757376; font-weight: bold; font-size: 10pt;">
			      	principais recursos do espaço
				</span>

				<div class="row" style="color: #6E5077; margin-top:10px; font-size: 10pt;">
					<div class="col-6 col-xl-2 col-md-4" v-for="option in filters" style="font-weight: bold;" align="left">
						<input type="checkbox" v-bin:id="option.value" v-bind:value="option.text" name="filters" checked>
						<label for="option.value">{{ option.text }}</label>
					</div>
				</div>
			</div>

            
      </div>

  </div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
import roundedButton from '../shared/roundedButton'
import backButton from '../shared/backButton'
import divisor from '../shared/divisor'
import imgslider from '../imgslider/imgslider'

export default {
  components: {
  	naviBarHeader,
  	roundedButton,
  	imgslider,
  	divisor,
	backButton
  },

  data() {
  	return {
  		space: {
  			title: 'Lunar Studio de Dança',
  			address: 'Rua General Martins Pereira, 32',
  			description: 'Esse studio foi criado por Luana e Luísa em 1999.',
  			rating: 4,
  			ratingCount: 30,
  			isFavorite: false,
  			pricePerHour: 50
  		},
  		schedule: {
  			date: new Date(1541763000*1000), //time in ms
  			toDate: new Date(1541770200*1000) 
  		},
		filters: [
			{text: 'Espelhos', value: 'espelhos'},
			{text: 'Barra', value: 'barra'},
			{text: 'Colchões', value: 'colchões'},
			{text: 'Piso antiderrapante', value: 'piso-antiderrapante'},
			{text: 'Linóleo', value: 'linoleo'},
			{text: 'Som', value: 'Som'},
		],
		filters_selected: []

  	}
  },

  methods: {
  	scheduleSpace: function() {

  	}
  },

  computed: {

  	remainingRating: function() {
  		return 5 - this.space.rating
  	}
  }
}
</script>

<style scoped>
</style>