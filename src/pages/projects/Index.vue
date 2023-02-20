<template>
  <section class="indexSection">
    <div class="container">
      <h1>Lista post</h1>

      <table class="table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Name</th>
            <th>Description</th>
            <th>GitHub Link</th>
            <th>show</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in store.projects" :key="project.id">
            <td>
              <div v-if="project.cover_img">
                <img :src="store.backendUrl + '/storage/' + project.cover_img" alt="" style="width: 60px" />
              </div>
            </td>
            <!-- <router-link :to="{ name: 'posts.show', params: {id: post.id} }">{{ post.title }}</router-link> -->
            <td>{{project.name}}</td>
            <td>{{ project.description }}</td>
            <td>{{ project.github_link }}</td>
            <td><router-link :to="{ name: 'projects.show', params: { id: project.id } }">show</router-link></td>
            <!-- <td>{{ post.category?.name }}</td> -->
            <!-- <td>
              <router-link :to="{ name: 'posts.show', params: {id: post.id} }">{{ post.title }}</router-link>
               <div v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</div> 
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import { store } from '../../store';
export default {

  name: "ProjectsIndex",
  data() {
    return {
      store,

    };
  },
  mounted() {
    this.store.fecthProjects()

  },
}
</script>
<style scoped lang="scss">
.indexSection{
  height: calc(100vh - 177.77px);
  background: linear-gradient(to bottom, #FFFFFF,#fff9e4,#fbf3dc, #fff788);
 
}
</style>