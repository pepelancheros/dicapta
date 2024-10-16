<template>
  <main class="partners">
    <h1 class="partners__title">Television Partners</h1>
    <p class="partners__content">
      We are fortunate to have partnerships with organizations firmly committed
      to accessibility, like Canal 22 Internacional, Crawford Entertainment,
      D’Ocon Films, Fred Rogers Productions, HITN, I am Peace Short Film Forum,
      Kentucky Educational Television (KET), Mickela Mallozzi, New Day Films,
      Passport to Knowledge, POV, Semillitas, Superfest, and WIPR. They do not
      skimp on their efforts to support initiatives that provide access to
      audiences with sensory disabilities. Our work would not be possible
      without their generosity and receptiveness to accessibility initiatives.
      In the name of children with sensory disabilities, we want to thank our
      partners for helping us to provide equal access. Thank you for being so
      committed!
    </p>
    <Carousel
      class="partners__carousel"
      v-bind="settings"
      :breakpoints="breakpoints"
      :autoplay="2000"
      :wrap-around="true"
    >
      <Slide
        class="partners__slide"
        v-for="element in televisionPartners"
        :key="element"
      >
        <div class="carousel__item">
          <img :src="element" alt="" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="partners__gray-section">
      <TwoColumns>
        <template #left-column>
          <h2>Benefits of being Our Partner include:</h2>
          <ul>
            <li>
              Making your content accessible for good to children with sensory
              disabilities- by giving us permission to caption and audio
              describe your educational content.
            </li>
            <li>
              Being recognized through our network: consumer organizations,
              policymakers, and government organizations, due to your efforts in
              diversity and inclusion.
            </li>
            <li>
              Additional benefits include distributing your accessible content
              in the school system through The Described and Captioned Media
              Program (DCMP) and storing your accessibility assets in the
              Clearinghouse "All4Access." See our
              <a href="/ver2022/en/tv-movie-access-2">TV &amp; Movie Access</a>
              section for additional information.
            </li>
          </ul>
        </template>
        <template #right-column>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/gd1u42TcQnA?wmode=transparent"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
          <button>Contact Us</button>
        </template>
      </TwoColumns>
    </div>
    <TwoColumns>
      <template #left-column>
        <h2>Our Partners in Accessibility</h2>
        <p>
          Our partners are helping us spread the word about sensory disabilities
          issues, campaigning to promote accessible content, publicizing the use
          of All4Access, and creating awareness among the general population.
          Follow our
          <a href="https://www.youtube.com/user/DICAPTA">YouTube Channel</a>,
          subscribe to our Newsletter, and visit our
          <a href="">Resources section</a> for updated information on our TV
          partners' recent activity.
        </p>
      </template>
      <template #right-column>
        <img src="@/assets/images/partners-in-accessibility.png" />
      </template>
    </TwoColumns>
    <section class="organization-partners">
      <h2 class="partners__title">Partner Organizations</h2>
      <p class="partners__content">
        Dicapta collaborates with organizations committed to making media,
        information, education, entertainment, and culture accessible to all. We
        offer them our time, advice, and outreach capabilities; sometimes, we
        provide education too.
      </p>
      <Carousel
        class="partners__carousel organization-partners__carousel"
        v-bind="settings"
        :breakpoints="breakpoints"
        :autoplay="2000"
        :wrap-around="true"
      >
        <Slide
          class="partners__slide"
          v-for="element in organizationPartners"
          :key="element"
        >
          <div class="carousel__item">
            <img :src="element" alt="" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
  </main>
</template>

<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import TwoColumns from "@/components/TwoColumns.vue";

const televisionPartners = [
  "/src/assets/images/logos/bare-feet.png",
  "/src/assets/images/logos/canal22.png",
  "/src/assets/images/logos/crawford.png",
  "/src/assets/images/logos/docon.png",
  "/src/assets/images/logos/frp.png",
  "/src/assets/images/logos/hitn.png",
  "/src/assets/images/logos/iampeace.png",
  "/src/assets/images/logos/ket.png",
  "/src/assets/images/logos/new-day-films.png",
  "/src/assets/images/logos/pov.png",
  "/src/assets/images/logos/pragda.png",
  "/src/assets/images/logos/ptk.png",
  "/src/assets/images/logos/semillitas.png",
  "/src/assets/images/logos/sesame-workshop.png",
  "/src/assets/images/logos/spf.png",
  "/src/assets/images/logos/trece.png",
  "/src/assets/images/logos/wb.png",
  "/src/assets/images/logos/wipr.png",
  "/src/assets/images/logos/wucf.png",
];
const organizationPartners = [
  "/src/assets/images/logos/aph.png",
  "/src/assets/images/logos/acb.png",
  "/src/assets/images/logos/dcmp.png",
  "/src/assets/images/logos/deaf-blind.png",
  "/src/assets/images/logos/frp.png",
  "/src/assets/images/logos/fcc.png",
  "/src/assets/images/logos/ncdb.png",
  "/src/assets/images/logos/teach-access.png",
  "/src/assets/images/logos/uc3m.png",
];

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>

<style scoped lang="scss">
.partners {
  &__title {
    text-align: center;
    font-size: $size-48;
    margin-top: $size-64;
  }

  h1 {
    margin-top: $size-192;
  }

  &__content {
    max-width: $size-1024;
    margin: auto;
    padding: $size-32;
  }

  &__carousel {
    max-width: $size-1024;
    margin: auto;
    padding: $size-32;
  }

  &__gray-section {
    background-color: var(--c-gray-300);
    padding: $size-32 0;
    margin-bottom: $size-48;
  }
}

.organization-partners {
  margin-bottom: $size-64;

  &__carousel {
    img {
      width: 100px;
    }
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  &:hover {
    color: var(--c-blue-500);
    background-color: transparent;
  }
}
</style>
