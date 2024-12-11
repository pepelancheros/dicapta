<template>
  <div class="news-card" :style="{ backgroundColor: primaryColor }">
    <h2 class="news-card__title" :style="{ backgroundColor: secondaryColor }">
      {{ title }}
    </h2>
    <img class="news-card__img" :src="image" alt="" />
    <p class="news-card__text">
      {{ text }}
    </p>
    <a
      :href="pageLink"
      :style="{ backgroundColor: secondaryColor }"
      class="news-card__button"
      >{{ buttonText || "More articles..." }}</a
    >
  </div>
</template>

<script setup>
const props = defineProps([
  "title",
  "image",
  "text",
  "buttonText",
  "primary-color",
  "secondary-color",
  "page-link",
]);
</script>

<style lang="scss">
.news-card {
  display: flex;
  flex-direction: column;
  background-color: var(--c-blue-400);
  width: 250px;
  align-items: center;
  margin-top: 80px;
  position: relative;
  box-shadow: 7px 7px 10px 2px #0000002e;
  justify-content: space-between;

  &__title {
    color: var(--c-white-soft);
    background-color: var(--c-blue-600);
    text-align: center;
    border-radius: 10px;
    width: 100%;
    max-width: 225px;
    padding: $size-8 0;
    font-size: $size-24;
    transform: translateY(-50%);
    box-shadow: 2px 4px 4px 1px #0000002e;
    font-weight: 600;
    position: absolute;
    top: 0;
  }

  &__img {
    max-width: 200px;
    margin-top: $size-48;
    margin-bottom: $size-16;
  }

  &__text {
    color: var(--c-white-soft);
    font-size: $size-16;
    font-weight: 600;
    margin: auto;
    margin-bottom: $size-12;
    text-align: left;
    max-width: 200px;
  }

  &__button {
    color: white;
    font-size: $size-16;
    padding: 10px 30px;
    border-radius: 15px;
    margin-bottom: $size-32;
    font-weight: 500;
    margin-top: auto;
  }
}
</style>
