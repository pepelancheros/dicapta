<template>
  <main class="blog-article">
    <h1 class="blog-article__title">{{ currentArticle.title }}</h1>
    <p>Published: {{ currentArticle.publishDate }}</p>
    <p v-if="currentArticle.author">By: {{ currentArticle.author }}</p>
    <div class="blog-article__content">
      <img
        class="blog-article__image"
        :src="currentArticle.internalImg || currentArticle.imgUrl"
        :alt="currentArticle.imgAlt"
      />
    </div>
    <div v-html="currentArticle.content"></div>
  </main>
</template>

<script setup>
import { useRoute } from "nuxt/app";
import json from "~/assets/mocked/blogCardsMocked.json";

const articles = json.articles;
const route = useRoute();

const currentArticle = articles.filter(
  (article) => article.id === Number(route.params.id)
)[0];
</script>

<style lang="scss" scoped>
.blog-article {
  max-width: $size-1280;
  margin-left: auto;
  margin-right: auto;
  padding: $size-48 $size-24;
  min-height: 80vh;

  :deep(p) {
    margin-bottom: $size-12;
  }

  &__title {
    font-size: $size-32;
    font-weight: 500;
    color: var(--c-blue-500);
  }

  &__image {
    max-width: $size-512;
    float: left;
    margin-right: $size-24;
  }
}
</style>
>
