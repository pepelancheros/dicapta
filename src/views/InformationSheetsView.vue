<template>
  <main class="information-sheets">
    <div class="information-sheets__header">
      <h1>Information Sheets</h1>
    </div>
    <div class="information-sheets__content">
      <a
        :href="`/resources/information-sheets/${sheet.id}`"
        class="information-sheets__element"
        v-for="sheet in sheets"
        :key="sheet.id"
      >
        <div class="information-sheets__element-title-container">
          <h2 class="information-sheets__element-title">{{ sheet.title }}</h2>
        </div>
        <img :src="sheet.imgUrl" alt="" />
      </a>
    </div>
  </main>
</template>

<script setup>
import json from "@/mocked/informationSheetsMocked.json";

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

  &__element {
    max-width: 300px;
    margin-bottom: $size-48;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
    padding: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
    }

    &:hover {
      max-width: 310px;
      box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.24);
      border-top: 0.25rem solid var(--c-blue-500);

      h2 {
        color: var(--c-blue-500);
      }
    }
  }

  &__element-title-container {
    height: 100%;
    height: -moz-available; /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__element-title {
    color: var(--c-black);
    font-size: $size-16;
    line-height: 1.5rem;
    padding: 12px;
    text-align: center;
    margin-bottom: 0;
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
