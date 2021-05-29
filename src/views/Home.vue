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
  name: "Home",
  components: {
    RecipeCard,
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: "Greek Gyros",
          description: "Delicious :)",
          incredients: ["600gr pork", "vinegar"],
          execution: "",
          category: ["Greek", "pork", "meat"],
          rating: 5,
        },
        {
          id: 2,
          title: "CheeseBurger",
          description: "WOW :O",
          incredients: ["350gr ground beef", "bacon"],
          execution: "",
          category: ["Fast food", "burger", "meat"],
          rating: 3,
        },
      ],
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
