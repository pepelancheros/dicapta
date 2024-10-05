<template>
  <div class="two-columns">
    <div class="two-columns__left-column">
      <slot name="left-column"></slot>
    </div>
    <div class="two-columns__right-column">
      <slot name="right-column"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.two-columns {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: $size-48 $size-32;

  &__left-column {
    margin-bottom: $size-24;
  }

  :deep(img) {
    width: 100%;
  }

  :deep(h2) {
    font-size: $size-24;
  }

  :deep(p) {
    font-size: $size-16;
    margin-bottom: $size-12;
  }

  :deep(li) {
    font-size: $size-16;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .two-columns {
    flex-direction: row;
    max-width: $size-1024;
    padding: $size-32 $size-32;

    &__left-column {
      margin-bottom: 0;
      width: 50%;
      margin-right: $size-32;
    }

    &__right-column {
      width: 50%;
      margin-left: $size-32;
    }
  }
}
</style>
