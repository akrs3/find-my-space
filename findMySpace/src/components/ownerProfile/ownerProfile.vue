<template>
 <div> 
 <naviBarHeader/>
  <div class="container-fluid ownerprofile">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    <div class="ownerprofile-content">
      
      <!-- Imagem e Nome -->
      <div class="about-me" style="margin-bottom:20px">
        <img src="../../assets/ownerProfile/lucia.png" class="rounded-circle" style="width:120px; margin-top:10px; "/>
        <div>
          <span class="name-person">Lúcia</span>
        </div>
      </div>

      <div class="profile-submenu">

        <div class="row about">
          <div class="col-md-8">
            <img class="rounded-circle addButton padraoButton" style="width:30px; float:left; margin-left:10px; "/>
            <router-link to="novo-espaco-1" style="float:left; margin-left: 10px;">adicionar novo espaço</router-link>
          </div>
          <div class="col-md-4"></div>
        </div><br />

      </div>

    </div>
  </div>
  </div>
</template>

<script>
import naviBarHeader from '../shared/naviBarHeader'

export default {
  components: {
    naviBarHeader,
  }  
}
</script>

<style scoped>

  .ownerprofile {
    font-family: Nunito;
    color: #6e5077;
    min-height: 100%;
    position: relative;
  }

  .ownerprofile-content{
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
	
	
	.padraoButton {
		cursor: pointer;
		display: block;
		width: 30px !important; 
		height: 30px !important; 
		min-height: 30px;
	}

	.addButton {
		background: url("../../assets/profile/addProfile.png") no-repeat center center;
		background-size: 30px;
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