<template>
  <section class="homeSection">
    <div class="container">
      <h1 class="text-center mb-4">Home</h1>
      <div class="row g-3">
        <div v-for="project in store.projects" :key="project.id" class="col-3">
          <div class="card" style="width: 18rem;">
            <img v-if="project.cover_img" :src="store.backendUrl + '/storage/' + project.cover_img" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{project.name}}</h5>
              <p class="card-text">{{project.description}}</p>
              <p class="card-text">{{project.github_link}}</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from '../store';
export default {
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.fecthProjects()
  },
}
</script>
<style scoped lang="scss">
.homeSection {
  h1 {
    background-image: linear-gradient(to right, red, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  padding-top: 2rem;


  width: 100%;
  height: calc(100vh - 177.77px);
  background: linear-gradient(to right, #1E2D4F, #FFFFFF, #6DCFF6);
}
</style>