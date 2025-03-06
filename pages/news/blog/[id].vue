<template>
  <main class="blog-article">
    <h1 class="blog-article__title">{{ currentArticle.title }}</h1>
    <p>Published: {{ currentArticle.publishDate }}</p>
    <p v-if="currentArticle.author">By: {{ currentArticle.author }}</p>
    <div class="blog-article__content">
      <img
        class="blog-article__image"
        :src="currentArticle.imageUrl"
        :alt="currentArticle.imageAltText"
      />
    </div>
    <StrapiBlocksText v-if="currentArticle.content" :nodes="currentArticle.content" />
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();
const currentArticle = ref({});

async function setCurrentBlogArticle() {
  try {
    const articleData = await fetchCurrentBlogArticle();
    currentArticle.value = articleData;
  } catch (error) {
    console.error("Error fetching blog article:", error);
  }
}

async function fetchCurrentBlogArticle() {
  const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";
  const url = new URL(`${API_URL}/blogs/${route.params.id}`);
  url.searchParams.append("populate", "*");
  const response = await fetch(url.toString());
  const responseJson = await response.json();
  return responseJson.data;
}

onMounted(setCurrentBlogArticle);

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
