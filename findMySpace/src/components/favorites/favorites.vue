<template>
  <div>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	  	<naviBarHeader/>

 		<div class="container">

 			<backButton/>

        	<!-- Header -->
        	 <div class="row align-items-start" style="margin-top: 20px; width: 100%">
        		<div class="col-10" align="left">
		      		<span style="color: #6E5077; font-weight: bold; font-size: 14pt; word-wrap: break-word">
		      			meus espaços favoritos
			      	</span>
			    </div>
			    <div class="col-2" style="margin-top: 2.5px; padding-right: 0px" align="right">
			      	<img src="../../assets/heart_filled.png" width="22px" height="22px" align="top">
				</div>
	      	</div>

	      	<divisor/>

	      	<!-- Space List -->
	      	<div class="row" style="margin-top: 30px">
	      		<div class="col-md-4" align="left" v-for="space in spaces" style="margin-bottom: 30px">
	      			
	      			<router-link :to='{path: space.path}'> 
						<img v-bind:src="space.photo" class="img-fluid  w-100" />
					</router-link>
					
	      			<div class="row align-items-start">
	      				<div class="col" align="left">
	      					<span style="color: #6E5077; font-weight: bold; font-size: 15pt; word-wrap: break-word">
		      					{{ space.name }}
			      			</span>

			      			<div class="row align-items-center">
			      				<div class="col-auto">
			      					<img src="../../assets/icon_price.png" width="20px" height="20px">
			      					R${{ space.pricePerHour }}/hora
			      				</div>
			      				<div class="col-auto">
			      					<img src="../../assets/icon_location.png" width="20px" height="20px">
			      					{{ space.neighborhood }}
			      				</div>
			      			</div>

	      				</div>
	      				<div class="col-auto" style="margin-top: 3px">
	      					<img v-for="n in space.rating" src="../../assets/start_filled.png" width="14px" height="14px" style="margin-right: 5px">
	      					<img v-for="n in calRemaingRaiting(space.rating)" src="../../assets/star_empty.png" width="14px" height="14px" align="top" style="margin-right: 5px">
	      				</div>
	      			</div>
	      		</div>
	      	</div>


 		</div>
  </div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'
import backButton from '../shared/backButton'
import divisor from '../shared/divisor'

export default {

  	components: {
  		naviBarHeader,
  		backButton,
  		divisor
  	},

  	data() {
  		return {
			  spaces: [],
			  favoritesIDS: ["spaceID"]
  		}
  	},

  	methods: {

  		 calRemaingRaiting: function(rating) {
  		 	return 5 - rating
  		 }
	},
	created(){
    //var userId = firebase.auth().currentUser.uid;
    this.favoritesIDS.forEach(favoriteID => {
			return firebase.database().ref('/spaces/' + favoriteID).once('value').then((snapshot) => {
      		console.log("teste")
      		console.log(snapshot.val())
      		this.spaces.push(snapshot.val())

  			});
		});
  	}
	//var userId = firebase.auth().currentUser.uid;
		
}
</script>

<style scoped>

.favorites-content {}

</style>