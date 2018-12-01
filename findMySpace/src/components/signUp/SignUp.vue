<template>
 <div> 
      <table align="center">
    Cadastro: 
      <tr>
        <p class="queryCadSpac" align="left">Email: </p>
        
        
            <input align="left" type="text" name="user" v-model="username">
      </tr>
      
      <tr align="left">
        <p class="queryCadSpac" align="left">Senha: </p>
        
            <input align="left" type="password" name="senhaSignup" v-model="password">
      </tr>
      
      <tr align="left">
        <p class="queryCadSpac" align="left">Confirme a senha: </p>
        
            <input align="left" type="password" name="confirmesenha" v-model="confirmPassword">
      </tr>
            
      <tr align="left">
        <p class="queryCadSpac" align="left">Nome: </p>
        
            <input align="left" type="text" name="nome" v-model="name">
      </tr>
    </table>
          
      <div class="modal-footer">
        <button type="button" class="botaoTemaFms btn-primary" @click="signup">OK</button>
        
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      name: ""
    };
  },
  components: {},
  methods: {
    signup() {
      if (!this.username) {
        alert("Informe o usuário");
      } else if (!this.password) {
        alert("Informe a senha");
      } else if (!this.confirmPassword) {
        alert("Confirme a senha");
      } else if (this.password != this.confirmPassword) {
        alert("Confirmação e senha diferentes");
      } else if (!this.name) {
        alert("Insira seu nome");
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("A senha é muito fraca");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        }).then((data) => {
          let uid = data.user.uid;
          firebase.database().ref(`/user/${uid}`).set({
            active: true,
            data: {
              name: this.name
            },
            role: "buyer"
          }).then(() => {
            this.$router.push({
              path: "/perfil"
            });
          })
        });
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