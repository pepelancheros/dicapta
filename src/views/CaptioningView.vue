<template>
  <div class="captioning">
    <h1 class="captioning__title">Captioning</h1>
    <p class="captioning__subtitle">
      Turning audio from any media into an accessible text format
    </p>
    <RowWithIconsAndText :elements="rowWithIconsArray" />
    <TwoColumns>
      <template #left-column>
        <h2>Ask for packages available based on your production needs.</h2>
        <p>
          Captions are the text displayed over a video and contain all of the
          video's audio information. This feature allows the hearing impaired to
          access audible information.
        </p>
        <p><strong>We provide:</strong></p>
        <ul>
          <li>Offline captioning in English and Spanish.</li>
          <li>Real-time captioning for live programs in Spanish.</li>
          <li>Roll up/Pop on.</li>
          <li id="LIVE">Translated captions in English and Spanish.</li>
          <li>
            100% accuracy in offline captioning and 95% accuracy in real-time
            captioning.
          </li>
        </ul>
      </template>
      <template #right-column>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/49LYL1gOmTM?rel=0&amp;amp;wmode=transparent"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <button>Contact us</button>
      </template>
    </TwoColumns>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumns from "@/components/TwoColumns.vue";

const rowWithIconsArray = ref([
  {
    icon: "lnr-picture",
    title: "Multiple Video Formats",
    text: "AVAILABLE FOR DATA EXCHANGE",
  },
  {
    icon: "lnr-spell-check",
    title: "C95% ~ 100% Accuracy",
    text: "REAL-TIME and OFF-LINE CAPTIONING",
  },
  {
    icon: "lnr-license",
    title: "We meet and exceed",
    text: "FCC CAPTION QUALITY BEST PRACTICES",
  },
]);
</script>

<style scoped lang="scss">
.captioning {
  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
    margin-top: $size-192;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: $size-12;
  }
}
</style>
