<template>
  <main class="tv-movie-access">
    <section class="banner">
      <img
        class="banner__img"
        src="/assets/images/tv-movie-access-banner.png"
        alt="A kid looks at a tablet with awe. "
      />
      <div class="banner__text">
        <h1 class="banner__text-title">
          <strong>Accessible Educational Media</strong> is our main contribution
        </h1>
      </div>
    </section>
    <p class="informational-text text-centered">
      Enhanced Access to Video for Students with Sensory Disabilities through
      Emerging Technology - <strong>EnhAccess</strong>
    </p>
    <section class="tv-movie-access__first-section">
      <TwoColumns>
        <template #left-column>
          <div class="tv-movie-access__contents">
            <a href="#collaboration" class="tv-movie-access__contents-element">
              <img
                src="/assets/images/ico-collaboration.png"
                alt="collaboration icon, if clicked redirects to the collaboration section in this page."
              />
              <p>Collaboration</p>
            </a>
            <a href="#distribution" class="tv-movie-access__contents-element">
              <img
                src="/assets/images/ico-distribution.png"
                alt="distribution icon, if clicked redirects to the dissemination and distribution section in this page."
              />
              <p>Dissemination & Distribution</p>
            </a>
            <a href="#production" class="tv-movie-access__contents-element">
              <img
                src="/assets/images/ico-production.png"
                alt="production icon, if clicked redirects to the production section in this page."
              />
              <p>Production</p>
            </a>
          </div>
        </template>
        <template #right-column>
          <h2 class="blue-title">TV & Movie Access</h2>
          <p>
            It is a pleasure to share our passion for using technology to
            enhance access to TV and Movies for everybody, regardless of the
            audience's sensory abilities. Technology helps us produce and
            deliver high-quality <strong>AD</strong> (audio descriptions) and
            <strong>CC</strong> (closed captions) for selected educational TV
            programs and films.
          </p>
          <p>
            This work is funded under a grant from the U.S. Department of
            Education- Office of Special Education-OSEP, project "Enhanced
            Access to Video for Students with Sensory Disabilities through
            Emerging Technology," TV Access H327C210001.
          </p>
        </template>
      </TwoColumns>
    </section>
    <section class="collaboration" id="collaboration">
      <h2 class="collaboration__title">Collaboration</h2>
      <TwoColumns>
        <template #left-column>
          <blockquote>
            <img src="/assets/images/quotes.svg" alt="" />
            <p>
              We invite Selected producers of TV/Films to review the general
              criteria for participating in our project
            </p>
          </blockquote>
          <h3>EnhAccess:</h3>
          <ul>
            <li>
              Is your content suitable to be used in a K-12 classroom setting?
            </li>
            <li>
              Are you exempt from FCC regulations regarding closed captions and
              audio description?
            </li>
            <li>
              Is your content available now, or will it be widely available in
              the U.S.?
            </li>
            <li>Do you want to reach new audiences?</li>
            <li>Are you interested in making this world accessible?</li>
          </ul>
        </template>
        <template #right-column>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gd1u42TcQnA?rel=0&amp;amp;wmode=transparent"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </template>
      </TwoColumns>
    </section>
    <section class="distribution" id="distribution">
      <h2 class="distribution__title">Dissemination & Distribution</h2>
      <TwoColumns>
        <template #left-column>
          <p>
            We partner with T.V./Film industry leaders, consumer organizations,
            educational service providers, researchers, and accessibility
            experts to ensure accessible content produced under EnhAccess
            reaches the beneficiaries.
          </p>
          <p>
            Dissemination activities include training workshops, TV campaigns
            promoting accessible content, awareness activities to educate the
            TV/Film industry on the needs of people with sensory disabilities,
            and participation in conferences, podcasts, newsletters of
            organizations, and educational events on the field.
          </p>
        </template>
        <template #right-column>
          <img
            src="/assets/images/film-festival-miami.png"
            alt="Three women stand in front of an Iberoamerican Film Festival Miami mural. A guide dog sits in front of the woman on the left."
          />
        </template>
      </TwoColumns>
      <TwoColumns>
        <template #left-column>
          <img
            src="/assets/images/couple-watching-tv.png"
            alt="A couple watches TV. Both use the All4Access app. She uses it to listen to an audio description, and he uses it to watch ASL."
          />
        </template>
        <template #right-column>
          <h3>Distribution of Accessibility Assets</h3>
          <p>
            <strong>AD</strong> and <strong>CC</strong> created under EnhAccess
            are delivered on the platforms where our partners are presenting
            their content.
          </p>
          <p>When approved by our content partner:</p>
          <ul>
            <li>
              The accessible content will be available at the Described and
              Captioned Media Program (DCMP).
            </li>
            <li>
              The accessibility assets will be available through the
              “All4Access” Clearinghouse.
            </li>
          </ul>
        </template>
      </TwoColumns>
    </section>
    <section class="production" id="production">
      <h2 class="production__title">New Accessible Programming</h2>
      <div class="production__cards-container">
        <TvAndMovieAccessCard
          v-for="card in cards"
          class="production__card"
          :key="card.id"
          :title="card.title"
          :text="card.text"
          :imgUrl="card.imgUrl"
          :videoLink="card.videoLink"
          :videoTitle="card.videoTitle"
          :playlistLink="card.playlistLink"
          :enterpriseLink="card.enterpriseLink"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import TwoColumns from "@/components/TwoColumns.vue";
import TvAndMovieAccessCard from "@/components/TvAndMovieAccessCard.vue";
import cardsContent from "@/mocked/tvMovieAccessCardsMocked.json";

const cards = cardsContent.cards;
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
    object-position: 70% 0;
  }

  &__text {
    position: absolute;
    top: 90px;
    left: 50px;
    color: var(--c-white-soft);
    max-width: 700px;
  }

  &__text-title {
    font-size: $size-48;
    font-weight: 500;
    line-height: 1.2;
  }
}

.informational-text {
  font-size: $size-16;
  max-width: $size-1280;
  margin: auto;
  padding: 0 $size-16;
}

.tv-movie-access {
  &__contents {
    background: var(--c-blue-800);
    padding: $size-32 $size-16;
    display: flex;
    justify-content: space-between;
  }

  &__contents-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30%;

    img {
      max-width: 60px;
      transition: 0.5s;
    }

    p {
      color: var(--c-white);
      font-weight: 500;
      text-align: center;
      font-size: $size-12;
    }

    &:hover {
      img {
        transform: scale(0.9, 0.9) rotate(2deg);
      }
    }
  }

  &__first-section {
    background-color: var(--c-gray-300);
    margin: $size-48 0;
    padding: $size-32 0;
  }

  .collaboration {
    padding: $size-64 0;

    &__title {
      font-size: $size-48;
      text-align: center;
    }

    h3 {
      font-weight: 600;
      font-size: $size-24;
      color: var(--c-blue-500);
    }
  }

  blockquote {
    display: flex;
    margin-bottom: $size-8;

    img {
      width: 50px;
      align-self: flex-start;
    }

    p {
      padding: $size-12 0 0 $size-4;
      font-weight: 500;
      font-style: italic;
    }
  }

  .distribution {
    padding: $size-64 0;
    background-color: var(--c-gray-300);

    &__title {
      font-size: $size-48;
      text-align: center;
    }
  }

  .production {
    padding: $size-64 0;

    &__title {
      font-size: $size-48;
      text-align: center;
    }

    &__cards-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: $size-1280;
      margin: auto;
      padding: $size-48 $size-32;
    }
  }

  h2 {
    line-height: 3rem;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .banner {
    &__img {
      object-position: 0 30%;
    }

    &__text {
      top: 120px;
      left: 140px;
    }

    &__text-title {
      font-size: $size-64;
    }
  }

  .informational-text {
    font-size: $size-24;
  }

  .tv-movie-access {
    &__contents-element {
      img {
        max-width: 100px;
      }

      p {
        font-size: $size-16;
      }
    }
  }
  .production {
    &__card {
      max-width: 47%;
    }
  }
}
</style>
