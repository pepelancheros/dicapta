<template>
  <main class="caption">
    <section>
      <h1 class="caption__title">Caption</h1>
      <p class="caption__subtitle">
        Turning audio from any media into an accessible text format
      </p>
      <RowWithIconsAndText class="row-element" :elements="rowWithIconsArray" />
      <TwoColumns>
        <template #left-column>
          <h3>Ask for packages available based on your production needs.</h3>
          <p>
            Captions are the text displayed over a video and contain all of the
            video's audio information. This feature allows the hearing impaired
            to access audible information.
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
          <button>Contact Us</button>
        </template>
      </TwoColumns>
    </section>
    <section>
      <h2 class="caption__title caption__title--small-top-margin">Subtitles</h2>
      <TwoColumns>
        <template #left-column>
          <p>
            Incorporating subtitles into your productions is essential for
            fostering accessibility and captivating a broader audience. Even in
            the absence of dubbing, subtitles empower individuals who are deaf,
            hard of hearing, or non-native speakers to fully immerse themselves
            in your content.
          </p>
          <p>
            <span data-preserver-spaces="true"
              >We carefully create idiomatic adapted subtitles that ensure your
              content resonates with the audience</span
            >.&nbsp;<span data-preserver-spaces="true"
              >Subtitles for English/French/Spanish are available within three
              business days.</span
            >
          </p>
          <p><strong>Options</strong></p>
          <ul>
            <li>Subtitle files.</li>
            <li>Subtitles and layback to tape formats.</li>
            <li>
              Subtitles for the Deaf and Hard of Hearing (including translation
              if the subtitles are needed in a different language).
            </li>
          </ul>
          <button>Contact Us</button>
        </template>
        <template #right-column>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/Dbwvayo8NUk?wmode=transparent"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </template>
      </TwoColumns>
    </section>
  </main>
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
.caption {
  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
    margin-top: $size-96;
    padding: 0 $size-16;

    &--small-top-margin {
      margin-top: $size-24;
    }
  }

  &__subtitle {
    text-align: center;
    margin-bottom: $size-24;
    padding: 0 $size-16;
  }

  .row-element {
    margin-bottom: $size-48;
  }

  button {
    margin-top: $size-24;
  }
}

@media all and (min-width: $size-768) {
  .caption {
    &__title {
      margin-top: $size-192;

      &--small-top-margin {
        margin-top: $size-96;
      }
    }
  }
}
</style>
