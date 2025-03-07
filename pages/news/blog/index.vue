<template>
  <main class="blog" id="main">
    <div class="blog__header">
      <h1>Blog</h1>
    </div>
    <div class="blog__content">
      <Loading
        class="loading"
        :active="isLoading"
        :is-full-page="true"
        color="#0f52ba"
        :width="100"
        :height="100"
      />
      <ArticleCard
        class="blog__card"
        v-for="article in currentBlogArticles"
        :key="article.id"
        :title="article.title"
        :imgUrl="article.imageUrl"
        :imgAlt="article.imageAltText"
        :publishDate="article.publishDate"
        :text="article.cardText"
        :link="`/news/blog/${article.documentId}`"
      ></ArticleCard>
    </div>
    <div class="blog__paginator-container">
      <Paginator
        :total-elements="blogArticles.length"
        :elements-per-page="9"
        @page-changed="handlePageChange"
      />
    </div>
  </main>
</template>

<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";
import { useHead } from '@vueuse/head';

const blogArticles = ref([]);
const currentBlogArticles = ref([]);
const isLoading = ref(false);

useHead({
  title: "Dicapta Blog | Insights on Accessibility, Media, and Technology",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Explore Dicapta’s blog for expert insights on accessible media, audio description, multilingual dubbing, and the latest technology trends shaping inclusive content.",
    },
  ],
})

async function setBlogArticles() {
  isLoading.value = true;
  try {
    const blogArticlesData = await fetchBlogArticles();
    blogArticles.value = blogArticlesData;
    currentBlogArticles.value = blogArticles.value.slice(0, 9);
  } catch (error) {
    console.error("Error fetching blog articles:", error);
  } finally {
    isLoading.value = false;
  }
}

async function fetchBlogArticles() {
  const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";
  const url = new URL(`${API_URL}/blogs`);
  url.searchParams.append("populate", "*");
  const response = await fetch(url.toString());
  const responseJson = await response.json();
  return responseJson.data;
}

onMounted(setBlogArticles);
</script>

<style scoped lang="scss">
.blog {
  &__header {
    background-color: var(--c-gray-300);
    padding: $size-16;

    h1 {
      font-size: $size-32;
      font-weight: 600;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    max-width: $size-1280;
    margin: auto;
    padding: $size-48 $size-16;
  }

  &__card {
    max-width: 400px;
  }

  &__paginator-container {
    display: flex;
    justify-content: center;
    margin-bottom: $size-48;
  }

  .loading {
    margin: 0 auto;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .blog {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
