<template>
  <div class="recipe-card">
    <h4>{{ recipe.title }}</h4>
    <hr />
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: Object,
  },
};
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

h4 {
  margin-bottom: 0;
}
</style>
