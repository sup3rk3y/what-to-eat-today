<template>
  <div class="recipes">
    <h1>Awesome Recipes</h1>
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "RecipeList",
  components: {
    RecipeCard,
  },
  data() {
    return {
      recipes: null,
    };
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
      this.axios
        .get(
          "https://my-json-server.typicode.com/sup3rk3y/what-to-eat-today/recipes"
        )
        .then((response) => (this.recipes = response.data))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
