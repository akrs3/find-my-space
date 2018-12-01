<template>
  <div style=" display: flex; align-items: center;" align="right">
      <button class="nextButton" v-on:click="$router.go(-1)" />
      <span style="color: #6f5278; margin-right: 20px; font-size: 12pt">avançar</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.nextButton {
  background-image: url( '../../assets/next_button.png' );
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

.nextButton:focus {
  outline:0 !important;
}

</style>