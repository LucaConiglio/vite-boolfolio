<template>
  <h1 class="text-center py-3 text-warning">Boolfolio</h1>

  <ul class="nav justify-content-center">
  <li class="nav-item px-3" v-for="(link, index) in menuRouts" :key="index">
    <router-link :to="{ name: link.routeName }">
      {{ link.label }}
    </router-link>
    <!-- <a class="nav-link active" aria-current="page" href="#">{{ link.label }}</a> -->
  </li>
</ul>


</template>
<script>
export default {
  data() {
    return {
      menuRouts: [
      {
        label: "Home",
        routeName: "home"

      },
      {
        label: "Projects",
        routeName: "projects.index"

      }
    ]
    }
  },
}
</script>
<style lang="scss">
  
</style>