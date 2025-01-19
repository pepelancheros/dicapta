<template>
  <main id="main" class="media-production">
    <h1 class="media-production__title">Media production</h1>
    <p class="media-production__subtitle">
      Services and Resources for People with Disabilities
    </p>
    <TwoColumns>
      <template #left-column>
        <img
          src="/assets/images/media-production.webp"
          alt="A man holds a professional camera."
          width="250"
          height="250"
        />
        <a class="button" href="/about/contact-us">Contact Us</a>
      </template>
      <template #right-column>
        <h3>
          A talented team of filmmakers, producers, and a production and
          post-production infrastructure are ready to support your next media
          project.
        </h3>
        <p>
          In addition to scripting and producing proprietary content for
          education, dissemination, and training purposes, Dicapta offers its
          accessibility and media expertise to support creating media content
          focused on disability issues.
        </p>
        <p>
          Dicapta has collaborated with organizations such as the Center on
          Technology and Disability – CDT, The Smith-Kettlewell Video
          Description Research and Development Center, and The Family Center on
          Technology and Disability- FCTD, among others, to produce high-quality
          content looking to create greater awareness and serve the community.
          Visit our YouTube channel to see a playlist of some of our
          productions.
        </p>
      </template>
    </TwoColumns>
    <div class="gray-background spacing">
      <TwoColumns>
        <template #left-column>
          <div class="text-centered">
            <iframe
              height="200"
              src="https://www.youtube.com/embed/5CBiDSiiE8U?wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
            <h2>Isabel necesita Tecnología de Asistencia</h2>
            <p>SPANISH</p>
          </div>
        </template>
        <template #right-column>
          <div class="text-centered">
            <iframe
              height="200"
              src="https://www.youtube.com/embed/0HYBrnGgoUM?wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
            <h2>A Teacher's View</h2>
            <p>ENGLISH</p>
          </div>
        </template>
      </TwoColumns>
    </div>
    <div class="spacing">
      <TwoColumns>
        <template #left-column>
          <div class="text-centered">
            <iframe
              height="200"
              src="https://www.youtube.com/embed/AZvdGSr7roA?wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              loading="lazy"
            ></iframe>
            <h2>Lección de Descripción</h2>
            <p>SPANISH</p>
          </div>
        </template>
        <template #right-column>
          <div class="text-centered">
            <iframe
              height="200"
              src="https://www.youtube.com/embed/kckxSsCiaB4?wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              loading="lazy"
            ></iframe>
            <h2>Description Tutorial</h2>
            <p>ENGLISH</p>
          </div>
        </template>
      </TwoColumns>
    </div>
    <div class="gray-background spacing">
      <TwoColumns>
        <template #left-column>
          <div class="text-centered">
            <iframe
              height="200"
              src="https://www.youtube.com/embed/wTkPkB8VzVw?wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              loading="lazy"
            ></iframe>
            <h2>PSA "Activa el CC"</h2>
            <p>SPANISH</p>
          </div>
        </template>
        <template #right-column>
          <div class="text-centered">
            <iframe
              height="200"
              src="https://www.youtube.com/embed/KTN2Jpr_LUE?wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              loading="lazy"
            ></iframe>
            <h2>PSA "Describe so that we all can see"</h2>
            <p>ENGLISH</p>
          </div>
        </template>
      </TwoColumns>
    </div>
  </main>
</template>

<script setup>
import TwoColumns from "@/components/TwoColumns.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: "Dicapta | Media Production Services for Accessible Content",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Create accessible media with ease. From concept to post-production, Dicapta’s expert team delivers engaging videos that ensure your content reaches all audiences. Contact us!",
    },
  ],
})
</script>

<style scoped lang="scss">
.media-production {
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

  .button {
    margin: auto;
    display: flex;
    width: fit-content;
  }
}

.gray-background {
  background-color: var(--c-gray-300);
}

.spacing {
  padding-top: $size-24;
  padding-bottom: $size-16;
}

iframe {
  width: 300px;
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .media-production {
    &__title {
      margin-top: $size-192;
    }
  }

  .spacing {
    padding-top: $size-48;
    padding-bottom: $size-32;
  }

  iframe {
    width: 360px;
  }
}
</style>
