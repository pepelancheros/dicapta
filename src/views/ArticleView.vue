<template>
  <div class="article">
    <div class="article__header">
      <h2>Dicapta Accessibility Tips</h2>
    </div>
    <main class="article__content">
      <h1 class="article__title">{{ currentArticle.title }}</h1>
      <img
        class="article__image"
        :src="currentArticle.internalImg || currentArticle.imgUrl"
        :alt="currentArticle.internalImgAlt || currentArticle.imgAlt"
      />
      <div v-html="currentArticle.content"></div>
    </main>
  </div>
</template>

<script setup>
import json from "@/mocked/accessibilityTipsMocked.json";
import { useRoute } from "vue-router";

const route = useRoute();
const articles = json.articles;
const currentArticle = articles.filter(
  (article) => article.id === Number(route.params.id)
)[0];
</script>

<style scoped lang="scss">
.article {
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--c-gray-300);
    padding: $size-48;

    h2 {
      font-size: $size-48;
      font-weight: 600;
      margin-right: $size-24;
    }
  }

  &__content {
    max-width: $size-1280;
    margin: auto;
    padding: $size-48 $size-24;
    min-height: 80vh;
  }

  &__title {
    color: var(--c-blue-500);
    font-weight: 500;
    margin-bottom: $size-24;
  }

  &__image {
    max-width: $size-640;
    float: left;
    margin-right: $size-24;
  }

  :deep(h2) {
    font-size: $size-24;
  }
}
</style>
