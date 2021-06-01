<template>
  <div class="recipes">
    <h1 class="title">Awesome Recipes</h1>
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    <spinner :loading="loading" />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeCard from "@/components/RecipeCard.vue";
import RecipeService from "@/services/RecipeService";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "RecipeList",
  components: {
    RecipeCard,
    Spinner,
  },
  data() {
    return {
      recipes: null,
      loading: true,
    };
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
      RecipeService.getRecipes()
        .then((response) => {
          this.loading = false;
          this.recipes = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.title {
  padding-bottom: 25px;
}

.recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
