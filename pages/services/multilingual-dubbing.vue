<template>
  <main id="main" class="dubbing">
    <h1 class="dubbing__title">Multilingual dubbing</h1>
    <p class="dubbing__subtitle">
      Helps your production reach a greater and diverse audience
    </p>
    <RowWithIconsAndText class="row-element" :elements="rowWithIconsArray" />
    <TwoColumns>
      <template #left-column>
        <p>
          We’re transforming language customization by integrating advanced AI
          into our dubbing services, delivering quicker turnarounds, premium
          quality, and exclusive, diverse casting. By
          <strong
            >combining real, natural voices with cutting-edge technology</strong
          >, we seamlessly adapt your content to resonate in a new language—all
          while preserving the unique essence of your original production.
        </p>
        <p>
          To ensure exceptional quality, we rely on a dedicated team of language
          experts with deep cultural insights and thorough knowledge of target
          audiences. Our specialization includes
          <strong>Spanish, English, French, and Portuguese</strong>,
          guaranteeing authentic connections with your viewers.
        </p>
        <p>
          Our expertise extends to <strong>music and song adaptation</strong>,
          crafting smooth, powerful soundtracks that feel natural in the dubbed
          language, yet fully capture the spirit of the original.
        </p>
        <p>
          With exclusive voice and casting options available, you’ll find the
          perfect match for your project. Contact us to explore how we can
          elevate your content.
        </p>
        <p>
          <strong>Need Real-Time Dubbing?</strong> Get in touch to learn more
          about this unique service.
        </p>
        <p>
          <strong>Our Clients Include:</strong> Fred Rogers Productions, HARPO,
          Passport to Knowledge, Sesame Workshop, the National Captioning
          Institute (NCI), VITAC, the American Council of the Blind (ACB), PBS
          NewsHour, Ken Burns, HITN, Univision, and more.
        </p>
      </template>
      <template #right-column>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/xVbU4Y3l0Lo?si=6vsCqRxX10dSdVR2&amp;amp;wmode=transparent"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <a class="button" href="/about/contact-us">Contact Us</a>
      </template>
    </TwoColumns>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumns from "@/components/TwoColumns.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: "Dicapta | Multilingual Dubbing for Inclusive Content",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Seamlessly localize your media with Dicapta’s multilingual dubbing services. Enjoy faster delivery and competitive pricing powered by our optimized processes. Learn more!",
    },
  ],
})

const rowWithIconsArray = ref([
  {
    imageUrl: "/assets/images/dubbing-ai-cloning.png",
    alt: "",
    title: "Dubbing",
    text: "WITH LIP-SYNC",
  },
  {
    imageUrl: "/assets/images/dubbing-ai.png",
    alt: "",
    title: "AI Powered",
    text: "USING NATURAL VOICES",
  },
]);
</script>

<style scoped lang="scss">
.dubbing {
  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
    margin-top: $size-96;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: $size-24;
  }

  .row-element {
    margin-bottom: $size-24;
  }

  iframe {
    margin-bottom: $size-24;
  }

  button {
    margin: auto;
  }
}

@media all and (min-width: $size-768) {
  .dubbing {
    &__title {
      margin-top: $size-192;
    }
  }
}
</style>
