<script>
import axios from "axios";
export default {
  name: "projects.show",
  data() {
    return {
      backendUrl: "http://127.0.0.1:8000",
      projects: {},
    };
  },
  mounted() {
    axios
      .get(this.backendUrl + "/api/projects/" + this.$route.params.id)
      // .get(`${ this.backendUrl }/api/posts/${ this.$route.params.id }`)
      .then((resp) => {
        this.projects = resp.data;
      })
      .catch((er) => {
        // in caso di errore non ha senso che l'utente rimanga qui
        // faccio un redirect su posts.index
        this.$router.push({ name: "projects.index" });
      });
  },
};
</script>

<template>
  <div class="container">
    <h1>Pagina dettagli post {{ $route.params.id }}</h1>
    <h2>{{ projects.name }}</h2>

    <div v-if="projects.cover_img">
      <img :src="backendUrl + '/storage/' + projects.cover_img" alt="" class="img-fluid"/>
    </div>

    <p class="lead">{{ projects.description }}</p>
  </div>
</template>