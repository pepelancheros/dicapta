<template>
  <a class="article-card" :href="link">
    <div class="article-card__img-container">
      <img :src="imgUrl" :alt="imgAlt" />
    </div>
    <div class="article-card__content">
      <h2>{{ title }}</h2>
      <p v-if="text" class="article-card__text">{{ text }}</p>
      <span class="article-card__publish-date" v-if="publishDate"
        >Published: {{ publishDate }}</span
      >
    </div>
  </a>
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
  publishDate: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: "",
  },
  imgAlt: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.article-card {
  max-width: 300px;
  margin-bottom: $size-48;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 0 16px 24px 8px rgba(0, 0, 0, 0.12);
    border-top: 0.25rem solid var(--c-blue-500);

    h2 {
      color: var(--c-blue-500);
    }

    img {
      transform: scale(1.05);
    }
  }

  h2 {
    font-size: $size-24;
    color: var(--c-black);
    line-height: 2rem;
  }

  &__img-container {
    height: 200px;
    position: relative;
    margin-bottom: $size-12;
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
    transition: transform 0.3s ease-in-out;
  }

  &__content {
    padding: $size-12;
  }

  &__text {
    font-size: $size-16;
    color: var(--c-black);
    line-height: 1.5rem;
    margin-top: $size-12;
    margin-bottom: $size-12;
  }

  &__publish-date {
    display: block;
    width: 100%;
    text-align: right;
    color: var(--c-black);
  }
}
</style>
