<template>
  <div class="two-columns-text-and-image">
    <div
      class="two-columns-text-and-image__text"
      :class="{ 'two-columns-text-and-image__text--second': imageFirst }"
    >
      <h2 v-if="title" class="two-columns-text-and-image__title">
        {{ title }}
      </h2>
      <slot></slot>
      <a class="button" v-if="buttonUrl && buttonText" :href="buttonUrl">{{
        buttonText
      }}</a>
    </div>
    <div class="two-columns-text-and-image__image-container">
      <img v-if="imageUrl" :src="imageUrl" :alt="imageAlt" loading="lazy" />
      <p v-if="imageText">
        {{ imageText }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  buttonUrl: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  imageAlt: {
    type: String,
    default: "",
  },
  imageText: {
    type: String,
    default: "",
  },
  imageFirst: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.two-columns-text-and-image {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: $size-48 $size-32;

  &__text {
    font-size: $size-16;
    margin-bottom: $size-24;

    :deep(p) {
      margin-bottom: $size-16;
    }

    button {
      margin-top: $size-16;
    }
  }

  &__title {
    font-size: $size-32;
    color: var(--c-blue-500);
    margin-bottom: $size-12;
    margin-left: 0;
  }

  &__image-container {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }

    p {
      text-align: center;
      color: var(--c-white-soft);
      font-size: $size-16;
      background-color: var(--c-blue-600);
      padding: $size-24;
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .two-columns-text-and-image {
    flex-direction: row;
    max-width: $size-1024;
    padding: $size-96 $size-32;

    &__text {
      width: 50%;
      padding-right: $size-32;

      &--second {
        order: 1;
        margin-left: $size-32;
      }
    }

    &__image-container {
      width: 50%;
      margin-left: $size-32;

      p {
        text-align: center;
        color: var(--c-white-soft);
        font-size: $size-16;
        background-color: var(--c-blue-600);
        padding: $size-24;
      }
    }
  }
}
</style>
