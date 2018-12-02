<template>
 <div> 
      <table align="center">
            <tr>
                <p class="queryCadSpac" align="left">Usuário: </p>
                
                
                        <input align="left" type="email" name="user" v-model="username">
            </tr>
            
            <tr align="left">
                <p class="queryCadSpac" align="left">Senha: </p>
                
                        <input align="left" type="password" name="senha" v-model="password">
            </tr>
        </table>
        <div class="modal-footer">
                <a style="cursor:pointer" class="linksNaviBar botaoLogin" v-b-modal="'myModalSignup'">
                    <b style="float:left;" class="corBold "> não tenho conta </b>
                </a>
                <div style="display:inline-block; width:100%; height:100%"> 
                    <button type="button" class="botaoTemaFms btn-primary" @click="login"> OK </button>
                </div> 
                
            </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  props: {
    onLoginSuccessful: Function
  },

  methods: {
    login() {
      if (!this.username) {
        alert("Informe o usuário");
      } else if (!this.password) {
        alert("Informe a senha");
      }

      FirebaseManager.registerUserDataChangedEvent(data => {
        if (data.role == "owner") {
          this.$router.push({
            path: "/me"
          });
        } else if (data.role == "buyer") {
          this.$router.push({
            path: "/perfil"
          });
        } else {
          console.error("Malformed data");
          return;
        }
      });
      FirebaseManager.loginWithEmail(this.username, this.password);
    }
  }
};
</script>

<style scoped>
hr {
  margin: 0;
}

p {
  margin: 0;
}

input {
  float: left;
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 20px;

  border: 0px solid red;
  padding-left: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  background-color: #bbadbf;
  opacity: 0.5;

  width: 100%;
  height: 44px !important;
}

.queryCadSpac {
  color: #6e5077;
  margin-left: 6%;
  margin-right: 6%;
}

.botaoLogin {
  background: transparent;
  border: none;
}

.botaoTemaFms {
  border: 0;
  background-color: #6e5077;
  width: 100%;
  min-height: 44px;
  border-radius: 20px;
  color: #ffffff;
  font-weight: bold;
}
</style>