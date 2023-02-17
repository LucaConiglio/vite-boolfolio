<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';




export default {
  components: { TheHeader},
data() {
  return {
   
  }
},

}


</script>

<template>
  
  <TheHeader></TheHeader>

  <router-view></router-view>

  

</template>

<style lang="scss">
@use "styles/main";



</style>
