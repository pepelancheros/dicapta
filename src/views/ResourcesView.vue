<template>
  <main v-if="isParent">
    <section class="banner">
      <img
        class="banner__img"
        src="/assets/images/resources-banner.jpeg"
        alt="A child looking through a fence."
      />
      <div class="banner__text">
        <h1 class="banner__text-title">DICAPTA Resources</h1>
        <p class="banner__text-subtitle">
          Be in the know on the latest information and news about Dicapta and
          the industry.
        </p>
      </div>
    </section>
    <p class="informational-text">
      Dicapta Resources provides everything you need to be informed about
      Dicapta and the industry. We provide timely blog posts, white papers, case
      studies, information sheets.
    </p>
    <section class="information-sheets-section">
      <h2 class="information-sheets-section__title">Information Sheets</h2>
      <div class="information-sheets-section__container">
        <GenericCard
          class="information-sheets-section__card"
          v-for="sheet in sheets.slice(0, 3)"
          :key="sheet.id"
          :href="`/resources/information-sheets/${sheet.id}`"
          :title="sheet.title"
          :imgUrl="sheet.imgUrl"
        />
      </div>
      <a href="/resources/information-sheets" class="button">More</a>
    </section>
    <section class="accessibility-tips-section">
      <h2 class="accessibility-tips-section__title">Accessibility Tips</h2>
      <div class="accessibility-tips-section__container">
        <ArticleCard
          class="accessibility-tips-section__card"
          v-for="article in accesibilityArticles.slice(0, 3)"
          :key="article.id"
          :title="article.title"
          :imgUrl="article.imgUrl"
          :imgAlt="article.imgAlt"
          :publishDate="article.publishDate"
          :link="`/resources/accessibility-tips/${article.id}`"
        />
      </div>
      <a href="/resources/accessibility-tips" class="button">More</a>
    </section>
    <section class="accessibility-tips-section">
      <h2 class="accessibility-tips-section__title">Case Studies</h2>
      <div class="accessibility-tips-section__container">
        <div class="mocked-card">
          <img src="/assets/images/shutterstock.jpg" alt="" />
          <h3>
            Empowering Accessibility: How All4Access Technology Transformed
            Access for a Blind Student at Johns Hopkins
          </h3>
          <p>
            A blind Johns Hopkins student was taking a Turkish culture class,
            but she could not access the course's video materials. Thanks to the
            use of Dicapta's All4Access technology, the student received the
            necessary tools to access the material and be on equal footing with
            her classmates.
          </p>
          <a href="/resources/case-study">Read More</a>
        </div>
      </div>
    </section>
    <section class="accessibility-tips-section">
      <h2 class="accessibility-tips-section__title">White Papers</h2>
      <div class="accessibility-tips-section__container">
        <div class="mocked-card">
          <img src="/assets/images/girl-and-boy-illustration.png" alt="" />
          <h3>
            Embracing Diversity in Audio Description: A Paradigm Shift for
            Inclusivity
          </h3>
          <p>
            This white paper explores the evolving paradigm in audio
            description, emphasizing including racial and ethnic characteristics
            when describing individuals/people in media.
          </p>
          <a href="/resources/white-paper">Read More</a>
        </div>
      </div>
    </section>
    <section class="newsletters">
      <h2 class="newsletters__title">Subscribe to our newsletter</h2>
      <form @submit.prevent="subscribeEmailToNewsletter">
        <label class="label-hidden" for="email">Email</label>
        <input
          class="newsletters__input"
          v-model="email"
          aria-label="Email"
          type="text"
          id="email"
          placeholder="Email"
        />
        <input
          class="button newsletters__button"
          type="submit"
          value="Subscribe"
        />
      </form>
    </section>
  </main>
  <RouterView v-else />
</template>

<script setup>
import jsonSheets from "@/mocked/informationSheetsMocked.json";
import GenericCard from "@/components/GenericCard.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import Accessibilityjson from "@/mocked/accessibilityTipsMocked.json";
import { RouterView, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { AddNewslettersSubscription } from "@/api/api.js";

const sheets = jsonSheets.sheets;
const accesibilityArticles = Accessibilityjson.articles;
const route = useRoute();
const isParent = computed(() => route.fullPath === "/resources");
const email = ref("");

async function subscribeEmailToNewsletter() {
  try {
    await AddNewslettersSubscription(email.value);
    window.alert(email.value + " Subscribed!");
  } catch (error) {
    window.alert(
      "Error subscribing: " +
        email.value +
        " please make sure you entered a valid email address."
    );
  } finally {
    email.value = "";
  }
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  height: 500px;
  margin-bottom: $size-32;

  &__img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  &__text {
    position: absolute;
    top: 90px;
    left: 50px;
    color: var(--c-white-soft);
    max-width: 800px;
    text-shadow: #000000 1px 1px 2px;
    font-size: $size-48;
  }

  &__text-subtitle {
    font-size: $size-24;
  }
}

.informational-text {
  font-size: $size-16;
  max-width: $size-1024;
  margin: auto;
  padding: 0 $size-16;
  margin-bottom: $size-48;
}

.information-sheets-section {
  max-width: $size-1024;
  margin: auto;
  padding: 0 $size-16;
  margin-bottom: $size-64;

  &__title {
    font-size: $size-48;
    margin: auto;
    font-weight: 500;
    border-bottom: 4px solid var(--c-blue-500);
    margin-bottom: $size-32;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    margin-left: $size-24;
    margin-right: $size-24;
  }
}

.accessibility-tips-section {
  max-width: $size-1024;
  margin: auto;
  padding: 0 $size-16;
  margin-bottom: $size-64;

  &__title {
    font-size: $size-48;
    margin: auto;
    font-weight: 500;
    border-bottom: 4px solid var(--c-blue-500);
    margin-bottom: $size-32;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    margin-left: $size-24;
    margin-right: $size-24;
  }
}

.mocked-card {
  max-width: 400px;

  img {
    width: 100%;
  }

  p {
    margin-bottom: $size-12;
  }

  a {
    padding-left: 0;
    font-size: $size-16;

    &:hover {
      color: var(--c-blue-300);
    }
  }
}

.newsletters {
  background-color: var(--c-gray-300);
  padding: $size-48 0;

  &__title {
    font-size: $size-32;
    text-align: center;
    margin-bottom: $size-16;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__input {
    padding: $size-12 $size-16;
    border: none;
    border-radius: $size-16;
    margin-bottom: $size-24;
    margin: 0 $size-12 $size-24;
  }

  &__button {
    margin: 0 $size-12;
  }
}

.label-hidden {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
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

  .information-sheets-section {
    &__container {
      justify-content: space-between;
    }

    &__card {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .accessibility-tips-section {
    &__container {
      justify-content: space-between;
    }

    &__card {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .newsletters {
    form {
      flex-direction: row;
    }
    &__input {
      margin-bottom: 0;
      min-width: 300px;
    }
  }
}
</style>
