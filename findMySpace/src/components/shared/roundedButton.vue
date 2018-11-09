<template>
  <div>
	<button v-bind:class="styling" v-on:click="handleClick">
  	  <span style="font-size: 15pt;">{{ title }}</span>
      <br />
      <span style="font-size: 10pt;">{{ subtitle }}</span>
  </button>
  </div>
</template>

<script>
export default {
  props: { 
  	title: String,
    subtitle: String,
  	handler: Function,
    compressed: Boolean
  },

  methods: {

  	handleClick: function(event) {
  		this.handler()
  	}
  },

  computed: {
    styling: function() {
      return this.compressed ? 'compressed' : 'normal'
    }
  }
}
</script>

<style scoped>

.compressed {
  width: 100%;
  background-color: #6E5077;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  border-radius: 38px;
}

.normal {
  width: 100%;
  background-color: #6E5077;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
}

</style>