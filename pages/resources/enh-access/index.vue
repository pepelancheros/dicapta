<template>
  <main id="main" class="enh-access">
    <div class="enh-access__header">
      <h1>EnhAccess</h1>
    </div>
    <div class="enh-access__content">
      <Loading
        class="loading"
        :active="isLoading"
        :is-full-page="true"
        color="#0f52ba"
        :width="100"
        :height="100"
      />
      <GenericCard
        v-for="item in items"
        :key="item.documentId"
        :title="item.title ?? ''"
        :imgUrl="cardImageUrl(item)"
        :href="`/resources/enh-access/${item.documentId}`"
      />
    </div>
  </main>
</template>

<script setup>
import Loading from "vue-loading-overlay";
import GenericCard from "@/components/GenericCard.vue";
import { onMounted, ref } from "vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "EnhAccess | Dicapta's Accessibility Insights",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "EnhAccess resources from Dicapta: accessibility guidance, inclusive content, and related materials.",
    },
  ],
});

const isLoading = ref(false);
const items = ref([]);

function cardImageUrl(item) {
  return item.imageUrl ?? "";
}

async function setItems() {
  isLoading.value = true;
  try {
    const data = await fetchEnhAccessData();
    items.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching EnhAccess resources:", error);
  } finally {
    isLoading.value = false;
  }
}

async function fetchEnhAccessData() {
  const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";
  const url = new URL(`${API_URL}/enh-accesses`);
  url.searchParams.append("populate", "*");
  const response = await fetch(url.toString());
  const responseJson = await response.json();
  return responseJson.data;
}

onMounted(setItems);
</script>

<style scoped lang="scss">
.enh-access {
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

  .loading {
    margin: 0 auto;
  }
}

@media all and (min-width: $size-768) {
  .enh-access {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
