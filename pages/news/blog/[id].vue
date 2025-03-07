<template>
  <main class="blog-article__container">
    <div class="loading__container" v-if="isLoading">
      <Loading
          class="loading"
          :active="isLoading"
          :is-full-page="true"
          color="#0f52ba"
          :width="100"
          :height="100"
        />
    </div>
    <div class="blog-article" v-show="!isLoading">
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
    </div>
  </main>
</template>

<script setup>
import Loading from "vue-loading-overlay";
import { onMounted, ref } from "vue";
import { useRoute } from "nuxt/app";

const currentArticle = ref({});
const isLoading = ref(false);
const route = useRoute();

async function setCurrentBlogArticle() {
  isLoading.value = ref(true);
  try {
    const articleData = await fetchCurrentBlogArticle();
    currentArticle.value = articleData;
  } catch (error) {
    console.error("Error fetching blog article:", error);
  } finally {
    isLoading.value = false;
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

.loading {
  margin: 0 auto;

  &__container {
    display: flex;
    justify-content: center;
    margin-top: $size-256;
    margin-bottom: $size-48;
  }
}
</style>

