<template>
  <main id="main" class="audio-description">
    <h1 class="audio-description__title">Audio description</h1>
    <p class="audio-description__subtitle">
      Services that bring images, videos, movies or any other visual to everyone
    </p>
    <RowWithIconsAndText :elements="rowWithIconsArray" />
    <TwoColumns>
      <template #left-column>
        <p>
          Audio description brings key visual elements to life through
          narration,
          <strong
            >enabling people with visual disabilities to enjoy video
            content</strong
          >
          with greater richness and immersion. Available on broadcast TV via the
          SAP, on streaming platforms via an alternate audio channel, or via the
          <a href="https://all4access.com/how-to-use">All4Access app</a>, audio
          description empowers viewers to engage fully with their favorite
          content.
        </p>
        <p>
          With over <strong>20 years of experience</strong>, Dicapta is
          dedicated to crafting high-quality audio descriptions in English and
          Spanish. Audio description is more than a service—it’s our passion. We
          meticulously
          <strong
            >match language and narration style to the original work</strong
          >, ensuring each piece feels natural and enhances the viewer’s
          experience.
        </p>
        <p>
          Our projects span a wide range of genres, from children’s programming
          to nature, science, and social issues. We’re proud to collaborate with
          esteemed clients such as Fred Rogers Productions, WaterBear, Sesame
          Workshop, Passport to Knowledge, POV, Pragda, Semillitas, Superfest,
          and Johns Hopkins University.
        </p>
        <p>
          Dicapta has also developed
          <strong>proprietary technology</strong> that streamlines the audio
          description process, allowing us to deliver faster, higher-quality
          results. In addition, our
          <a href="https://all4access.com/All_4_Access/"
            >All4Access Clearinghouse</a
          >
          and app make it easier than ever for users to access audio
          descriptions and other accessible features anytime, anywhere.
        </p>
        <p>
          When you work with Dicapta, you choose an unparalleled dedication to
          accessibility and excellence. We guarantee a product that meets the
          highest standards, crafted with care and expertise to elevate your
          content for all audiences.
        </p>
      </template>
      <template #right-column>
        <iframe
          class="audio-description__video"
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/ZIcVVLV2aso?si=F1uhoTcGInhAhQR_&amp;amp;wmode=transparent"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <iframe
          class="audio-description__video"
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/uo3Eu_EmW9o?si=uTrJf7tr-rpyUJrv&amp;amp;wmode=transparent"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <a
          class="button audio-description__contact-button"
          href="/about/contact-us"
          >Contact Us</a
        >
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
  title: "Dicapta | Audio Description Solutions for Accessible Media",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Make your media accessible to visually impaired audiences with Dicapta’s professional audio description services. Create inclusive content effortlessly. Contact us today!",
    },
  ],
})

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

  &__contact-button {
    display: block;
    width: 220px;
    margin: auto;
  }

  &__video {
    margin-bottom: $size-24;
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
