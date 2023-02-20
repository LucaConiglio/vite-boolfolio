<template>
  <section class="headerSection">
  <h1 class="text-center py-3 text-warning">Boolfolio</h1>

  <ul class="nav justify-content-center">
  <li class="mx-3 btn btn-info btn-outline-warning" v-for="(link, index) in menuRouts" :key="index">
    <router-link class="text-decoration-none" :to="{ name: link.routeName }">
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

      },
      {
        label: "Contacts",
        routeName: "Contacts"
      }
    ]
    }
  },
}
</script>
<style lang="scss">
 .headerSection{
  background-color: #d6e8f4;
  background-image: url("https://eitrawmaterials.eu/wp-content/uploads/2021/09/KAVA-Call-WebHeader.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  
  padding-bottom: 1rem;
  h1{
    font-size: 70px;
  }
}
</style>