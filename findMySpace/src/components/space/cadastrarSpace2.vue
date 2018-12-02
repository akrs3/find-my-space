<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <naviBarHeader/>

    <div class="bodyCadSpac">
      <backButton align="left" />

      <div align="left">
        <span align="left" style="font-size: 13pt; word-wrap: break-word">
          <b> cadastrar novo espaço </b>
        </span>
      </div>
      
      <form action="" onsubmit="{ return false;}">
        <table align="left">
          <tr>
            <p class="queryCadSpac" align="left">qual o nome do seu espaço?</p>
            <input align="left" type="text" name="nomeSpace" placeholder="Ex: Awesome Space" style="border-bottom: 1px solid #757376;">
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">delimite o custo por hora <strong>R$ /h</strong></p>
            <input style="width:100px" align="left" type="number" name="custoHora" placeholder="Ex: 50">
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">endereço do espaço</p>
            <textArea align="left" type="text" name="endSpace" placeholder="Ex: Av Mascarenhas de Morais, nº 50, Recife - PE"/>
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">que recursos há no seu espaço</p>
           	
             <div class="row" style="color: #6E5077; margin-top:10px; font-size: 10pt;">
              <div class="col-6 col-xl-2 col-md-4" v-for="option in filters" style="font-weight: bold;" align="left">
                <input type="checkbox" v-bin:id="option.value" v-bind:value="option.text" v-model="filters_selected">
                <label for="option.value">{{ option.text }}</label>
              </div>
            </div>  

          </tr>

          <tr>
            <p class="queryCadSpac" align="left">adicione algumas fotos do seu espaço</p>
            
            <div class="fotoArea"> 
              <button onclick="alert('ok!')" class="centerImg"/>
            </div>
          </tr>
          
          <tr>
          </tr>
          <br>              
        </table>
      </form>
    </div>
    <router-link to="espaco">
      <roundedButton title="cadastrar"></roundedButton>
    </router-link>
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
    },

    data(){
      return{
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
    }
  }
</script>

<style scoped>
  hr{ 
    margin: 0;
  }

  .corPadrao{
    color: #6E5077;
  }

  input {
    display: inline-block;
    float: left;
    background: transparent;
    border: none;
    border-bottom: 1px #7f7d80;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #684572;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */    
    color: #6E5077 !important;
    opacity: 0.55 !important;
  }

  textArea {
    display: inline-block;
    float: left;
    background: transparent;
    border: none;
    border-bottom: 0.5px #7f7d80;
    margin-bottom: 40px;
    font-size: 20px;
    color: #684572;
    width: 100%; height: 100%; min-height:100px;
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

  .bodyCadSpac {
    color:#6e5077;
    margin-left: 6%;
    margin-right: 6%;
    min-height: calc(100vh - 230px);
  }
  .queryCadSpac {
    margin-top: 20px;
  }
</style>