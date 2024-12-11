<template>
  <main id="main">
    <section>
      <h1 class="title">Consulting</h1>
      <p class="subtitle">
        Empowering organizations to foster a more inclusive environment for
        individuals with sensory disabilities.
      </p>
      <RowWithIconsAndText class="row-element" :elements="rowWithIconsArray" />
      <TwoColumns>
        <template #left-column>
          <h3>
            Our workshops are designed to educate your team on inclusion and
            foster good customer service for people with disabilities.
          </h3>
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
            src="/assets/images/consulting-workshops.webp"
            alt="reunion of multiple people of different ages in a workshop."
            width="900"
            height="600"
          />
        </template>
      </TwoColumns>
      <TwoColumns>
        <template #left-column>
          <img
            src="/assets/images/consulting-ada.webp"
            alt="reunion of multiple people from the ADA (Americans with Disabilities)"
            loading="lazy"
            width="900"
            height="600"
          />
        </template>
        <template #right-column>
          <h3>
            As part of your DEI efforts, it’s crucial to include accessibility
            beyond basic ADA compliance.
          </h3>
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
      <a class="contact-button button" href="/about/contact-us">Contact Us</a>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumns from "@/components/TwoColumns.vue";

const rowWithIconsArray = ref([
  {
    imageUrl: "/assets/images/consulting-tailored-icon.png",
    imageAlt: "an icon of a ruler and a pencil",
    title: "Tailor-Made",
    text: "Our programs are tailor-made to support your specific goals.",
  },
  {
    imageUrl: "/assets/images/consulting-on-site-icon.png",
    imageAlt: "icon of a person doing a presentation",
    title: "On-Site",
    text: "Your staff will receive on-site training to optimize their work time.",
  },
  {
    imageUrl: "/assets/images/consulting-blind.png",
    imageAlt: "icon of a blind person",
    title: "Team-Members with disabilities",
    text: "Improve your staff’s empathy by working face-to-face with team-members with disabilities.",
  },
]);
</script>

<style scoped lang="scss">
.title {
  font-size: $size-48;
  font-weight: 500;
  text-align: center;
  margin-top: $size-96;
  padding: 0 $size-16;
}

.subtitle {
  text-align: center;
  margin-bottom: $size-24;
  padding: 0 $size-16;
}

.row-element {
  margin-bottom: $size-48;
}

.contact-button {
  display: flex;
  margin: auto;
  margin-bottom: $size-64;
  margin-top: $size-24;
  width: fit-content;
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .title {
    margin-top: $size-192;
  }
}
</style>
