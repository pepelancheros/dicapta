<template>
  <main id="main" class="new-releases">
    <div class="new-releases__header">
      <h1>New Accessibility Releases</h1>
    </div>
    <div class="new-releases__content">
      <Loading
        class="loading"
        :active="isLoading"
        :is-full-page="true"
        color="#0f52ba"
        :width="100"
        :height="100"
      />
      <NewReleasesCard
        v-for="release in currentNewReleases"
        class="new-releases__card"
        :key="release.id"
        :release="release"
      />
    </div>
    <div class="new-releases__paginator-container">
      <Paginator
        :total-elements="newReleases.length"
        :elements-per-page="9"
        @page-changed="handlePageChange"
      />
    </div>
  </main>
</template>

<script setup>
import Loading from "vue-loading-overlay";
import NewReleasesCard from "@/components/NewReleasesCard.vue";
import { onMounted, ref } from "vue";
import Paginator from "@/components/Paginator.vue";

const isLoading = ref(false);
const newReleases = ref([]);
const currentNewReleases = ref([]);

async function setNewReleases() {
  isLoading.value = true;
  try {
    const newReleasesData = await fetchNewReleasesData();
    newReleases.value = newReleasesData;
    currentNewReleases.value = newReleases.value.slice(0, 9);
  } catch (error) {
    console.error("Error fetching new releases:", error);
  } finally {
    isLoading.value = false;
  }
}

async function fetchNewReleasesData() {
  const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";
  const url = new URL(`${API_URL}/new-releases`);
  url.searchParams.append("populate", "*");
  const response = await fetch(url.toString());
  const responseJson = await response.json();
  return responseJson.data;
}

onMounted(setNewReleases);

const handlePageChange = (page) => {
  const startIndex = (page - 1) * 9;
  const endIndex = startIndex + 9;
  currentNewReleases.value = newReleases.value.slice(startIndex, endIndex);
};
</script>

<style scoped lang="scss">
.new-releases {
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
  .new-releases {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
