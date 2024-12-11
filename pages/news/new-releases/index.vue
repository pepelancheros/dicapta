<template>
  <main id="main" class="new-releases">
    <div class="new-releases__header">
      <h1>New Accessibility Releases</h1>
    </div>
    <div class="new-releases__content">
      <NewReleasesCard
        v-for="release in releases"
        class="new-releases__card"
        :key="release.id"
        :release="release"
      />
    </div>
    <div class="new-releases__content"></div>
  </main>
</template>

<script setup>
import NewReleasesCard from "@/components/NewReleasesCard.vue";
import json from "~/assets/mocked/newReleasesMocked.json";
const releases = json.releases;
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
