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
      recipes: [],
    };
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
