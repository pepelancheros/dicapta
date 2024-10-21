<template>
  <main class="press">
    <div class="press__header">
      <h1>Press Kit</h1>
    </div>
    <div class="press__content">
      <!-- <GenericCard
        title="DICAPTA"
        imgUrl="/src/assets/images/pdf-images/hispanic-children-with-disabilities-in-the-usa-2022.png"
      /> -->
    </div>
  </main>
</template>

<script setup>
// import GenericCard from "@/components/GenericCard.vue";
</script>

<style scoped lang="scss">
.press {
  &__header {
    background-color: var(--c-gray-300);
    padding: $size-16;

    h1 {
      font-size: $size-32;
      font-weight: 600;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    max-width: $size-1024;
    margin: auto;
    padding: $size-48 $size-16;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .press {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
