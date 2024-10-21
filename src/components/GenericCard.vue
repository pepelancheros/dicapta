<template>
  <a
    :href="href"
    class="generic-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="generic-card__text-container">
      <h2 class="generic-card__title">{{ title }}</h2>
      <p v-if="text" class="generic-card__text">{{ text }}</p>
    </div>
    <img :src="imgUrl" alt="" />
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
  imgUrl: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.generic-card {
  width: 300px;
  margin-bottom: $size-48;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
  }

  &:hover {
    max-width: 310px;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.24);
    border-top: 0.25rem solid var(--c-blue-500);

    h2 {
      color: var(--c-blue-500);
    }
  }

  &__text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    color: var(--c-black);
    font-size: $size-16;
    line-height: 1.5rem;
    padding: $size-12;
    text-align: center;
    margin-bottom: 0;
  }

  &__text {
    color: var(--c-black);
    font-size: $size-16;
    line-height: 1.5rem;
    padding: 0 $size-12 $size-12 $size-12;
    text-align: center;
  }
}
</style>
