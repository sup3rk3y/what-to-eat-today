<template>
  <div class="rating">
    <span>Rated:</span>
    <span
      v-for="index in ratings"
      :key="index"
      class="fa fa-star checked"
    ></span>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: ["ratings"],
};
</script>
