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
        <div class="new-release__accessibility-logos-container">
          <img
            v-if="currentRelease.AD"
            class="new-release__accessibility-logos"
            src="/assets/images/ad-black.webp"
            alt="audio description logo"
          />
          <img
            v-if="currentRelease.CC"
            class="new-release__accessibility-logos new-release__accessibility-logos--closed-captions"
            src="/assets/images/cc-black.webp"
            alt="closed caption logo"
          />
          <img
            v-if="currentRelease.ASL"
            class="new-release__accessibility-logos"
            src="/assets/images/asl-black.webp"
            alt="american sign language logo"
          />
          <img
            v-if="currentRelease.all4access"
            class="new-release__accessibility-logos"
            src="/assets/images/a4a-black.webp"
            alt="all4access logo"
          />
        </div>
        <p>
          <strong>language: </strong>
          {{ currentRelease.language === "EN" ? "English" : "Spanish" }}
        </p>
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
          >{{ currentRelease.month + " " + currentRelease.releaseYear }}
        </p>
        <p class="new-release__description">{{ currentRelease.description }}</p>
        <a
          class="new-release__play-icon-container"
          :href="currentRelease.watchInLink"
          rel="noopener noreferrer"
          target="_blank"
          ><img
            class="new-release__play-icon"
            src="/assets/images/material-icons/play-circle.svg"
            alt="play icon"
        /></a>
        <p><strong>Content Provider: </strong>{{ currentRelease.provider }}</p>
        <p v-if="currentRelease.seasonNumber">
          <strong>Season: </strong>{{ currentRelease.seasonNumber }}
        </p>
        <p>
          <strong>{{ currentRelease.series ? "Series" : "Film" }}</strong>
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

  &__accessibility-logos-container {
    display: flex;
    align-items: center;
    margin-bottom: $size-24;
  }

  &__accessibility-logos {
    max-width: 90px;
    margin-right: $size-32;

    &--closed-captions {
      max-width: 60px;
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

  &__play-icon-container {
    display: block;
    width: 100px;
    padding: 0;
  }

  &__play-icon {
    width: 100%;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0);
    }
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
