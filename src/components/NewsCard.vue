<template>
  <div class="news-card">
    <h2 class="news-card__title">{{ title }}</h2>
    <img class="news-card__img" :src="image" alt="" />
    <p class="news-card__text">{{ text }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["title", "image", "text"]);
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

  &__title {
    color: var(--c-white-soft);
    background-color: var(--c-blue-600);
    text-align: center;
    border-radius: 10px;
    width: 100%;
    max-width: 225px;
    padding: $size-12 0;
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
    margin-bottom: $size-24;
    text-align: center;
  }
}
</style>
