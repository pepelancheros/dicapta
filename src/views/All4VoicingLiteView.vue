<template>
  <main class="all4voicing">
    <h1 class="all4voicing__title">All4Voicing Lite</h1>
    <p class="all4voicing__subtitle">
      A one-stop shop for making videos accessible to people with visual
      disabilities.
    </p>
    <RowWithIconsAndText :elements="rowWithIconsArray" />
    <TwoColumnTextAndImage
      imageUrl="/assets/images/All4Voicingimage.webp"
      imageAlt="A video editor where the description and audio of a video is being modified."
      class="all4voicing__info"
    >
      <p>
        All4Voicing is a way for the entire process to happen seamlessly in one
        place, including identifying spaces and adding descriptions to mixing AD
        narration with the original audio. By consolidating all AD tasks into a
        single platform, All4Voicing eliminates the need for multiple software
        and tools, streamlining coordination efforts and reducing time-consuming
        revisions.
      </p>
      <p>
        We have experienced how this streamlined and intuitive approach allows
        users to focus on crafting high-quality AD content, cutting creation
        time from days to hours and increasing the availability of accessible
        educational content.
      </p>
    </TwoColumnTextAndImage>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumnTextAndImage from "@/components/TwoColumnTextAndImage.vue";

const rowWithIconsArray = ref([
  {
    imageUrl: "/assets/images/icon1devoicing.png",
    alt: "",
    title: "One-stop shop",
    text: "THE ENTIRE PROCESS IS DONE IN ONE PLACE",
  },
  {
    imageUrl: "/assets/images/icon2devoicing.png",
    alt: "",
    title: "Automatic detection",
    text: "AUTOMATIC DETECTION OF SPACES FOR DESCRIPTION",
  },
  {
    imageUrl: "/assets/images/icon3devoicing.png",
    alt: "",
    title: "Smooth collaboration",
    text: "SEAMLESS TEAMWORK FOSTERS AGILE AND EFFICIENT COLLABORATION",
  },
]);
</script>

<style scoped lang="scss">
.all4voicing {
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

  &__info {
    padding: $size-64 $size-32;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .all4voicing {
    &__title {
      margin-top: $size-192;
    }
  }
}
</style>
