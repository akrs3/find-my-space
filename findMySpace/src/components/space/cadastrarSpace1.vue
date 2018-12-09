<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <naviBarHeader/>

    <div class="bodyCadSpac">
      <div style="display: flex; justify-content: space-between;">
        <backButton align="left" />
        <router-link to="novo-espaco-2">
          <nextButton align="right" />
        </router-link>
      </div>

      <div align="left">
        <span align="left" style="font-size: 13pt; word-wrap: break-word">
          <b> cadastrar novo espaço </b>
        </span>
      </div>
      <div style="display:flex; margin-top: 10px">
        <span align="left" style="color: #757376; font-size: 12pt; word-wrap: break-word">
          adicione os horários disponíveis abaixo
        </span>
      </div>
      
      <hourTable editing="true" v-bind:didChangeSchedules = "selectSchedule"/>
      <br>

      <router-link to="espaco">
        <roundedButton title="cadastrar"></roundedButton>
      </router-link>
      
    </div>  
  </div>
</template>

<script>
  import naviBarHeader from '../shared/naviBarHeader'
  import backButton from '../shared/backButton'
  import addButton from '../shared/addButton'
  import nextButton from '../shared/nextButton'
  import divisor from '../shared/divisor'
  import roundedButton from '../shared/roundedButton'
  import designUX from '../../assets/css/designUX.css'
  import hourTable from '../shared/hourTable'

  export default {
    components: {
      naviBarHeader,
      backButton,
      nextButton,
      divisor,
      roundedButton,
      addButton,
      hourTable
    },

    methods: {
      selectSchedule:function(schedules) {
        console.log(schedules)
      }
    }
  }
  
</script>

<style scoped>
  a {
    display: block;
    color: #6e5077;
    height: 44px;
  }

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


</style>