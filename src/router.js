import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProjectsIndex from "./pages/projects/Index.vue"
// import PostsShowPage from "./pages/posts/Show.vue";
// ... import di altri componenti

const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [
    {
      path: "/", // uri da scrivere nel browser
      name: "home", // nome della rotta da usare per creare un link
      component: Home // componente che ritorna l'html della pagina
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndex
    }
		// ... altre rotte
    // {
    //   // Show di un singolo post
    //   path: "/projects/:id",
    //   name: "projects.show",
    //   component: projectShowPage
    // }
  ]
});

export { router };