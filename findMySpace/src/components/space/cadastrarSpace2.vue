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
      
      <form action="" onsubmit="{ return false;}">
        <table align="left">
          <tr>
            <p class="queryCadSpac" align="left">qual o nome do seu espaço?</p>
            <input align="left" type="text" name="nomeSpace" v-model="name" placeholder="Awesome Space">
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">delimite o custo por hora <strong>R$ /h</strong></p>
            <input style="width:100px" align="left" type="number" v-model="pricePerHour" name="custoHora" placeholder="50">
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">endereço do espaço</p>
            <input align="left" type="text" name="endSpace" v-model="neighborhood" placeholder="Rua do melhor, n 10">
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">escreva um pouco sobre seu espaço</p>
            <textArea align="left" type="text" name="endSpace" placeholder="espaço com espelhos e cantina"/>
          </tr>
          
          <tr>
            <p class="queryCadSpac" align="left">adicione algumas fotos do seu espaço</p>
            
            <div class="fotoArea">
              <label for="files" class="btn centerImg"></label>
              <input id="files" class="hiddenInput" style="visibility:hidden;" type="file" @change="onFileChanged"> 
              <!-- <button onclick="alert('ok!')" class="centerImg"/> -->
            </div>
          </tr>
          
          <tr>
          </tr>
          <br>              
        </table>
      </form>
    </div>
      <roundedButton :handler="onUpload" title="cadastrar"></roundedButton>
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
    data() {
      return {
        selectedFile: null,
        photo: '',
        error: '',
        name: '',
        pricePerHour: '',
        neighborhood: '',
        rating: 0

      }
    },
    methods: {
      onFileChanged (event) {
        this.selectedFile = event.target.files[0]
        console.log(this.selectedFile)
      },
      
      generateBase64: function generateBase64() {
      var _this = this;
      var canvas = document.createElement('CANVAS');
      var img = document.createElement('img');
      this.url = URL.createObjectURL(this.selectedFile);
      img.src = this.url;
      console.log("teste3")
      console.log(img)
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        console.log("teste2")
        _this.photo = canvas.toDataURL('image/png');
        console.log(_this.photo)
        canvas = null;
      };
      img.onerror = function (error) {
        _this.error = 'Could not load image, please check that the file is accessible and an image!';
      };
    },
    onUpload() {
        console.log("teste")
        this.generateBase64()
        console.log(this.base64)
        console.log(this.name)
        console.log(this.neighborhood)
        console.log(this.pricePerHour)
      // upload file, get it from this.selectedFile
      },   
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
  .hiddenInput {
    width: 100%; height: 0;
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