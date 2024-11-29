<template>
  <main id="main" class="newsletters">
    <div class="newsletters__header">
      <h1>Newsletters</h1>
    </div>

    <div class="newsletters__content">
      <loading
        class="loading"
        :active="isLoading"
        :is-full-page="true"
        color="#0f52ba"
        :width="100"
        :height="100"
      />
      <a
        class="newsletters__card"
        v-for="newsletter in newsletters"
        :key="newsletter.id"
        :href="newsletter.file[0]?.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="newsletter.image.url"
          :alt="
            newsletter.image?.alternativeText
              ? newsletter.image.alternativeText
              : 'newsletter image'
          "
        />
      </a>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
// TODO: Delete this after client approves and sets the Cloduinary account
// import json from "@/mocked/newslettersMocked.json";
import { getNewsletters } from "@/api/strapi.js";
import Loading from "vue-loading-overlay";

// TODO: Delete this after client approves and sets the Cloduinary account
// const newsletters = json.newsletters;
const isLoading = ref(false);
const newsletters = ref([]);

async function fetchNewsletters() {
  isLoading.value = true;
  try {
    const newslettersResponse = await getNewsletters();
    newsletters.value = newslettersResponse.data;
    newsletters.value.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error fetching newsletters:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchNewsletters);
</script>

<style scoped lang="scss">
.newsletters {
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
    min-height: $size-384;
  }

  &__card {
    max-width: 320px;
    margin-bottom: $size-32;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    max-height: 220px;

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

  .loading {
    margin: 0 auto;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .newsletters {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
