<template>
  <div style="display: flex; align-items: center">
      <button class="addButton" v-on:click="handleClick" />
  </div>
</template>

<script>
export default {
  props: {
    handler: Function
  },

  methods: {
    handleClick: function(event) {
      this.handler();
    }
  }
}
</script>

<style scoped>

.addButton {
  background-image: url( '../../assets/profile/addProfile.png' );
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: top-left;
  background-color: transparent;
  padding: 0px 0px;
  border: none;
  height: 40px;  
  width: 40px;
  color: #123123;
}

.addButton:focus {
  outline:0 !important;
}

</style>