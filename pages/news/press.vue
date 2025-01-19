<template>
  <main id="main" class="press">
    <div class="press__header">
      <h1>Press Kit</h1>
    </div>
    <div class="press__content">
      <GenericCard
        class="press__card"
        v-for="(element, index) in pressKit"
        :key="index"
        :title="element.title"
        :text="element.subtitle"
        :imgUrl="element.imgUrl"
        :href="element.href"
      />
    </div>
  </main>
</template>

<script setup>
import json from "~/assets/mocked/pressKitMocked.json";
import GenericCard from "@/components/GenericCard.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: "Dicapta Press Kit | Media Resources & Accessibility Information",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Access Dicapta's press kit for media resources, company information, and insights on our innovative accessibility solutions for inclusive media.",
    },
  ],
})

const pressKit = json.kit;
</script>

<style scoped lang="scss">
.press {
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
    max-width: $size-1024;
    margin: auto;
    padding: $size-48 $size-16;
  }

  &__card {
    :deep(img) {
      margin: auto;
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .press {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
