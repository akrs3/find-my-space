<template>
  <div class="container-fluid">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/"> <!-- cdn não é a melhor forma, mas eu nao lembro como faz com webpack -->
      
      <div class="about-me" style="margin-bottom:100px">
	      <div>
	        <img class="img-fluid rounded-circle" src='carol.png'>
	      </div>
		    <div class="name-person">
		    	<h6>Carol</h6>
		    </div>

		    <div class="row about">
	        <div class="col-md-6">
            <a href="#" class="mr-2 ml-2"><img src="assets/profile/pencil.svg" class="rounded-circle" />minhas preferências</a>
          </div>
          <div class="col-md-6"></div>
	      </div>

	      <div class="row about">
	        <div class="col-md-6">
	          <a href="#"><img src="assets/profile/pencil.svg" class="rounded-circle" />meus espaços favoritos</a>
          </div>
          <div class="col-md-6"></div>
	      </div>
        
	      <div class="row about">
	        <div class="col-md-6">
	          <a href="#"><img src="assets/profile/pencil.svg" class="rounded-circle" />adicionar novo grupo</a>
	      	</div>
          <div class="col-md-6"></div>
        </div>
      </div><br /><br />

      <div class="my-groups">
        <div v-for="group in groups" style="margin-bottom:100px">
          <div class="row">
            <div class="col-md-6 title-space">
              <h4>{{ group.name }}</h4>
            </div>
            <div class="col-md-4"></div><div class="col-md-2"></div>
          </div>

          <div class="row">
            <h4 class="col-md-4 title-space">------------------------</h4>
            <div class="col-md-8"></div>
          </div>

          <div class="row">
            <h4 class="col-md-4 title-space">próximo encontro</h4>
            <div class="col-md-8"></div>
          </div>

          <div class="row">
            <div class="col-md-6 title-space"><h5>{{ group.place }}</h5></div>
            <div class="col-md-6"></div>
          </div>

          <div class="row">
            <div class="col-md-8 title-space"><h5>{{ group.date }} - {{ group.hour_begin }} às {{ group.hour_end }}</h5></div>
            <!--<div class"col-md-2"><img :src="group.img_status" class="rounded-circle" style="width:100%" /></div>-->
            <div class="col-md-4"><h6>{{ group.status }}</h6></div>
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
          img_status:'https://goo.gl/images/NaKPKX'
        },
        {
          name: 'Awesome People',
          place: 'Lunar Studio de Dança',
          date: '11/11 - domingo',
          hour_begin: '08h',
          hour_end: '12h',
          address:'Rua das Pernambucanas, 130',
          status:'pendente',
          img_status:'../assets/profile/pencil.svg'
        }
      ]
    }
  }

  //components: {}  
}
</script>

<style scoped>
	@font-face {
	  font-family: 'Nunito';
	  font-style: normal;
	  font-weight: 400;
	  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofIOuaBXso.woff2) format('woff2');
	  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
	  font-family: 'Nunito';
	  font-style: normal;
	  font-weight: 400;
	  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofIO-aBXso.woff2) format('woff2');
	  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
	  font-family: 'Nunito';
	  font-style: normal;
	  font-weight: 400;
	  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofINeaB.woff2) format('woff2');
	  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

  template {
    font-family: Nunito;
    color: #6e5077;
    font-size: 100px;
  }

	.name-person h6 {
		font-family: Nunito;
		font-weight: bold;
		font-size: 100px;
		color: #6e5077;
    margin-bottom: 100px;
	}

	.about a {
		font-family: Nunito;
		color: #6e5077;
		font-size: 40px;
	}

	.title-space h4{
		font-family: Nunito;
		font-weight: bold;
		font-size: 50px;
		color: #6e5077;
    margin-top: 10px;
	}

	.title-space h5{
		font-family: Nunito;
		font-weight: bold;
		font-size: 40px;
		color: #6e5077;
    margin-top: 30px;

	}

  
</style>