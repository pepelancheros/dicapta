<template>
  <main id="main" class="news" v-if="isParent">
    <section class="news-section">
      <h2 class="news-section__title">Newsletters</h2>
      <div class="news-section__container">
        <a
          class="news-section__card"
          v-for="newsletter in newsletters.slice(0, 3)"
          :key="newsletter.id"
          :href="newsletter.pdfUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="newsletter.imgUrl" alt="newsletter image" />
        </a>
      </div>
      <a href="/news/newsletters" class="button">More</a>
    </section>
    <section class="news-section">
      <h2 class="news-section__title">Press kit</h2>
      <div class="news-section__container">
        <GenericCard
          class="news-section__card"
          v-for="(element, index) in pressKit.slice(0, 3)"
          :key="index"
          :title="element.title"
          :text="element.subtitle"
          :imgUrl="element.imgUrl"
          :href="element.href"
        />
      </div>
      <a href="/news/press" class="button">More</a>
    </section>
  </main>
  <RouterView v-else class="content" />
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import newsletterJson from "@/mocked/newslettersMocked.json";
import pressJson from "@/mocked/pressKitMocked.json";
import GenericCard from "@/components/GenericCard.vue";

const newsletters = newsletterJson.newsletters;
const pressKit = pressJson.kit;

const route = useRoute();
const isParent = computed(() => route.fullPath === "/news");
</script>

<style scoped lang="scss">
.news {
  margin-top: $size-96;
}

.news-section {
  max-width: $size-1024;
  margin: auto;
  padding: 0 $size-16;
  margin-bottom: $size-64;

  &__title {
    font-size: $size-48;
    margin: auto;
    font-weight: 500;
    border-bottom: 4px solid var(--c-blue-500);
    margin-bottom: $size-32;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    margin-left: $size-24;
    margin-right: $size-24;
    max-width: 300px;
    margin-bottom: $size-32;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    max-height: 250px;

    img {
      transition: 0.3s;
      max-width: 100%;
      object-fit: cover;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .news {
    margin-top: $size-192;
  }

  .news-section {
    &__container {
      justify-content: space-between;
    }

    &__card {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
