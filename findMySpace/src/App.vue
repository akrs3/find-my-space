<template>
  <div id="app">
  <naviBarHeader/>
  <router-view/>
  </div>
</template>

<script>
import cadastrarSpace from './components/space/cadastrarSpace'
import naviBar from './components/shared/naviBar'
import naviBarHeader from './components/shared/naviBarHeader'
export default {
  name: 'app',
  components: {
	naviBar,
	naviBarHeader,
	cadastrarSpace
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
