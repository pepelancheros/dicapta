<template>
  <main id="main" class="all4voicing">
    <section class="banner">
      <picture>
        <!-- Desktop Image -->
        <source
          class="banner__img"
          media="(min-width: 768px)"
          srcset="/assets/images/all4voicing-banner.webp"
          alt="An abstract wave pattern featuring vibrant shades of purple and blue, creating a dynamic and fluid visual effect."
          width="2000"
          height="844"
        />
        <!-- Mobile Image -->
        <source
          class="banner__img"
          media="(max-width: 767px)"
          srcset="/assets/images/all4voicing-banner-m.webp"
          alt="An abstract wave pattern featuring vibrant shades of purple and blue, creating a dynamic and fluid visual effect."
          width="800"
          height="533"
        />
        <!-- Fallback Image -->
        <img
          class="banner__img"
          aria-hidden="true"
          decoding="async"
          src="/assets/images/all4voicing-banner.webp"
          alt="An abstract wave pattern featuring vibrant shades of purple and blue, creating a dynamic and fluid visual effect."
          width="2000"
          height="844"
        />
      </picture>
      <img
        class="banner__logo"
        src="/assets/images/all4voicing-logo.webp"
        alt="logo with the text All4Voicing Lite"
      />
      <img
        class="banner__icons"
        src="/assets/images/all4voicing-icons.webp"
        alt="3 icons featuring the words 'record', 'write' and 'mix audio' representing the features that the platform offers."
      />
    </section>
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
        All4Voicing is a way for the entire
        <strong>audio description (AD)</strong> process to happen seamlessly in
        one place, including identifying spaces and adding descriptions to
        mixing AD narration with the original audio. By consolidating all AD
        tasks into a single platform, All4Voicing eliminates the need for
        multiple software and tools, streamlining coordination efforts and
        reducing time-consuming revisions.
      </p>
      <p>
        We have experienced how this streamlined and intuitive approach allows
        users to focus on crafting high-quality AD content, cutting creation
        time from days to hours and increasing the availability of accessible
        educational content.
      </p>
      <p>
        Learn more at
        <a href="http://lite.all4voicing.com">All4Voicing Lite</a>.
      </p>
    </TwoColumnTextAndImage>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumnTextAndImage from "@/components/TwoColumnTextAndImage.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: "All4Voicing Lite | Streamlined Audio Description for Education",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Discover All4Voicing Lite, our new cloud platform for efficient audio description. Designed for educational use, it streamlines production workflows effortlessly.",
    },
  ],
})

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
  .banner {
    position: relative;
    height: 500px;
    margin-bottom: $size-32;

    &__img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }

    &__logo {
      position: absolute;
      width: 300px;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
    }

    &__icons {
      position: absolute;
      top: 390px;
      left: 50%;
      transform: translateX(-50%);
      width: 360px;
    }
  }

  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
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
    .banner {
      &__logo {
        left: 15%;
        transform: none;
        width: 320px;
      }

      &__icons {
        position: absolute;
        right: 50px;
        left: unset;
        transform: none;
      }
    }
  }
}
</style>
