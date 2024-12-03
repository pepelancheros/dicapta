<template>
  <div class="new-release">
    <div class="new-release__header">
      <h2>New Accessibility Releases</h2>
    </div>
    <div class="new-release__content">
      <h1 class="new-release__title">{{ currentRelease.title }}</h1>
      <img
        class="new-release__img"
        :src="currentRelease.imgUrl"
        :alt="currentRelease.imgAltText"
      />
      <div class="new-release__info">
        <p><strong>language: </strong> {{ currentRelease.language }}</p>
        <p><strong>Accessibility: </strong> {{ accessibilityOptions }}</p>
        <p>
          <strong>Where to watch: </strong>
          <a
            :href="currentRelease.watchInLink"
            rel="noopener noreferrer"
            target="_blank"
            >{{ currentRelease.watchIn }}</a
          >
        </p>
        <p v-if="currentRelease.all4access">
          <strong>Accessibility available in: </strong
          ><a href="https://all4access.com/">All4Access</a>
        </p>
        <p>
          <strong>Date: </strong
          >{{ currentRelease.releaseMonth + " " + currentRelease.releaseYear }}
        </p>
        <p class="new-release__description">{{ currentRelease.description }}</p>
        <p><strong>Content Provider: </strong>{{ currentRelease.provider }}</p>
        <p>
          <strong>{{ currentRelease.series ? "Series" : "Movie" }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import json from "@/mocked/newReleasesMocked.json";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const releases = json.releases;
const currentRelease = releases.filter(
  (release) => release.id === Number(route.params.id)
)[0];
const accessibilityOptions = computed(() => {
  const options = [
    currentRelease.AD && "Audio Description",
    currentRelease.CC && "Closed Captions",
    currentRelease.ASL && "American Sign Language",
  ].filter(Boolean);

  return options.length === 0
    ? "None"
    : options.length === 1
      ? options[0]
      : options.length === 2
        ? options.join(" and ")
        : options.slice(0, -1).join(", ") +
          " and " +
          options[options.length - 1];
});
</script>

<style scoped lang="scss">
.new-release {
  &__header {
    background-color: var(--c-gray-300);
    padding: $size-16;

    h2 {
      font-size: $size-32;
      font-weight: 600;
      text-align: center;
      line-height: normal;
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  &__content {
    max-width: $size-1024;
    margin: auto;
    padding: $size-48 $size-16;
    min-height: $size-384;
  }

  &__title {
    font-size: $size-48;
    font-weight: bold;
    color: var(--c-blue-500);
    margin-bottom: $size-12;
  }

  &__img {
    max-width: 100%;
  }

  &__info {
    margin-top: $size-12;
  }

  &__description {
    margin: $size-24 auto;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .new-release {
    &__header {
      padding: $size-48;

      h2 {
        font-size: $size-48;
      }
    }
  }
}
</style>
