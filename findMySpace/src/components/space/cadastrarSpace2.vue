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
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 24px;
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