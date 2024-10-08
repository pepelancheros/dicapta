<template>
  <div class="article-card">
    <img :src="imgUrl" :alt="imgAlt" />
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <span v-if="publishDate">Published: {{ publishDate }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  publishDate: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: "",
  },
  imgAlt: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.article-card {
  max-width: $size-384;
  margin: $size-24;

  img {
    width: 100%;
  }
}
</style>
