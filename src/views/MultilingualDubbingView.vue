<template>
  <main class="dubbing">
    <h1 class="dubbing__title">Multilingual dubbing</h1>
    <p class="dubbing__subtitle">
      Helps your production reach a greater and diverse audience
    </p>
    <RowWithIconsAndText class="row-element" :elements="rowWithIconsArray" />
    <TwoColumns>
      <template #left-column>
        <p>
          We are innovating our language customization services by integrating
          AI into our dubbing process. This integration allow us to better serve
          your turnaround, quality, and exclusive &amp; diverse casting needs.
          Using real natural voices, talented actors, and cutting-edge
          technology, we adapt your content to your new audience language while
          keeping the essence of your original productions.
        </p>
        <p>
          Because high quality requires a team of human experts in the nuances
          of the language, knowledge of the culture, and research on the target
          audience, we specialize in Spanish, English, French &amp; Portuguese.
        </p>
        <p>
          We are experts in <strong>music &amp; song adaptation</strong> that
          create a smooth, natural, and powerful soundtrack in the dubbed
          language that maintains the essence of the original production.
        </p>
        <p>
          <strong>Exclusive voices and casting choices</strong> are available
          through our process. Reach out to learn more.
        </p>
        <p>
          Do you need Real-Time Dubbing? Call us for detailed information about
          our exclusive service.
        </p>
        <p>
          Our customers include Fred Rogers Productions, HARPO, Passport to
          Knowledge, Sesame Workshop, The National Captioning Institute-NCI,
          Vitac, the American Council of the Blind-ACB, PBS New Hours, Kern
          Burns, HITN, Univision, among others.
        </p>
      </template>
      <template #right-column>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/lOC2UB6Cxk4?rel=0&amp;amp;wmode=transparent"
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
