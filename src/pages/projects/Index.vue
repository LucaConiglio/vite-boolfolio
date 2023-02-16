<template>
 <div class="container">
    <h1>Lista post</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Name</th>
          <th>Description</th>
          <th>GitHub Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="post.id">
          <td>
            <div v-if="project.cover_img">
              <img
                :src="backendUrl + '/storage/' + project.cover_img"
                alt=""
                style="width: 60px"
              />
            </div>
          </td>
          <td>
            <!-- <router-link :to="{ name: 'posts.show', params: {id: post.id} }">{{ post.title }}</router-link> -->
          </td>
          <!-- <td>{{ post.category?.name }}</td> -->
          <td>
            <!-- <div v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</div> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  
  name: "ProjectsIndex",
  data() {
    return {
      backendUrl: "http://localhost:5173",

      projects: []

    };
  },
  methods: {
    fecthProjects() {
      axios.get(this.backendUrl + /api/projects).then((resp) => {
        this.projects = resp.data
        
      });
    }
  },
  mounted() {
    this.fecthProjects()
    console.log(this.fecthProjects);
  },
}
</script>
<style lang="scss">
  
</style>