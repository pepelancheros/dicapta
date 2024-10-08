<template>
  <div class="accessibility-tips">
    <div class="accessibility-tips__header">
      <h1>Dicapta Accessibility Tips</h1>
    </div>
    <div class="accessibility-tips__content">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :imgUrl="article.imgUrl"
        :imgAlt="article.imgAlt"
      ></ArticleCard>
    </div>
  </div>
</template>

<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
import json from "@/mocked/accessibilityTipsMocked.json";

const articles = json.articles;

function mueche() {
  console.log("json", articles);
}
</script>

<style scoped lang="scss">
.accessibility-tips {
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--c-blue-100);
    padding: $size-48;

    h1 {
      font-size: $size-48;
      font-weight: 600;
      margin-right: $size-24;
    }
  }

  &__icon-container {
    background-color: var(--c-blue-200);
    height: fit-content;
    border-radius: 50px;
    padding: $size-4 $size-8;
  }

  &__icon {
    font-size: $size-48;
    color: var(--c-blue-100);
  }

  &__content {
    padding: $size-24 $size-32;
    display: flex;
  }
}
</style>
