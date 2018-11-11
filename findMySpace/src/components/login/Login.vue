<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <naviBarHeader/>

    <div class="bodyLogin">
      <!-- Back Button -->
      <backButton />
    
      <!-- Header -->
      <div style="margin-top:10px" align="left">
        <span style="font-weight: bold; font-size: 14pt;">login</span>
        <divisor/>
      </div>

      <!-- Credentials Form -->
      <div style="margin-top:30px" align="left">
        <table align="left">
          <tr>
            <p class="queryLogin" align="left">email ou nome de usuario</p>
            <input align="left" type="text" id="user" v-model="userName">
          </tr>
          
          <tr>
            <p class="queryLogin" align="left">senha</p>
            <input align="left" type="text" id="password" v-model="password">
          </tr>
        </table>
      </div>
    </div>
    
    <!-- Create Button -->
    <roundedButton title='entrar' v-bind:compressed='false' v-bind:handler='signIn' />
  </div>
</template>

<script>
  import naviBarHeader from '../shared/naviBarHeader'
  import backButton from '../shared/backButton'
  import roundedButton from '../shared/roundedButton'
  import divisor from '../shared/divisor'
  import nunito from '../../assets/css/nunito.css'

  export default {
    components: {
      naviBarHeader,
      backButton,
      divisor,
      roundedButton
    },

    data() {
    return {
      userName: '',
      password: '',
      }
    },

    methods: {
      signIn: function() {
        let userName = this.userName
        let password = this.password

        alert(userName)
      }
    }
  }
</script>

<style scoped>
  input {
    display: inline-block;
    float: left;
    background: transparent;
    border: none;
    border-bottom: 1px dotted #7f7d80;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 24px;
  }

  .bodyLogin {
    font-family: Nunito;
    color:#6e5077;
    margin-left: 6%;
    margin-right: 6%;
  }

  .queryLogin {
    margin-top: 20px;
  }
</style>