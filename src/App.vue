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
  <div class="container">
  <TheHeader></TheHeader>

  <router-view></router-view>

  
</div>
</template>

<style lang="scss">
@use "styles/main";



</style>
