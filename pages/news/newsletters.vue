<template>
  <main id="main" class="newsletters">
    <div class="newsletters__header">
      <h1>Newsletters</h1>
    </div>

    <div class="newsletters__content">
      <Loading
        class="loading"
        :active="isLoading"
        :is-full-page="true"
        color="#0f52ba"
        :width="100"
        :height="100"
      />
        <a
          class="newsletters__card"
          v-for="newsletter in currentNewsletters"
          :key="newsletter.id"
          :href="newsletter.pdfUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="newsletter.imageUrl"
            :alt="'newsletter of ' + getNewslettersMonth(newsletter)"
          />
        </a>
    </div>

    <div class="newsletters__paginator-container">
      <Paginator
        :total-elements="newsletters.length"
        :elements-per-page="9"
        @page-changed="handlePageChange"
      />
    </div>
  </main>
</template>

<script setup>
import Paginator from "@/components/Paginator.vue";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";
import { useHead } from '@vueuse/head';

useHead({
  title: "Dicapta Newsletters | Subscribe for Updates on Accessibility and Media",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Sign up for Dicapta's newsletters to receive the latest updates on accessibility innovations, new services, and industry trends. Stay informed and connected!",
    },
  ],
})

const isLoading = ref(false);
const newsletters = ref([]);
const currentNewsletters = ref([]);
const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getNewslettersMonth(newsletter) {
  const date = new Date(newsletter.date);
  return monthsArray[date.getMonth()];
}

async function setNewsletters() {
  isLoading.value = true;
  try {
    const newslettersData = await fetchNewslettersData();
    newsletters.value = sortNewslettersByDate(newslettersData);
    currentNewsletters.value = newsletters.value.slice(0, 9);
  } catch (error) {
    console.error("Error fetching newsletters:", error);
  } finally {
    isLoading.value = false;
  }
}

async function fetchNewslettersData() {
  const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";
  const url = new URL(`${API_URL}/newsletters`);
  const response = await fetch(url.toString());
  const responseJson = await response.json();
  return responseJson.data;
}

function sortNewslettersByDate(newsletters) {
  return newsletters.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
}

onMounted(setNewsletters);

const handlePageChange = (page) => {
  const startIndex = (page - 1) * 9;
  const endIndex = startIndex + 9;
  currentNewsletters.value = newsletters.value.slice(startIndex, endIndex);
};
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
    padding: $size-48 $size-16 $size-16;
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
