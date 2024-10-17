<template>
  <main class="audio-description">
    <h1 class="audio-description__title">Audio description</h1>
    <p class="audio-description__subtitle">
      Services that bring images, videos, movies or any other visual to everyone
    </p>
    <RowWithIconsAndText :elements="rowWithIconsArray" />
    <TwoColumns>
      <template #left-column>
        <h3>
          Audio description provides people who are blind or have low vision
          with access to video content.
        </h3>
        <p>
          Audio description, also known as video description or descriptive
          service, is the narration of key visual elements of a program so that
          people with visual disabilities can have access to television
          programs, movies, videos or any other kind of audiovisual material.
          For television programs, this narration is available through an
          alternate audio channel-SAP that the viewer must activate.
        </p>
      </template>
      <template #right-column>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/XuwIY-qR8JM?rel=0&amp;amp;wmode=transparent"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <button>Contact Us</button>
      </template>
    </TwoColumns>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumns from "@/components/TwoColumns.vue";

const rowWithIconsArray = ref([
  {
    icon: "lnr-history",
    title: "AD Script with TC",
    text: "DESCRIPTION SCRIPTS WITH TIME CODE",
  },
  {
    icon: "lnr-sync",
    title: "Complement content's tone",
    text: "SCRIPT AND VOICE TALENTS ALIGNED WITH THE ORIGINAL CONTENT'S TONE",
  },
  {
    icon: "lnr-chart-bars",
    title: "AD Track Mixed",
    text: "AUDIO DESCRIPTION AUDIO TRACK MIXED WITH O RIGINAL AUDIO",
  },
]);
</script>

<style scoped lang="scss">
.audio-description {
  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
    margin-top: $size-96;
    padding: 0 $size-16;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: $size-24;
    padding: 0 $size-16;
  }
}

@media all and (min-width: $size-768) {
  .audio-description {
    &__title {
      margin-top: $size-192;
    }
  }
}
</style>
