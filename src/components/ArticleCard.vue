<template>
  <div class="article-card">
    <div class="article-card__img-container">
      <img :src="imgUrl" :alt="imgAlt" />
    </div>
    <div class="article-card__content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <span class="article-card__publish-date" v-if="publishDate"
        >Published: {{ publishDate }}</span
      >
    </div>
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
  box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;

  h2 {
    font-size: $size-24;
  }

  &__img-container {
    height: 200px;
    position: relative;
    margin-bottom: $size-12;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  &__content {
    padding: $size-12;
  }

  &__publish-date {
    display: block;
    width: 100%;
    text-align: right;
  }
}
</style>
