<template>
  <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

      <div class="container-fluid new-group">

      	<div class ="new-group-content">
	      	<!-- Back Button -->
	      	<div style=" display: flex; align-items: center;" align="left">
	      		<button class="backButton" v-on:click="$router.go(-1)" />
	      		<span style="margin-left: 20px; font-size: 12pt">voltar</span>
	      	</div>
	      
	      	<!-- Header -->
	      	<div style="margin-top:10px" align="left">
		      	<span style="font-weight: bold; font-size: 14pt;">cadastrar novo grupo</span>
		      	<hr/>
		    </div>

	      	<!-- Group Attributes -->
	      	<div style="margin-top:30px" align="left">
		      	<span style="color: #757376; font-size: 11pt">qual o nome do seu grupo</span>
		      	<br/>
		      	<input id="name" type="text" v-model="groupName" placeholder="Awesome Dancers">
	      	</div>

	      	<!-- Group Invite -->
	      	<div style="margin-top:30px" align="left">
		      	<span style="color: #757376; font-size: 11pt">envie esse link para os membros se juntarem</span>
		      	<br/>
		      	<span style="font-weight: bold; font-size: 15pt; word-wrap: break-word">
		      		http://findmyspace.com/#/invite:group
		      	</span>
		    </div>
		</div>

	    <!-- Create Button -->
	    <div>
	    	<button class="createButton" v-on:click="createGroup">
	    		concluído!
	    	</button>
	    </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
  	return {
  		groupName: ''
  	}
  },

  methods: { 

  		createGroup: function(event) {
  			let groupName = this.groupName

  			alert(groupName)
  		}

  }
}
</script>

<style scoped>
/*
@font-face {
    font-family: 'Nunito-Regular';
    src: url('https://github.com/google/fonts/blob/master/ofl/nunito/Nunito-Regular.ttf/');
}

*/

.new-group {
	//font-family: 'Nunito-Regular';
	min-height:100%;
   	position:relative;
}

.new-group-content {
	min-height: calc(100vh - 170px);
}

.new-group-content span {
	color: #6E5077;
}

.new-group-content hr {
	background-color: #6E5077; 
	height: 1px; 
	border: none;
}

.new-group-content input {
	font-weight: bold;
	font-size: 15pt;
	color: #6E5077;
	border: none;
 	outline:none;
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

.backButton {
    background-image: url( '../../assets/back_button.png' );
    background-size: 10px 20px;
    background-repeat: no-repeat;
    background-position: center; 
    padding: 0px 0px;
    border: none;
    height: 44px;  
    width: 10px;
    color: #123123;
}

.backButton:focus {
	outline:0 !important;
}

.createButton {
	width: 100%;
    background-color: #6E5077;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;
    border-radius: 12px;
}

</style>