<template>
  <main class="accessibility-tips">
    <div class="accessibility-tips__header">
      <h1>Dicapta Accessibility Tips</h1>
    </div>
    <div class="accessibility-tips__content">
      <ArticleCard
        v-for="article in currentArticles"
        :key="article.id"
        :title="article.title"
        :imgUrl="article.imgUrl"
        :imgAlt="article.imgAlt"
        :publishDate="article.publishDate"
        :link="`/resources/accessibility-tips/${article.id}`"
      ></ArticleCard>
    </div>
    <div class="accessibility-tips__paginator-container">
      <Paginator
        :total-elements="articles.length"
        :elements-per-page="9"
        @page-changed="handlePageChange"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ArticleCard from "@/components/ArticleCard.vue";
import json from "@/mocked/accessibilityTipsMocked.json";
import Paginator from "@/components/Paginator.vue";

const articles = json.articles;

const currentArticles = ref(articles.slice(0, 9));

const handlePageChange = (page) => {
  const startIndex = (page - 1) * 9;
  const endIndex = startIndex + 9;
  currentArticles.value = articles.slice(startIndex, endIndex);
};
</script>

<style scoped lang="scss">
.accessibility-tips {
  &__header {
    background-color: var(--c-gray-300);
    padding: $size-16;

    h1 {
      font-size: $size-32;
      font-weight: 600;
      text-align: center;
    }
  }

  &__icon {
    font-size: $size-48;
    color: var(--c-blue-100);
  }

  &__content {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    max-width: $size-1024;
    margin: auto;
    padding: $size-48 $size-16;
    padding-bottom: 0;
  }

  &__paginator-container {
    display: flex;
    justify-content: center;
    margin-bottom: $size-48;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .accessibility-tips {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
