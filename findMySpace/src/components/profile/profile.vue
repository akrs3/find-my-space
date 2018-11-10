<template>

  <div class="container-fluid profile">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <div class="profile-content">
      
      <!-- Imagem e Nome -->
      <div class="about-me" style="margin-bottom:20px">
        <img src="../../assets/profile/carol.png" class="rounded-circle" style="width:120px; margin-top:10px; "/>
        <div>
          <span class="name-person">Carol</span>
        </div>
      </div>

      <!-- 3 itens submenu -->
      <div class="profile-submenu">

        <div class="row about">
          <div class="col-md-8">
            <img src="../../assets/profile/edit.png" class="rounded-circle" style="width:30px; float:left; margin-left:10px; "/>
            <a href="#" style="float:left; margin-left: 10px;">minhas preferências</a>
          </div>
          <div class="col-md-4"></div>
        </div><br />

	      <div class="row about">
	        <div class="col-md-8">
	          <img src="../../assets/profile/favorite.png" class="rounded-circle" style="width:30px; float:left; margin-left:10px; "/>
            <a href="#" style="float:left; margin-left: 10px;">meus espaços favoritos</a>
          </div>
          <div class="col-md-4"></div>
	      </div><br />
        
	      <div class="row about">
	        <div class="col-md-8">
	          <img src="../../assets/profile/adition.png" class="rounded-circle" style="width:30px; float:left; margin-left:10px;"/>
            <a :href="'#novo-grupo'" style="float:left; margin-left: 10px;">adicionar novo grupo</a>
          </div>
          <div class="col-md-4"></div>
        </div>

      </div><br />

    <!-- Meus Grupos -->

      <div class="profile-my-groups">
        <div v-for="group in groups" style="margin-bottom:20px;">
          <div class="row name-group">
              <span>{{ group.name }}</span>
          </div>
          <hr>
          <div class="row next">
            <span>próximo encontro</span>
          </div>

          <div class="row title-space">
            <span>{{ group.place }}</span>
          </div>

          <div class="row">
            <div class="descr-day-place" style="float:left; width:70%;">
              <div class="row" style="margin-left:0px;">
                <h5>{{ group.date }} - {{ group.hour_begin }} às {{ group.hour_end }}</h5>
              </div>

              <div class="row" style="margin-left:0px;">
                <h5>{{ group.address }}</h5>
              </div>             
               
            </div>
            
            <div class="descr-day-place" style="float:right; width:20%; margin-rigth:20px">

              <img v-if="group.status == 'confirmado'" src="../../assets/profile/confirm.png" class="rounded-circle" style="width:30px; margin-left:30px;">
              <img v-else src="../../assets/profile/pendent.png" class="rounded-circle" style="width:30px; margin-left:30px;">
              <span>{{ group.status }}</span>


              <!--<div class="row">
                <div class="next" style="float:rigth; margin-left:20px;">
                  <span>{{ group.status }}</span>
                </div>
              </div>-->
              
            </div>

          </div>
        </div>
          
      </div>
    </div>

  </div>
  
</template>

<script>
export default {

  data(){
    return {
      groups: [
        {
          name: 'Super Girls',
          place: 'Lunar Studio de Dança',
          date: '09/11 - sexta',
          hour_begin: '17h',
          hour_end: '20h',
          address:'Rua das Pernambucanas, 130',
          status:'confirmado',
        },
        {
          name: 'Awesome People',
          place: 'Lunar Studio de Dança',
          date: '11/11 - domingo',
          hour_begin: '08h',
          hour_end: '12h',
          address:'Rua das Pernambucanas, 130',
          status:'pendente',
        }
      ]
    }
  }
  //components: {}  
}
</script>

<style scoped>

  .profile {
    font-family: Nunito;
    color: #6e5077;
    min-height: 100%;
    position: relative;
  }

  .profile-content{
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

  .name-group span {
		
		font-weight: bold;
		font-size: 14pt;
    margin-top: 10px;
    float:left; 
    margin-left: 30px;
	}

	.title-space span{
		font-weight: bold;
		font-size: 12pt;
    margin-top: 10px;
    float:left; 
    margin-left: 30px;
	}

	.descr-day-place h5{
		font-size: 12pt;
		color: #757376;
    margin-top: 10px;
    float:left; 
    margin-left: 30px;

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