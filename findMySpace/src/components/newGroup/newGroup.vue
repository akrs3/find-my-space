<template>
  <div>	
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<naviBarHeader/>

		<div class="container-fluid new-group">
			<div class ="new-group-content">
				<!-- Back Button -->
				<backButton />
			
				<!-- Header -->
				<div style="margin-top:10px" align="left">
					<span style="font-weight: bold; font-size: 14pt;">adicionar novo grupo</span>
				</div>

				<!-- Group Attributes -->
				<div style="margin-top:30px" align="left">
					<span style="color: #757376; font-size: 11pt">qual o nome do seu grupo</span>
					<br/>
					<input id="name" type="text" v-model="groupName" placeholder="Awesome Dancers" style="border-bottom: 1px solid #757376;width: 100%">
				</div>

				<!-- Group Invite -->
				<div style="margin-top:30px" align="left">
					<span style="color: #757376; font-size: 11pt">envie esse link para os membros se juntarem</span>
					<br/>
					<span style="font-weight: bold; font-size: 15pt; word-wrap: break-word">
						{{ groupInviteURL }} 
					</span>
				</div>
			</div>

			<!-- Create Button -->
			<router-link to="perfil">
				<roundedButton title='concluído!' v-bind:compressed='false' v-bind:handler='createGroup' />
			</router-link>
		</div>
  </div>
</template>

<script>
	import naviBarHeader from '../shared/naviBarHeader'
	import backButton from '../shared/backButton'
	import roundedButton from '../shared/roundedButton'
	import divisor from '../shared/divisor'

	export default {
		components: {
			naviBarHeader,
			roundedButton,
			backButton,
			divisor
		},

		data() {
			return {
				groupName: '',
				groupInviteURL: 'http://findmyspace.com/#/invite:group'
			}
		},

		methods: { 
				createGroup() {
					var uid = FirebaseManager.getUserID();
					FirebaseManager.addData('groups', {
						name: this.groupName,
						owner: uid,
						members: [uid]
					}).then((ref) => {
						var groupID = ref.key;
						FirebaseManager.addUserData('groups', groupID).then(() => {
							console.log("done");
						})
					})
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
		/*font-family: 'Nunito-Regular';*/
		min-height:100%;
		position:relative;
	}

	.new-group-content {
		min-height: calc(100vh - 170px);
		
		margin-left: 6%;
		margin-right: 6%;
	}

	.new-group-content span {
		color: #6E5077;
	}

	.new-group-content input {
		font-weight: bold;
		font-size: 15pt;
		color: #6E5077;
		border: none;
		outline: none;
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