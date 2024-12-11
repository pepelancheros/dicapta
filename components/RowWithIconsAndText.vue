<template>
  <div class="row-component__container">
    <div class="row-component">
      <div
        class="row-component__item"
        v-for="element in elements"
        :key="element.title"
      >
        <div v-if="element.imageUrl" class="row-component__image-container">
          <img
            class="row-component__image"
            :src="element.imageUrl"
            :alt="element.imageAlt"
          />
        </div>
        <span v-else class="lnr" :class="element.icon"></span>
        <p class="row-component__title">{{ element.title }}</p>
        <p class="row-component__text">{{ element.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import loadLinearIconsStylesheet from "~/utils/loadStyleSheet";

onMounted(() => {
  if (props.elements.find((element) => !element.imageUrl)) {
    loadLinearIconsStylesheet();
  }
});
const props = defineProps({
  elements: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (element) =>
          ((typeof element.imageUrl === "string" &&
            typeof element.imageAlt === "string") ||
            typeof element.icon) &&
          typeof element.title === "string" &&
          typeof element.text === "string"
      );
    },
  },
});
</script>

<style scoped lang="scss">
.row-component {
  display: flex;
  flex-direction: column;
  padding: $size-64 0;
  margin: auto;
  max-width: $size-256;

  &__container {
    background-color: var(--c-gray-300);
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 33%;
    text-align: center;
    margin-bottom: $size-32;
  }

  &__image-container {
    height: 70px;
  }

  &__image {
    width: 60px;
    margin-bottom: $size-16;
  }

  &__title {
    font-size: $size-24;
    font-weight: 500;
    margin-bottom: $size-12;
  }

  &__text {
    font-size: $size-16;
  }

  .lnr {
    font-size: 80px;
    margin-bottom: $size-16;

    &:before {
      color: var(--c-blue-500);
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .row-component {
    flex-direction: row;
    max-width: $size-1024;
    justify-content: space-between;

    &__item {
      margin-bottom: 0;
    }
  }
}
</style>
