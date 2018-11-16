<template>
 <div> 
	<naviBarHeader/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    	<div class="container" style="padding-bottom: 20px">

        	<!-- Space Description -->
        	<div class="row align-items-start" style="margin-top: 5px">
        		<div class="col" align="left">
		      		<span style="color: #6E5077; font-weight: bold; font-size: 18pt; word-wrap: break-word">
		      			{{ space.title }}
			      	</span>
			    </div>
			    <div class="col-2" style="margin-top: 2.5px">
			      	<img v-if="space.isFavorite" src="../../assets/heart_filled.png" width="22px" height="22px" align="top">
					<img v-else src="../../assets/heart_empty.png" width="22px" height="22px" align="top">
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
	      		<!-- 
					<img src="../../assets/studio_example_img.png" class="img-fluid space-content-spaceImages-image" alt="Responsive image">
				-->
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

	      	<divisor />

	      	<div class="row align-items-center" style="margin-top: 25px;">
	      		<div class="col-auto" align="left">
					<span style="color: #757376; font-weight: bold; font-size: 10pt;">data</span>
					<br />
					<span style="color: #757376; font-size: 12pt; word-wrap: break-word">
		      			{{ schedule.date | moment("DD/MM/YYYY") }}
			    	</span>
	      		</div>
	      		<div class="col-auto" align="center">
					<img src="../../assets/right_arrow.png" width="41.88px" height="14.33px">
	      		</div>
	      		<div class="col-auto" align="left">
					<span style="color: #757376; font-weight: bold; font-size: 10pt;">horário</span>
					<br />
					<span style="color: #757376; font-size: 12pt; word-wrap: break-word">
		      			{{ schedule.date | moment("hh") }}h-{{ schedule.toDate | moment("hh") }}h
			    	</span>
	      		</div>
	      	</div>

	      	<div style="margin-top: 25px;" align="left">
	      		<span style="color: #757376; font-weight: bold; font-size: 10pt;">grupo</span>
			    <br />
			    <span style="color: #757376; font-size: 12pt; word-wrap: break-word">
		      		{{ group.name }}
			    </span>
	      	</div>

	      	<divisor />

	      	<!-- Schedule Confirm -->
	      	<div class="row align-items-center" style="margin-top: 25px;">
	      		<div class="col-auto" align="left">
					<span style="color: #757376; font-size: 16pt; word-wrap: break-word">
		      			R${{ space.pricePerHour }}/hora
			    	</span>
	      		</div>
	      		<div class="col" align="left">
	      			<roundedButton title='reservar' subtitle='você ainda não será cobrado' v-bind:compressed='true' v-bind:handler='scheduleSpace' />
	      		</div>
	      	</div>

      </div>

  </div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
import roundedButton from '../shared/roundedButton'
import divisor from '../shared/divisor'
import imgslider from '../imgslider/imgslider'

export default {
  components: {
  	naviBarHeader,
  	roundedButton,
  	imgslider,
  	divisor
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
  		group: {
  			id: 1,
  			name: 'Super Girls'
  		}

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