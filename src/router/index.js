import { createRouter, createWebHistory } from "vue-router";
import RecipeList from "../views/RecipeList.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "RecipeList",
    component: RecipeList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
