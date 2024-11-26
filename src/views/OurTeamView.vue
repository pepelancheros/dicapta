<template>
  <main id="main" class="our-team">
    <div class="banner">
      <picture>
        <!-- Desktop Image -->
        <source
          class="banner__img"
          media="(min-width: 768px)"
          srcset="/assets/images/our-team-banner.webp"
          alt="On the blue water, 4 people row in sync in a long, thin boat."
          width="2500"
          height="703"
        />
        <!-- Mobile Image -->
        <source
          class="banner__img"
          media="(max-width: 767px)"
          srcset="/assets/images/our-team-banner-m.webp"
          alt="On the blue water, 4 people row in sync in a long, thin boat."
          width="1400"
          height="394"
        />
        <!-- Fallback Image -->
        <img
          class="banner__img"
          aria-hidden="true"
          decoding="async"
          src="/assets/images/our-team-banner.webp"
          alt="On the blue water, 4 people row in sync in a long, thin boat."
          width="2500"
          height="703"
        />
      </picture>
    </div>
    <div class="our-team__content">
      <section class="our-team__section">
        <h1>Our Team</h1>
        <p>
          Dicapta gathers together a diverse group of people with different
          cultural backgrounds, language, opinions and beliefs driven by the
          common goal of making the world accessible/ spreading accessibility
          everywhere.
        </p>
        <p>
          Our collaborators include a leadership team, production team, and a
          unique Advisory Group of people with disabilities, educators, parents,
          media experts, service providers, and accessibility experts.
        </p>
        <p>
          The work with this diverse and committed team guarantees the high
          quality of our products and services.
        </p>
      </section>
      <section class="our-team__section">
        <h2>Leadership Team</h2>
        <div class="our-team__members-container">
          <div
            v-for="member in leadershipTeam"
            :key="member.id"
            class="our-team__element"
          >
            <img
              class="our-team__member-image"
              :src="member.photo"
              alt="picture of a team member"
            />
            <p class="our-team__member-name">{{ member.name }}</p>
          </div>
        </div>
      </section>
      <section class="our-team__section">
        <h2>Production Team</h2>
        <div class="our-team__members-container">
          <div
            v-for="member in productionTeam"
            :key="member.id"
            class="our-team__element"
          >
            <img
              class="our-team__member-image"
              :src="member.photo"
              alt="picture of a team member"
            />
            <p class="our-team__member-name">{{ member.name }}</p>
          </div>
        </div>
      </section>
      <section class="our-team__section">
        <h2>Advisory Group</h2>
        <div class="our-team__members-container">
          <div
            v-for="member in advisoryGroup"
            :key="member.id"
            class="our-team__element"
          >
            <img
              class="our-team__member-image"
              :src="member.photo"
              alt="picture of a team member"
            />
            <p class="our-team__member-name">{{ member.name }}</p>
          </div>
        </div>
      </section>
      <section class="our-team__section">
        <h2>Program Officer</h2>
        <div class="our-team__members-container">
          <div class="our-team__element">
            <img
              class="our-team__member-image"
              src="/assets/images/team/avatar.png"
              alt="picture of a team member"
            />
            <p class="our-team__member-name">Eric Carusso</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import leadership from "@/mocked/leadershipTeamMocked.json";
import production from "@/mocked/productionTeamMocked.json";
import advisory from "@/mocked/advisoryGroupMocked.json";

const leadershipTeam = leadership.team;
const productionTeam = production.team;
const advisoryGroup = advisory.team;
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
    object-position: 43% 0;
  }
}

.our-team {
  &__content {
    max-width: $size-1024;
    margin: auto;

    h1 {
      text-align: center;
      font-size: $size-48;
      font-weight: 500;
    }

    h2 {
      text-align: center;
      font-size: $size-32;
      color: var(--c-blue-500);
      margin-bottom: $size-24;
    }

    p {
      margin-bottom: $size-16;
      padding: 0 $size-16;
    }
  }

  &__members-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__element {
    width: fit-content;
    padding: 0 $size-24;
    margin: auto;
    margin-bottom: $size-24;
  }

  &__member-image {
    width: 200px;
    border-radius: 50%;
    padding: $size-12;
    box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
  }

  &__member-name {
    margin-top: $size-12;
    text-align: center;
  }

  &__section {
    margin-bottom: $size-64;
  }
}
</style>
