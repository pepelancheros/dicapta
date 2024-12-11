<template>
  <main id="main" class="information-sheets">
    <div class="information-sheets__header">
      <h1>Information Sheets</h1>
    </div>
    <div class="information-sheets__content">
      <GenericCard
        v-for="sheet in sheets"
        :key="sheet.id"
        :title="sheet.title"
        :imgUrl="sheet.imgUrl"
        :href="`/resources/information-sheets/${sheet.id}`"
      />
    </div>
  </main>
</template>

<script setup>
import json from "~/assets/mocked/informationSheetsMocked.json";
import GenericCard from "@/components/GenericCard.vue";

const sheets = json.sheets;
</script>

<style scoped lang="scss">
.information-sheets {
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
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .information-sheets {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
