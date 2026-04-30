<template>
  <main id="main" class="enh-access-detail">
    <Loading
      class="loading"
      :active="isLoading"
      :is-full-page="true"
      color="#0f52ba"
      :width="100"
      :height="100"
    />
    <template v-if="!isLoading">
      <h1 class="enh-access-detail__title">{{ currentItem?.title }}</h1>
      <div v-if="currentItem?.pdfUrl" class="enh-access-detail__pdf-container">
        <iframe
          :src="currentItem.pdfUrl + '#zoom=FitH'"
          frameborder="0"
        />
      </div>
    </template>
  </main>
</template>

<script setup>
import Loading from "vue-loading-overlay";
import { onMounted, ref } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();
const currentItem = ref(null);
const isLoading = ref(false);

async function setCurrentItem() {
  isLoading.value = true;
  try {
    const data = await fetchEnhAccessItem();
    currentItem.value = data;
  } catch (error) {
    console.error("Error fetching EnhAccess resource:", error);
  } finally {
    isLoading.value = false;
  }
}

async function fetchEnhAccessItem() {
  const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";
  const url = new URL(`${API_URL}/enh-accesses/${route.params.id}`);
  url.searchParams.append("populate", "*");
  const response = await fetch(url.toString());
  const responseJson = await response.json();
  return responseJson.data;
}

onMounted(setCurrentItem);
</script>

<style scoped lang="scss">
.enh-access-detail {
  /* Reserve ~title + PDF height so the footer stays put while loading */
  min-height: max(80vh, #{pxToRem(900px)});

  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
    margin-top: $size-96;
    padding: 0 $size-16;
  }

  &__pdf-container {
    max-width: $size-1024;
    margin: auto;
    height: 700px;
    padding: $size-32 $size-16;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    height: 100%;
    position: absolute;
    align-items: center;
    width: 100%;
  }
}

@media all and (min-width: $size-768) {
  .enh-access-detail {
    &__title {
      margin-top: $size-192;
    }
  }
}
</style>
