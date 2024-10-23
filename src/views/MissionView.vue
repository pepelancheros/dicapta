<template>
  <main>
    <section class="banner">
      <img
        class="banner__img"
        src="/assets/images/mission-banner.jpg"
        alt="A family watches TV and laughs"
      />
      <h1 class="banner__text">
        <strong>Accessibility</strong> is our passion
      </h1>
    </section>
    <section class="mission">
      <TwoColumnTextAndImage
        title="Our mission"
        buttonText="Meet our team"
        imageUrl="/assets/images/keyboard-accessibility.png"
        imageAlt="A finger touches a keyboard key labeled Accessibility"
        imageText="Disabilities Collaborative organization bringing Access through the
            Power of Technology for All DICAPTA"
      >
        <p>
          By developing accessible communications for everyone regardless of
          their abilities, Dicapta focuses on ensuring that media,
          entertainment, and culture are widely available and accessible for
          people with sensory disabilities, and Latinos in the U.S.
        </p>
        <p>
          Since 2005, we at Dicapta have been proudly honored with grants from
          the United States Department of Education and the United States
          Department of Health and Human Services.
        </p>
      </TwoColumnTextAndImage>
    </section>
    <section class="latino">
      <TwoColumnTextAndImage
        title="Latino"
        imageUrl="/assets/images/latino.png"
        imageAlt="A diverse group of young people pump their fists in joy"
        imageText="Latino is our native language"
        :imageFirst="true"
      >
        <p>
          "The U.S. Latino population reached 62.1 million in 2020, up from 50.5
          million in 2010." Pew Research Center, 2021.
        </p>
        <p>
          Considering that in 2020 Latinos were the 19% of the U.S. population
          and that the incidence of disabilities in this community is increasing
          faster than in other races, we at Dicapta concentrate our efforts on
          serving the specific needs of Latinos with disabilities.
        </p>
        <p>
          Additional information: Latinos4Access, In My Own Words, Facts about
          Latinos in the U.S., Profile of Latinos with disabilities, Hispanic
          children with disabilities.
        </p>
      </TwoColumnTextAndImage>
    </section>
    <section class="technology">
      <TwoColumnTextAndImage
        title="Technology"
        imageUrl="/assets/images/hands-connection.png"
        imageAlt="Illustration. Two hands, made of bright blue lines, touch a sphere with the word connection.The sphere lights up at the points where the fingertips touch it."
        imageText="Technology is our strength"
      >
        <p>
          "The U.S. Latino population reached 62.1 million in 2020, up from 50.5
          million in 2010." Pew Research Center, 2021.
        </p>
        <p>
          Since its creation and continuously, Dicapta has focused its efforts
          on developing technological tools that allow the creation of
          accessibility elements more effectively and efficiently to guarantee
          access to education, culture, and information for people with sensory
          disabilities.
        </p>
        <p>
          To <a href="/ver2022/technology">learn more</a> visit our Technology
          section.
        </p>
      </TwoColumnTextAndImage>
    </section>
    <section class="accessibility">
      <TwoColumnTextAndImage
        title="Accessibility"
        imageUrl="/assets/images/braile-computer.png"
        imageAlt="A man uses a braille display next to a computer keyboard on a desk."
        imageText="Accessibility is our passion"
        :imageFirst="true"
      >
        <p>
          "The U.S. Latino population reached 62.1 million in 2020, up from 50.5
          million in 2010." Pew Research Center, 2021.
        </p>
        <p>
          For us, accessibility is how usable a product, service, media piece,
          educational tool, website, and cultural or entertainment activity is
          by people with disabilities.
        </p>
        <p>
          Accessibility is a meaningful word that invites us to think about
          inclusion and equality.
        </p>
      </TwoColumnTextAndImage>
    </section>
    <section class="beneficiaries">
      <TwoColumnTextAndImage
        title="Our beneficiaries"
        imageUrl="/assets/images/boy-headset.png"
        imageAlt="A blind boy listens to something with headphones on."
        imageText="Students with sensory disabilities are the main beneficiaries of our efforts"
      >
        <p>
          Dicapta’s efforts look to serve people with sensory disabilities-
          including those identified as DeafBlind.
        </p>
        <p>
          Some facts about the community we serve are available following the
          links:
          <a href="/ver2022/images/docs/Blindnes_in_the_USA_05112022.pdf"
            >Visual disabilities in the U.S</a
          >.,
          <a href="/ver2022/images/docs/Deafness_in_the_USA_05112022.pdf"
            >Hearing disabilities in the US</a
          >,
          <a
            href="/ver2022/images/docs/Sensory_disabilities_in_the_USA_05112022.pdf"
            >Students with sensory disabilities in the U.S</a
          >.,&nbsp;and
          <a href="/ver2022/images/docs/DeafBlindness_in_the_USA_04292022.pdf"
            >DeafBlindness in the U.S</a
          >.
        </p>
        <p>
          For information about Latinos with disabilities,
          <a
            href="/ver2022/images/site/mission/Latinos_with_disabilities_in_the_US.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Latinos with disabilities in the US"
            >click here</a
          >.
        </p>
      </TwoColumnTextAndImage>
    </section>
    <button class="contact-us-button">Let's keep in touch. Contact Us!</button>
  </main>
</template>

<script setup>
import TwoColumnTextAndImage from "@/components/TwoColumnTextAndImage.vue";
</script>

<style scoped lang="scss">
.banner {
  background: radial-gradient(var(--c-gray-700), #000000);
  position: relative;
  height: 500px;

  &__img {
    width: 100%;
    opacity: 0.7;
    height: 500px;
    object-fit: cover;
  }

  &__text {
    position: absolute;
    top: 100px;
    left: 30px;
    color: var(--c-white-soft);
    max-width: 550px;
    font-size: $size-48;
  }
}

.mission {
  background-color: var(--c-gray-300);
}

.technology {
  background-color: var(--c-gray-300);
}

.beneficiaries {
  background-color: var(--c-gray-300);
}

.contact-us-button {
  width: 100%;
  border-radius: 0;
  padding: $size-24;
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
