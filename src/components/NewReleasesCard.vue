<template>
  <div class="release-card">
    <p class="release-card__date">
      {{ release.month + " " + release.releaseYear }}
    </p>
    <img
      class="release-card__img"
      :src="release.imgUrl"
      :alt="release.imgAltText"
    />
    <div class="release-card__info-container">
      <h2 class="release-card__title">{{ release.title }}</h2>
      <p><strong>language: </strong> {{ release.language }}</p>
      <p>
        <strong> Content Provider: </strong>
        <a
          class="release-card__content-provider-link"
          :href="release.watchInLink"
          rel="noopener noreferrer"
          target="_blank"
          >{{ release.watchIn }}</a
        >
      </p>
      <p>
        <strong>{{ release.series ? "Series" : "Movie" }}</strong>
      </p>
      <p class="release-card__description">{{ release.description }}</p>
    </div>
  </div>
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

  &__date {
    font-size: $size-24;
    font-weight: bold;
    padding: $size-8 $size-16;
  }

  &__img {
    max-width: 100%;
  }

  &__info-container {
    padding: $size-8 $size-16;
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
