<template>
  <main class="newsletters">
    <div class="newsletters__header">
      <h1>Newsletters</h1>
    </div>
    <div class="newsletters__content">
      <a
        class="newsletters__card"
        v-for="newsletter in newsletters"
        :key="newsletter.id"
        :href="newsletter.pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="newsletter.imgUrl" alt="newsletter image" />
      </a>
    </div>
  </main>
</template>

<script setup>
import json from "@/mocked/newslettersMocked.json";

const newsletters = json.newsletters;
</script>

<style scoped lang="scss">
.newsletters {
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

  &__card {
    max-width: 320px;
    margin-bottom: $size-32;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    max-height: 220px;

    img {
      transition: 0.3s;
      max-width: 100%;
      object-fit: cover;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .newsletters {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
