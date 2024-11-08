<template>
  <div class="tv-and-movie-card">
    <h3 class="tv-and-movie-card__title">{{ title }}</h3>
    <div class="tv-and-movie-card__content">
      <div class="tv-and-movie-card__left-column">
        <a
          v-if="enterpriseLink"
          class="tv-and-movie-card__logo-container"
          :href="enterpriseLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="tv-and-movie-card__logo"
            :src="imgUrl"
            :alt="'logo of ' + title"
          />
        </a>
        <img
          v-else
          class="tv-and-movie-card__logo"
          :src="imgUrl"
          :alt="'logo of ' + title"
        />
        <div>
          <p>{{ videoTitle }}</p>
          <iframe
            width="100%"
            :src="videoLink"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
      <div class="tv-and-movie-card__right-column">
        <p class="tv-and-movie-card__text">{{ text }}</p>
        <a
          v-if="playlistLink"
          class="tv-and-movie-card__button button"
          :href="playlistLink"
          >Watch more</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: "",
  },
  videoLink: {
    type: String,
    default: "",
  },
  videoTitle: {
    type: String,
    default: "",
  },
  playlistLink: {
    type: String,
    default: "",
  },
  enterpriseLink: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.tv-and-movie-card {
  border-top: $size-4 solid var(--c-blue-500);
  padding: $size-12 $size-24 $size-24;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: $size-48;

  &__title {
    text-align: center;
    font-size: $size-24;
    font-weight: 500;
    margin-top: $size-16;
  }

  &__content {
    display: flex;
    padding-top: $size-12;
  }

  &__left-column {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: $size-16;
  }

  &__logo-container {
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }

  &__logo {
    max-width: 150px;
    margin-bottom: $size-24;
    transition: all 0.3s ease;
  }

  &__right-column {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: $size-16;
  }

  &__text {
    margin-bottom: $size-16;
  }

  &__button {
    max-width: 150px;
    font-size: $size-16;
    font-weight: 500;
    align-self: center;
  }
}
</style>
