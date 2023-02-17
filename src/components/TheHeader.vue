<template>
  <section>
  <h1 class="text-center py-3 text-warning">Boolfolio</h1>

  <ul class="nav justify-content-center">
  <li class="nav-item px-3" v-for="(link, index) in menuRouts" :key="index">
    <router-link :to="{ name: link.routeName }">
      {{ link.label }}
    </router-link>
    <!-- <a class="nav-link active" aria-current="page" href="#">{{ link.label }}</a> -->
  </li>
</ul>

</section>
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
 section{
  background: linear-gradient(to right, #1E2D4F, #FFFFFF, #6DCFF6);
  padding-bottom: 1rem;
}
</style>