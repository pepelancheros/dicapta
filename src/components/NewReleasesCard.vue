<template>
  <a class="release-card" :href="`/news/new-releases/${release.id}`">
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
  overflow: hidden;

  &:hover {
    box-shadow: 0 16px 24px 8px rgba(0, 0, 0, 0.12);

    img {
      transform: scale(1.05);
    }
  }

  &__date {
    font-size: $size-24;
    font-weight: bold;
    padding: $size-8 $size-16;
  }

  &__img {
    max-width: 100%;
    transition: transform 0.3s ease-in-out;
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
