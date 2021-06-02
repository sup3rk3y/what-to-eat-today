<template>
  <div class="recipe-card">
    <h4>{{ recipe.title }}</h4>
    <hr />
    <p v-if="recipe.description">{{ recipe.description }}</p>
    <Category :category="recipe.category" />
    <Rating :ratings="recipe.rating" />
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
import Category from "@/components/Category.vue";
export default {
  name: "RecipeCard",
  components: {
    Category,
    Rating,
  },
  props: {
    recipe: Object,
  },
};
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

h4 {
  margin-bottom: 0;
}

hr {
  color: #39495c;
  opacity: 0.5;
}
</style>
