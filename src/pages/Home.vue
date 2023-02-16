<template>
  <h1>Questa é la Home</h1>

</template>

<script>
import axios from 'axios';

export default {
  
  name: "Home",
  data() {
    return {
      backendUrl: "http://127.0.0.1:8000",

      projects: []

    };
  },
  methods: {
    fecthProjects() {
      axios.get(this.backendUrl + "/api/projects").then((resp) => {
        this.projects = resp.data
        
        console.log(this.projects);
      });
    }
  },
  mounted() {
    this.fecthProjects()
    
  },
}
</script>
<style>
  
</style>