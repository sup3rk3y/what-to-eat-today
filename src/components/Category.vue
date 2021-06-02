<template>
  <div class="categories">
    <h6>Categories:</h6>
    <span> {{ categories }}</span>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: null,
  },
  computed: {
    categories() {
      return this.category.join(", ");
    },
  },
};
</script>

<style scoped>
.categories {
  display: inline-flex;
}

.categories span {
  font-size: small;
  font-weight: bold;
}

.categories h6 {
  float: left;
  padding-right: 10px;
}
</style>
