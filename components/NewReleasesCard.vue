<template>
  <a class="release-card" :href="`/news/new-releases/${release.id}`">
    <p class="release-card__date">
      {{ release.month + " " + release.accessibilityReleaseYear }}
    </p>
    <img
      class="release-card__img"
      :src="release.imageUrl"
      :alt="release.altText"
    />
    <div class="release-card__info-container">
      <div class="release-card__accessibility-logos-container">
        <img
          v-if="release.AD"
          class="release-card__accessibility-logos"
          src="/assets/images/ad-white.webp"
          alt="audio description logo"
        />
        <img
          v-if="release.CC"
          class="release-card__accessibility-logos release-card__accessibility-logos--closed-captions"
          src="/assets/images/cc-white.webp"
          alt="closed caption logo"
        />
        <img
          v-if="release.ASL"
          class="release-card__accessibility-logos"
          src="/assets/images/asl-white.webp"
          alt="american sign language logo"
        />
        <img
          v-if="release.includedInAll4Access"
          class="release-card__accessibility-logos"
          src="/assets/images/a4a-white.webp"
          alt="all4access logo"
        />
      </div>
      <h2 class="release-card__title">{{ release.title }}</h2>
      <p><strong>language: </strong> {{ release.language }}</p>
      <p>
        <strong> Content Provider: </strong>
        <a
          class="release-card__content-provider-link"
          :href="release.whereToWatchLink"
          rel="noopener noreferrer"
          target="_blank"
          >{{ release.provider }}</a
        >
      </p>
      <p>
        <strong>{{ release.series ? "Series" : "Film" }}</strong>
      </p>
      <p class="release-card__description">{{ release.description }}</p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  release: {
    type: Object,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.release-card {
  background-color: var(--c-blue-600);
  border-radius: 15px;
  color: var(--c-white);
  padding: 0;
  padding-bottom: $size-12;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 16px 24px 8px rgba(0, 0, 0, 0.12);

    .release-card__img {
      transform: scale(1.05);
    }
  }

  &__date {
    font-size: $size-24;
    font-weight: bold;
    padding: $size-8 $size-16;
  }

  &__img {
    width: 100%;
    max-width: 100%;
    transition: transform 0.3s ease-in-out;
  }

  &__info-container {
    padding: $size-8 $size-16;
  }

  &__accessibility-logos-container {
    display: flex;
    align-items: center;
    margin-bottom: $size-8;
  }

  &__accessibility-logos {
    max-width: 50px;
    margin-right: $size-16;

    &--closed-captions {
      max-width: 35px;
    }
  }

  &__title {
    font-size: $size-32;
    font-weight: bold;
    margin: 0;
  }

  &__content-provider-link {
    color: var(--c-white);
    text-decoration: underline;
  }

  &__description {
    margin-top: $size-12;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
