<template>
  <main>
    <section class="banner">
      <picture>
        <!-- Desktop Image -->
        <source
          class="banner__img"
          media="(min-width: 768px)"
          srcset="/assets/images/home-banner.webp"
          alt="A family watches TV and laughs"
          width="2500"
          height="1477"
        />
        <!-- Mobile Image -->
        <source
          class="banner__img"
          media="(max-width: 767px)"
          srcset="/assets/images/home-banner-m.webp"
          alt="A family watches TV and laughs"
          width="1400"
          height="827"
        />
        <!-- Fallback Image -->
        <img
          class="banner__img"
          aria-hidden="true"
          decoding="async"
          src="/assets/images/home-banner.webp"
          alt="A family watches TV and laughs"
          width="2500"
          height="1477"
        />
      </picture>
      <div class="banner__text">
        <h1 class="banner__text-title title-global">DICAPTA</h1>
        <p class="banner__text-subtitle title-global">
          Disabilities Collaborative Organization, bringing access through the
          power of technology for all.
        </p>
      </div>
    </section>
    <section id="services" class="services">
      <h2 class="services__title">Our Services</h2>
      <div class="services__buttons-container">
        <a href="/services/multilingual-dubbing" class="services__button">
          <img
            src="/assets/images/dubbing.webp"
            alt="dubbing icon"
            class="services__button-img"
            width="153"
            height="153"
          /><span class="services__button-text">Multilingual Dubbing</span>
        </a>
        <a href="/services/audio-description" class="services__button">
          <img
            src="/assets/images/audiodescription.webp"
            alt="audio description icon"
            class="services__button-img"
            width="153"
            height="153"
          /><span class="services__button-text">Audio Description</span>
        </a>
        <a href="/services/captioning" class="services__button">
          <img
            src="/assets/images/captioning.webp"
            alt="captioning icon"
            class="services__button-img"
            width="200"
            height="200"
          /><span class="services__button-text">Captioning</span>
        </a>
        <a href="/services/consulting" class="services__button">
          <img
            src="/assets/images/consulting.webp"
            alt="consulting icon"
            class="services__button-img"
            width="153"
            height="153"
          /><span class="services__button-text">Consulting</span>
        </a>
        <a href="/services/media-production" class="services__button">
          <img
            src="/assets/images/media-production-icon.webp"
            alt="media production icon"
            class="services__button-img"
            width="250"
            height="250"
          /><span class="services__button-text">Media Production</span>
        </a>
        <a href="/projects/previous-projects" class="services__button">
          <img
            src="/assets/images/liveevents.webp"
            alt="live events icon"
            class="services__button-img"
            width="154"
            height="153"
          /><span class="services__button-text">Live Events Accessibility</span>
        </a>
      </div>
    </section>
    <section>
      <RowWithIconsAndText :elements="rowWithIconsArray" />
    </section>
    <section class="contact">
      <p class="contact__text">Let us help you reach new markets</p>
      <a class="contact__button button" href="/about/contact-us">Contact Us</a>
    </section>
    <section class="our-work">
      <h2 class="our-work__title">Our exceptional work</h2>
      <div class="our-work__content">
        <div class="our-work__element">
          <iframe
            width="300"
            height="200"
            class="our-work__iframe"
            title="Dicapta accessibility"
            src="https://www.youtube.com/embed/giFtMHZSrjg?si=c2GVQYeq_17-fUWR&amp;wmode=transparent"
            frameborder="0"
            loading="lazy"
          ></iframe>
          <p class="our-work__text">Accessibility</p>
        </div>
        <div class="our-work__element">
          <iframe
            width="300"
            height="200"
            class="our-work__iframe"
            title="Dicapta technology"
            src="https://www.youtube.com/embed/yz7WlHlS_Fw?si=5ycJWgXqlMgdgRwM&amp;amp;wmode=transparent"
            frameborder="0"
            loading="lazy"
          ></iframe>
          <p class="our-work__text">Technology</p>
        </div>
        <div class="our-work__element">
          <iframe
            width="300"
            height="200"
            class="our-work__iframe"
            title="Dicapta media services"
            src="https://www.youtube.com/embed/RaGw21RNca8?si=jaD5mXXYEh5sx09w&amp;amp;wmode=transparent"
            frameborder="0"
            loading="lazy"
          ></iframe>
          <p class="our-work__text">Media services</p>
        </div>
      </div>
    </section>
    <section class="our-partners">
      <h2 class="our-partners__title">Our partners</h2>
      <div class="our-partners__content">
        <img
          src="/assets/images/logos/frp.webp"
          alt="fred rogers productions logo"
          class="our-partners__img"
          loading="lazy"
          width="160"
          height="160"
        />
        <img
          src="/assets/images/logos/sesame-workshop.webp"
          alt="sesame workshop logo"
          class="our-partners__img"
          loading="lazy"
          width="160"
          height="160"
        />
        <img
          src="/assets/images/logos/pov.webp"
          alt="pov logo"
          class="our-partners__img"
          loading="lazy"
          width="160"
          height="160"
        />
        <img
          src="/assets/images/logos/ptk.webp"
          alt="passport to knowledge logo"
          class="our-partners__img"
          loading="lazy"
          width="160"
          height="160"
        />
        <img
          src="/assets/images/logos/wb.webp"
          alt="water bear logo"
          class="our-partners__img"
          loading="lazy"
          width="164"
          height="164"
        />
      </div>
    </section>
    <section class="why">
      <h2 class="why__title">Why choose Dicapta?</h2>
      <Carousel class="why__carousel" :autoplay="15000" :wrap-around="true">
        <Slide v-for="quote in quotes" :key="quote.person">
          <div class="why__element">
            <img
              class="why__quote-icon"
              src="/assets/images/quotes.svg"
              alt="quotation mark icon"
            />
            <p class="why__quote-text">{{ quote.text }}</p>
            <p class="why__quote-info">{{ quote.person }}</p>
            <p class="why__quote-info">{{ quote.role }}</p>
            <p class="why__quote-info">{{ quote.place }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>
    <section class="whats-new">
      <h2 class="whats-new__title">Whats new?</h2>
      <div class="whats-new__cards-section">
        <NewsCard
          title="Newsletters"
          image="assets/images/newsletter-sept.jpg"
          text="November Newsletter"
          primary-color="#257CED"
          secondary-color="#006CAC"
          test="/news/newsletters"
        />
        <NewsCard
          title="Expert Insights"
          image="assets/images/girl-and-boy-illustration.webp"
          text="Embracing diversity in audio description"
          primary-color="#006CAA"
          secondary-color="#0D5384"
          test="/resources"
        />
        <NewsCard
          title="Blog"
          image="assets/images/newsletter-sept.jpg"
          text="2024 ACB Audio Description Awards Gala Available in Spanish Again"
          primary-color="#0D5384"
          secondary-color="#0B3862"
          test="/blog"
        />
      </div>
    </section>
    <NewslettersSubscription />
  </main>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import NewslettersSubscription from "@/components/NewslettersSubscription.vue";
import NewsCard from "@/components/NewsCard.vue";

const quotes = ref([
  {
    text: "It was essential to providing accommodations in this course that we were able to work with a company willing to get creative, innovate, and share their knowledge of creating accessible digital experiences with us as we navigated a new situation.",
    person: "Julie Clemetson",
    role: "University Student Services",
    place: "Johns Hopkins University",
  },
  {
    text: "Dicapta has been a thoughtful partner who has helped us see opportunities and needs as we work to create content that is both accessible and authentic. I especially appreciate Dicapta’s focus on the Hispanic community and their willingness to provide insight into ways that we can make our content stronger to better serve our audience.",
    person: "Erin Dodson",
    role: "Director of Post-Production",
    place: "Fred Rogers Productions",
  },
  {
    text: "Dicapta was an excellent partner in creating high-quality Spanish language captions and dubbing and Described Video - both English and Spanish - for our 3-hour American Public Television series, “SEARCHING: Our Quest for Meaning in the Age of Science.” For we producers, it was a very easy relationship, and all technical aspects of the quite complex process went forward on schedule and on budget. In many decades of producing for public TV, this was one of the easiest and most successful sub-contracts.",
    person: "Geoff Haines-Stiles",
    role: "Co-Founder and CEO",
    place: "Passport to Knowledge (P2K)",
  },
  {
    text: "I use video description whenever possible, and I am so grateful for it. It allows me to see through someone else's eyes what is happening on the screen.",
    person: "Judy Mathews, MS",
    role: "CVRT, Assistive",
    place: "Technology Specialist",
  },
]);

const rowWithIconsArray = ref([
  {
    imageUrl: "assets/images/video.png",
    imageAlt: "video icon",
    title: "4000+ Hours",
    text: "ACCESSIBILITY ASSETS PRODUCED",
  },
  {
    imageUrl: "assets/images/emergingtechnologies.png",
    imageAlt: "computer and phone icon",
    title: "Emerging Technogies",
    text: "DEVELOPMENT",
  },
  {
    imageUrl: "assets/images/mutilingualexpertise.png",
    imageAlt: "chat icon",
    title: "Multilingual Expertise",
    text: "ENGLISH, SPANISH, FRENCH AND PORTUGUESE MARKET REACH",
  },
]);
</script>

<style scoped lang="scss">
main {
  font-size: $size-12;
}

.banner {
  background: radial-gradient(var(--c-gray-700), var(--c-black));
  position: relative;
  height: 500px;
  margin-bottom: $size-32;

  &__img {
    width: 100%;
    opacity: 0.8;
    height: 500px;
    object-fit: cover;
  }

  &__text {
    position: absolute;
    top: 60px;
    left: 50px;
    color: var(--c-white-soft);
    max-width: 600px;
  }

  &__text-title {
    font-size: $size-48;
    font-weight: 500;
  }

  &__text-subtitle {
    font-size: $size-24;
    font-weight: 500;
  }
}

.services {
  padding: $size-24 0;

  &__title {
    text-align: center;
    color: var(--color-text-secondary);
    font-size: $size-32;
    margin-bottom: $size-16;
  }

  &__buttons-container {
    display: flex;
    flex-direction: column;
    margin: 0 $size-48;
  }

  &__button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    flex-basis: 30%;
    margin-bottom: $size-32;
    color: var(--c-black);

    &:hover {
      font-weight: 500;
      color: var(--c-blue-500);

      img {
        transform: scale(1.05);
      }
    }
  }

  &__button-img {
    width: 80px;
    transition: 1s;
  }

  &__button-text {
    margin-left: $size-16;
    font-size: $size-16;
    text-align: left;
    color: inherit;
    font-weight: inherit;
  }
}

.contact {
  text-align: center;
  margin: $size-48;

  &__text {
    font-size: $size-24;
    margin-bottom: $size-12;
  }
}

.our-work {
  background-color: var(--c-gray-300);
  padding: $size-48 0;

  &__title {
    color: var(--c-blue-500);
    font-size: $size-32;
    text-align: center;
    margin-bottom: $size-32;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: $size-1024;
    margin: auto;
  }

  &__element {
    margin-bottom: $size-24;
  }

  &__text {
    text-align: center;
    font-size: $size-24;
  }
}

.our-partners {
  padding: $size-48 0;

  &__title {
    font-size: $size-32;
    text-align: center;
  }

  &__content {
    max-width: $size-384;
    margin: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }

  &__img {
    width: 150px;
  }
}

.why {
  background-color: var(--c-gray-300);
  padding: $size-48 0;

  &__title {
    color: var(--c-blue-500);
    font-size: $size-32;
    text-align: center;
    margin-bottom: $size-16;
  }

  &__carousel {
    max-width: $size-640;
    margin: auto;
  }

  &__element {
    max-width: $size-512;
    display: flex;
    flex-direction: column;
    border-top: 4px solid var(--c-blue-700);
    border-bottom: 4px solid var(--c-blue-700);
    padding: $size-16 $size-16 $size-24;
    position: relative;
    margin: $size-32;

    &:after,
    &:before {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:after {
      border-color: rgba(238, 238, 238, 0);
      border-top-color: #eeeeee;
      border-width: 30px;
      margin-left: -30px;
    }

    &:before {
      border-color: rgba(3, 56, 135, 0);
      border-top-color: #033887;
      border-width: 36px;
      margin-left: -36px;
    }
  }

  &__quote-icon {
    width: 80px;
  }

  &__quote-text {
    max-width: $size-384;
    text-align: left;
    margin: 0 auto $size-24;
  }

  &__quote-info {
    text-align: right;
    color: var(--c-blue-700);
  }
}

.whats-new {
  padding: $size-48 0;
  margin: auto;
  max-width: 850px;
  margin-bottom: $size-32;

  &__title {
    font-size: $size-32;
    text-align: center;
  }

  &__cards-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  &:hover,
  &:focus {
    color: var(--c-blue-500);
    background-color: transparent;
  }
}

:deep(.carousel__pagination-button) {
  padding: $size-8;
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .banner {
    &__img {
      object-position: 0 30%;
    }

    &__text {
      left: 140px;
    }

    &__text-title {
      font-size: $size-64;
    }

    &__text-subtitle {
      font-size: $size-32;
    }
  }

  .services {
    padding: $size-48 0;

    &__title {
      font-size: $size-48;
      margin-bottom: $size-48;
    }

    &__button {
      margin-bottom: $size-48;
    }

    &__buttons-container {
      flex-direction: row;
      flex-flow: wrap;
      max-width: $size-1024;
      margin: auto;
      justify-content: space-between;
    }

    &__button-img {
      width: 100px;
    }

    &__button-text {
      font-size: $size-24;
    }
  }

  .our-work {
    padding: $size-64 0;

    &__title {
      font-size: $size-48;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__element {
      margin-bottom: 0;
    }
  }

  .our-partners {
    padding: $size-64 0;

    &__title {
      font-size: $size-48;
    }

    &__content {
      max-width: $size-1024;
    }
  }

  .why {
    padding: $size-64 0;

    &__title {
      font-size: $size-48;
    }

    &__carousel {
      max-width: $size-1024;
    }

    &__element {
      max-width: $size-1024;
    }

    &__quote-text {
      font-size: $size-16;
      max-width: $size-640;
    }

    &__quote-info {
      font-size: $size-16;
    }
  }

  .whats-new {
    padding: $size-64 0;

    &__title {
      font-size: $size-48;
    }

    &__cards-section {
      flex-direction: row;
      align-items: stretch;
    }
  }
}

@media all and (min-width: $size-896) {
  .our-work {
    &__content {
      flex-direction: row;
    }
  }
}
</style>
