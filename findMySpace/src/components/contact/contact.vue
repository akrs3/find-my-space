<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- icons library such as facebook, twitter, etc.-->
    <naviBarHeader/>

    <div class="bodyCadSpac">
      <div style="display: flex; justify-content: space-between;">
        <backButton align="left" />
      </div>

      <div align="left">
        <span align="left" style="font-size: 13pt; word-wrap: break-word">
          <b> contato </b>
        </span>
      </div>
      <div style="display:flex">
        <span align="left" style="color: #757376; font-size: 12pt; word-wrap: break-word">
          obtenha suporte por email, facebook ou instagram
        </span>
        </div>
        <div class="padding48 largeFont" style="display:flex">
        <a href="#" class="fa fa-google" alt="gmail logo"></a>
        <a href="#" class="fa fa-facebook" alt="facebook logo"></a>
        <a href="#" class="fa fa-instagram" alt="Instagram Logo"></a>
      </div>
    </div>  
  </div>
</template>

<script>
  import naviBarHeader from '../shared/naviBarHeader'
  import backButton from '../shared/backButton'
  import divisor from '../shared/divisor'
  import designUX from '../../assets/css/designUX.css'

  export default {
    components: {
      naviBarHeader,
      backButton,
      divisor
    }
  }
  
</script>

<style scoped>

  .bodyCadSpac {
    color:#6e5077;
    margin-left: 6%;
    margin-right: 6%;
    min-height: calc(100vh - 230px);
  }

  .menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed; 
  }

  .fa {
  padding: 20px;
  font-size: 30px;
  width: 70px; /* width: 50px; if you want it to be a square */
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%; /* delete this line if you want it to be a square */
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-instagram {
  background: #f40083;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.onCenter {
  text-align:center!important
}
.padding48 {
  padding-top:20px!important;
  padding-bottom:48px!important
}
.largeFont {
  font-size:36px!important;
}
</style>