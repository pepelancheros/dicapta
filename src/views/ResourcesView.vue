<template>
  <main>
    <section class="banner">
      <img
        class="banner__img"
        src="@/assets/images/resources-banner.jpeg"
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
    <section class="information-sheets">
      <h2 class="information-sheets__title">Information Sheets</h2>
      <div class="information-sheets__container">
        <InformationSheetsCard
          class="information-sheets__card"
          v-for="sheet in sheets.slice(0, 3)"
          :key="sheet.id"
          :sheetId="sheet.id"
          :title="sheet.title"
          :imgUrl="sheet.imgUrl"
        />
      </div>
      <a href="/resources/information-sheets" class="button">More</a>
    </section>
    <section class="accessibility-tips">
      <h2 class="accessibility-tips__title">Accessibility Tips</h2>
      <div class="accessibility-tips__container">
        <ArticleCard
          class="accessibility-tips__card"
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
  </main>
</template>

<script setup>
import jsonSheets from "@/mocked/informationSheetsMocked.json";
import InformationSheetsCard from "@/components/InformationSheetsCard.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import Accessibilityjson from "@/mocked/accessibilityTipsMocked.json";

const sheets = jsonSheets.sheets;
const accesibilityArticles = Accessibilityjson.articles;
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

.information-sheets {
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

.accessibility-tips {
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

  .information-sheets {
    &__container {
      justify-content: space-between;
    }

    &__card {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .accessibility-tips {
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
