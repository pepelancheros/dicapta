<template>
  <main>
    <section class="banner">
      <img
        class="banner__img"
        src="@/assets/images/consulting-banner.png"
        alt="Conference room. A woman holds a phone that shows the All4Access app."
      />
      <p class="banner__text title-global">
        Creating more inclusive environments
      </p>
    </section>
    <section>
      <h1 class="title">Sensitivity Training and Workshops</h1>
      <p class="subtitle">
        Empowering organizations to foster a more inclusive environment for
        individuals with sensory disabilities.
      </p>
      <RowWithIconsAndText class="row-element" :elements="rowWithIconsArray" />
      <TwoColumns>
        <template #left-column>
          <h2>
            Our workshops are designed to educate your team on inclusion and
            foster good customer service for people with disabilities.
          </h2>
          <p>
            Our services will expand the knowledge of your employees to equip
            them with a comprehensive understanding of diverse perspectives.
          </p>
          <ul>
            <li>
              Promote and cultivate an environment of respect and empathy in the
              workplace.
            </li>
            <li>
              Improve interaction with people with disabilities, whether they're
              customers or employees.
            </li>
            <li>
              Understand the needs of people with disabilities to offer good
              interaction and customer service.
            </li>
            <li>
              Provide a welcoming and open environment for people with
              disabilities to join the team.
            </li>
          </ul>
        </template>
        <template #right-column>
          <img
            src="@/assets/images/consulting-workshops.png"
            alt="reunion of multiple people of different ages in a workshop."
          />
        </template>
      </TwoColumns>
      <TwoColumns>
        <template #left-column>
          <img
            src="@/assets/images/consulting-ada.png"
            alt="reunion of multiple people from the ADA (Americans with Disabilities)"
          />
        </template>
        <template #right-column>
          <h2>
            As part of your DEI efforts, it’s crucial to include accessibility
            beyond basic ADA compliance.
          </h2>
          <p>
            Our services will expand the knowledge of your employees to equip
            them with a better understanding of diverse perspectives.
          </p>
          <ul>
            <li>
              The Americans with Disabilities Act (ADA) does not have specific
              requirements for training, but it does require employers to
              provide reasonable accommodations to employees with disabilities,
              unless doing so would pose an undue hardship.
            </li>
            <li>
              Employers are required to provide reasonable accommodation only
              for the physical or mental limitations of a qualified individual
              with a disability of which they are aware. Generally, it is the
              responsibility of the employee to inform the employer that an
              accommodation is needed.
            </li>
          </ul>
        </template>
      </TwoColumns>
      <button class="contact-button">contact us</button>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumns from "@/components/TwoColumns.vue";

const rowWithIconsArray = ref([
  {
    imageUrl: "/src/assets/images/consulting-tailored-icon.png",
    imageAlt: "an icon of a ruler and a pencil",
    title: "Tailor-Made",
    text: "Our programs are tailor-made to support your specific goals.",
  },
  {
    imageUrl: "/src/assets/images/consulting-on-site-icon.png",
    imageAlt: "icon of a person doing a presentation",
    title: "On-Site",
    text: "Your staff will receive on-site training to optimize their work time.",
  },
  {
    imageUrl: "/src/assets/images/consulting-blind.png",
    imageAlt: "icon of a blind person",
    title: "Team-Members with disabilities",
    text: "Improve your staff’s empathy by working face-to-face with team-members with disabilities.",
  },
]);
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
    top: 100px;
    left: 30px;
    color: var(--c-white-soft);
    max-width: 700px;
    font-size: $size-48;
  }
}

.title {
  font-size: $size-48;
  text-align: center;
  font-weight: 600;
}

.subtitle {
  text-align: center;
  font-size: $size-16;
  margin-bottom: $size-48;
}

.row-element {
  margin-bottom: $size-48;
}

.contact-button {
  display: flex;
  margin: auto;
  margin-bottom: $size-64;
  margin-top: $size-24;
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .banner {
    &__text {
      left: 140px;
      font-size: $size-64;
    }
  }
}
</style>
