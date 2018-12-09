<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <naviBarHeader/>



    <div class="container-fluid new-space">
      <div class ="new-space-content">
        <!-- Back Button -->
        <backButton />
      
        <!-- Header -->
        <div style="margin-top:10px" align="left">
          <span style="font-weight: bold; font-size: 14pt;">cadastrar novo espaço</span>
        </div>

      <!-- Group Attributes -->
        <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">qual o nome do seu espaço</span>
          <br/>
          <input id="name" type="text" v-model="spaceName" placeholder="Espaço Brincarte" style="border-bottom: 1px solid #757376;width: 100%">
        </div>

        <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">delimite o custo por hora</span>
          <br/>
          <input id="price" type="text" v-model="pricePerHour" placeholder="R$50/h" style="border-bottom: 1px solid #757376;width: 100%">
        </div>

        <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">endereço do espaço</span>
          <br/>
          <input id="address" type="text" v-model="address" placeholder="Rua Conselheiro Portela, 333" style="border-bottom: 1px solid #757376;width: 100%">
        </div>

        <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">como é seu espaço</span>
          <br/>
          <input id="description" type="text" v-model="description" placeholder="possui espelho para ensaio..." style="border-bottom: 1px solid #757376; width: 100%">
        </div>

         <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">adicione algumas fotos do seu espaço</span>
  
          <div class="fotoArea" style="margin-top:10px"> 
            <button onclick="alert('ok!')" class="centerImg"/>
          </div>
        </div>

      </div>


      <router-link to="novo-espaco-1">
        <roundedButton title="cadastrar horários"></roundedButton>
      </router-link>

    </div>
  </div>
</template>

<script>
  import backButton from '../shared/backButton'
  import naviBarHeader from '../shared/naviBarHeader'
  import roundedButton from '../shared/roundedButton'
  import designUX from '../../assets/css/designUX.css'

  export default {
    components: {
      naviBarHeader,
      roundedButton,
      backButton
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

  .new-space {
    /*font-family: 'Nunito-Regular';*/
    min-height:100%;
    padding-bottom: 10px;
    position:relative;
  }

  .new-space-content {
    min-height: calc(100vh - 170px);
    
    margin-left: 6%;
    margin-right: 6%;
  }

  .new-space-content span {
    color: #6E5077;
  }

  .new-space-content input {
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

   .fotoArea {
      border: 0px solid red;
      padding: 10px;
      border-radius: 25px;
      background-color: #bbadbf;
    margin-bottom: 50px;
    
    width: 100%; height: 100%; min-height: 180px;
  }

  .centerImg {
    border: none;
    background: url("../../assets/ownerProfile/addProfile.png") no-repeat center center;
    width: 100%; height: 100%; min-height: 180px;
  }
</style>