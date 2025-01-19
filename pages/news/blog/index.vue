<template>
  <main class="blog" id="main">
    <div class="blog__header">
      <h1>Blog</h1>
    </div>
    <div class="blog__content">
      <ArticleCard
        class="test"
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :imgUrl="article.imgUrl"
        :imgAlt="article.imgAlt"
        :publishDate="article.publishDate"
        :text="article.text"
        :link="`/news/blog/${article.id}`"
      ></ArticleCard>
    </div>
  </main>
</template>

<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
import json from "~/assets/mocked/blogCardsMocked.json";
import { useHead } from '@vueuse/head';

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

const articles = json.articles;
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

  .test {
    max-width: 400px;
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
