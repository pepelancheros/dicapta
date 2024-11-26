<template>
  <main id="main" class="information-sheet">
    <h1 class="information-sheet__title">{{ currentSheet.title }}</h1>
    <div class="information-sheet__pdf-container">
      <iframe
        :src="currentSheet.pdfUrl + '#zoom=FitH'"
        frameborder="0"
      ></iframe>
    </div>
  </main>
</template>

<script setup>
import json from "@/mocked/informationSheetsMocked.json";
import { useRoute } from "vue-router";

const route = useRoute();
const sheets = json.sheets;
const currentSheet = sheets.filter(
  (sheet) => sheet.id === Number(route.params.id)
)[0];
</script>

<style scoped lang="scss">
.information-sheet {
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
}

@media all and (min-width: $size-768) {
  .information-sheet {
    &__title {
      margin-top: $size-192;
    }
  }
}
</style>
