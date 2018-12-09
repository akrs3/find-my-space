<template>
  <div style=" display: flex; align-items: center;" align="left">
      <button class="backButton" v-on:click="$router.go(-1)" />
      <span style="color: #6f5278; margin-left: 10px; font-size: 12pt">voltar</span>
 
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.backButton {
  background-image: url( '../../assets/back_button.png' );
  background-size: 10px 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  padding: 0px 0px;
  border: none;
  height: 44px;  
  width: 10px;
  color: #123123;
}
.backButton:focus {
  outline:0 !important;
}
</style>