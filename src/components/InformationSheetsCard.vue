<template>
  <a
    :href="`/resources/information-sheets/${sheetId}`"
    class="information-sheets-card"
  >
    <div class="information-sheets-card__title-container">
      <h2 class="information-sheets-card__title">{{ title }}</h2>
    </div>
    <img :src="imgUrl" alt="" />
  </a>
</template>

<script setup>
const props = defineProps({
  sheetId: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.information-sheets-card {
  max-width: 300px;
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

  &__title-container {
    height: 100%;
    height: -moz-available; /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    color: var(--c-black);
    font-size: $size-16;
    line-height: 1.5rem;
    padding: 12px;
    text-align: center;
    margin-bottom: 0;
  }
}
</style>
