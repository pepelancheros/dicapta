<template>
  <main>
    <section class="banner">
      <img
        class="banner__img"
        src="@/assets/images/home-banner.jpg"
        alt="A family watches TV and laughs"
      />
      <div class="banner__text">
        <h1 class="banner__text-title">DICAPTA</h1>
        <p class="banner__text-subtitle">
          Disabilities Collaborative Organization, bringing access through the
          power of technology for all.
        </p>
      </div>
    </section>
    <section class="services">
      <h2 class="services__title">Our Services</h2>
      <div class="services__buttons-container">
        <button class="services__button">
          <img
            src="@/assets/images/dubbing.png"
            alt="dubbing icon"
            class="services__button-img"
          /><span class="services__button-text">Dubbing</span>
        </button>
        <button class="services__button">
          <img
            src="@/assets/images/audiodescription.png"
            alt="audio description icon"
            class="services__button-img"
          /><span class="services__button-text">Audio Description</span>
        </button>
        <button class="services__button">
          <img
            src="@/assets/images/consulting.png"
            alt="consulting icon"
            class="services__button-img"
          /><span class="services__button-text">Consulting</span>
        </button>
        <button class="services__button">
          <img
            src="@/assets/images/liveevents.png"
            alt="live events icon"
            class="services__button-img"
          /><span class="services__button-text">Live Events Accessibility</span>
        </button>
      </div>
      <RowWithIconsAndText :elements="rowWithIconsArray" />
    </section>
    <section class="contact">
      <p class="contact__text">Let us help you reach new markets</p>
      <button class="contact__button">Contact Us</button>
    </section>
    <section class="our-work">
      <h2 class="our-work__title">Our exceptional work</h2>
      <div class="our-work__content">
        <div class="our-work__element">
          <iframe
            width="300"
            height="200"
            title="Dicapta accessibility"
            src="https://www.youtube.com/embed/giFtMHZSrjg?si=c2GVQYeq_17-fUWR&amp;wmode=transparent"
            frameborder="0"
            class="our-work__iframe"
          ></iframe>
          <p class="our-work__text">Accessibility</p>
        </div>
        <div class="our-work__element">
          <iframe
            width="300"
            height="200"
            title="Dicapta technology"
            src="https://www.youtube.com/embed/yz7WlHlS_Fw?si=5ycJWgXqlMgdgRwM&amp;amp;wmode=transparent"
            frameborder="0"
            class="our-work__iframe"
          ></iframe>
          <p class="our-work__text">Technology</p>
        </div>
        <div class="our-work__element">
          <iframe
            width="300"
            height="200"
            title="Dicapta media services"
            src="https://www.youtube.com/embed/RaGw21RNca8?si=jaD5mXXYEh5sx09w&amp;amp;wmode=transparent"
            frameborder="0"
            class="our-work__iframe"
          ></iframe>
          <p class="our-work__text">Media services</p>
        </div>
      </div>
    </section>
    <section class="our-partners">
      <h2 class="our-partners__title">Our partners</h2>
      <div class="our-partners__content">
        <img
          src="@/assets/images/fredrogers.png"
          alt="fred rogers productions logo"
          class="our-partners__img"
        />
        <img
          src="@/assets/images/sesame.png"
          alt="sesame workshop logo"
          class="our-partners__img"
        />
        <img
          src="@/assets/images/pov.png"
          alt="pov logo"
          class="our-partners__img"
        />
        <img
          src="@/assets/images/passport.png"
          alt="passport to knowledge logo"
          class="our-partners__img"
        />
        <img
          src="@/assets/images/waterbear.png"
          alt="water bear logo"
          class="our-partners__img"
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
              src="@/assets/images/quotes.svg"
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
          image="src/assets/images/newsletter-sept.jpg"
          text="September Newsletter"
        />
        <NewsCard
          title="Expert Insights"
          image="src/assets/images/newsletter-sept.jpg"
          text="Embracing diversity in audio description"
        />
        <NewsCard
          title="Blog"
          image="src/assets/images/newsletter-sept.jpg"
          text="Ushering in a new era of accessibility"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
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
    imageUrl: "src/assets/images/emergingtechnologies.png",
    imageAlt: "video icon",
    title: "4000+ Hours",
    text: "ACCESSIBILITY ASSETS PRODUCED",
  },
  {
    imageUrl: "src/assets/images/emergingtechnologies.png",
    imageAlt: "computer and phone icon",
    title: "Emerging Technogies",
    text: "DEVELOPMENT",
  },
  {
    imageUrl: "src/assets/images/mutilingualexpertise.png",
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
    max-width: 300px;
  }

  &__text-title {
    font-size: $size-48;
    font-weight: 500;
  }

  &__text-subtitle {
    font-size: $size-16;
    font-weight: 500;
  }
}

.services {
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
    flex: 0 50%;
    margin-bottom: $size-32;
  }

  &__button-img {
    width: 100px;
  }

  &__button-text {
    margin-left: $size-16;
    font-size: $size-24;
    text-align: left;
    color: var(--c-black);
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
  padding: $size-24 0 $size-48;

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
  padding: $size-32 0;

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
  padding: $size-32 0;

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
  padding: $size-32 0;
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

::v-deep .carousel__next,
::v-deep .carousel__prev {
  &:hover {
    color: var(--c-blue-500);
    background-color: transparent;
  }
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
  }

  .services {
    &__title {
      font-size: $size-48;
    }

    &__button {
      margin-bottom: $size-48;
    }

    &__buttons-container {
      flex-direction: row;
      flex-flow: wrap;
      width: 700px;
      margin: auto;
    }

    &__button-text {
      font-size: $size-24;
    }
  }

  .our-work {
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
    &__title {
      font-size: $size-48;
    }

    &__content {
      max-width: $size-1024;
    }
  }

  .why {
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
    &__title {
      font-size: $size-48;
    }

    &__cards-section {
      flex-direction: row;
      align-items: flex-start;
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
