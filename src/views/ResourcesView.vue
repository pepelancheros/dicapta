<template>
  <main id="main" v-if="isParent">
    <section class="banner">
      <img
        class="banner__img"
        src="/assets/images/resources-banner.webp"
        alt="A child looking through a fence."
        width="1024"
        height="768"
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
          <img
            src="/assets/images/shutterstock.webp"
            alt=""
            loading="lazy"
            width="800"
            height="534"
          />
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
          <a href="/resources/case-study-article">Read More</a>
        </div>
      </div>
    </section>
    <section class="accessibility-tips-section">
      <h2 class="accessibility-tips-section__title">White Papers</h2>
      <div class="accessibility-tips-section__container">
        <div class="mocked-card">
          <img
            src="/assets/images/girl-and-boy-illustration.webp"
            alt="Two illustrations in one image: Image on the left. A young girl with light brown skin and long, dark, curly hair sits at a desk, reading a large book. She wears a bright yellow dress adorned with a sunflower pattern. Her eyes sparkle. The room is warmly illuminated, featuring a globe, a telescope, and posters in the background. Image on the right. A boy with dark brown skin and short, tightly coiled hair operates a toy car outside. He sports a red hoodie paired with blue jeans. He smiles. In the background are other children. A playground is in the distance."
            loading="lazy"
            width="468"
            height="468"
          />
          <h3>
            Embracing Diversity in Audio Description: A Paradigm Shift for
            Inclusivity
          </h3>
          <p>
            This white paper explores the evolving paradigm in audio
            description, emphasizing including racial and ethnic characteristics
            when describing individuals/people in media.
          </p>
          <a href="/resources/white-paper-article">Read More</a>
        </div>
      </div>
    </section>
    <NewslettersSubscription />
  </main>
  <RouterView v-else />
</template>

<script setup>
import jsonSheets from "@/mocked/informationSheetsMocked.json";
import GenericCard from "@/components/GenericCard.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import NewslettersSubscription from "@/components/NewslettersSubscription.vue";
import Accessibilityjson from "@/mocked/accessibilityTipsMocked.json";
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const sheets = jsonSheets.sheets;
const accesibilityArticles = Accessibilityjson.articles;
const route = useRoute();
const isParent = computed(() => route.fullPath === "/resources");
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
    max-width: 900px;
    text-shadow: #000000 1px 1px 2px;
    font-size: $size-48;
    line-height: 1.2;
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

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .banner {
    &__img {
      object-position: 0 30%;
    }

    &__text {
      left: 140px;
      font-size: $size-64;
    }

    &__text-title {
      font-size: $size-64;
    }

    &__text-subtitle {
      font-size: $size-32;
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
}
</style>
