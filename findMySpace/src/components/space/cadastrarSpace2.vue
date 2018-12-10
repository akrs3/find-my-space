'<template>
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
          <input id="neighborhood" type="text" v-model="neighborhood" placeholder="Rua Conselheiro Portela, 333" style="border-bottom: 1px solid #757376;width: 100%">
        </div>

        <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">como é seu espaço</span>
          <br/>
          <input id="description" type="text" v-model="description" placeholder="possui espelho para ensaio..." style="border-bottom: 1px solid #757376; width: 100%">
        </div>

         <div style="margin-top:30px" align="left">
          <span style="color: #757376; font-size: 11pt">adicione algumas fotos do seu espaço</span>
  
      
          <form action="" onsubmit="{ return false;}">
            <table>
                <div class="fotoArea">
                  <label for="files" class="btn centerImg"></label>
                  <input id="files" class="hiddenInput" style="visibility:hidden;" type="file" @change="onFileChanged"> 
                  <!-- <button onclick="alert('ok!')" class="centerImg"/> -->
                </div>
              </tr>
                          
            </table>
          </form>
        </div>

      </div>
      <roundedButton :handler="create" title="cadastrar"></roundedButton>

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
    },
    data() {
      return {
        selectedFile: null,
        photo: '',
        error: '',
        spaceName: '',
        pricePerHour: '',
        neighborhood: '',
        description: '',
        rating: 5

      }
    },
    methods: {
      onFileChanged (event) {
        this.selectedFile = event.target.files[0]
        console.log(this.selectedFile)
      },
      
      generateBase64: function generateBase64(callback) {
      var _this = this;
      var canvas = document.createElement('CANVAS');
      var img = document.createElement('img');
      this.url = URL.createObjectURL(this.selectedFile);
      img.src = this.url;

      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        const photo = canvas.toDataURL('image/png');
        callback(photo)
        canvas = null;
      }.bind(this);

      img.onerror = function (error) {
        _this.error = 'Could not load image, please check that the file is accessible and an image!';
      };
    },

    create() {
        this.generateBase64((photo) => {

         const space = {
            name: this.spaceName,
            neighborhood: this.neighborhood,
            description: this.description,
            pricePerHour: this.pricePerHour,
            photo: photo,
            path: 'espaco',
            rating: this.rating
          }

          console.log(space)
          
          this.$router.push({ name: 'Cadastrar Espaço - 1', params: { space } })

        })
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