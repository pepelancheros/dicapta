<template>
  <main>
    <section class="banner">
      <img
        class="banner__img"
        src="/assets/images/all4access-banner.webp"
        alt="Several colorful ropes bind together in a circle."
      />
      <p class="banner__text title-global">
        All4Access is our vehicle to make the difference
      </p>
    </section>
    <section>
      <TwoColumns>
        <template #left-column>
          <div>
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/mGMzHvc6A8s?rel=0&amp;amp;wmode=transparent"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
            <p>
              <a
                href="https://all4access.com"
                target="_blank"
                rel="noopener noreferrer"
                >All4Access </a
              >ensures that all the assets produced by Dicapta under EnhAccess
              are available for children with sensory disabilities or anyone
              else that may benefit from accessibility assets, everywhere,
              anytime.
            </p>
            <p>
              <small
                >The All4Access clearinghouse is funded in part by the
                Department of Education, Office of Special Education under their
                Television Access Program.</small
              >
            </p>
          </div>
        </template>
        <template #right-column>
          <p>
            All4Access is a universal clearinghouse of accessibility assets that
            facilitates its exchange while protecting the rights of media
            creators.&nbsp;By having the <strong>AD</strong> (audio
            descriptions),&nbsp;<strong>CC</strong> (closed captions),
            subtitles, or&nbsp;<strong>ASL</strong> (American Sign Language)
            version of your content in All4Access:
          </p>
          <ul>
            <li>
              Your assets will be in the cloud protected and available for you
              at any time.
            </li>
            <li>
              You can participate in any screening with the confidence of having
              your content accessible to audiences with disabilities or other
              audiences that may use the assets stored in the All4Access
              repository, using the All4ccess application, or any other app
              connected to the repository.
            </li>
            <li>
              Your content will be accessible regardless of where or how your
              audience is watching it.
            </li>
            <li>
              You contribute with your example to building an inclusive, equal,
              and diverse world for all of us.
            </li>
          </ul>
          <br />
          <blockquote>
            <div style="font-size: 1.5em">
              Let's make media<a
                href="https://www.all4access.com"
                target="_blank"
                rel="noopener noreferrer"
                ><span style="color: #0257bf; font-size: 1.5em"
                  ><strong> accessible</strong></span
                ></a
              >
              together!
            </div>
          </blockquote>
        </template>
      </TwoColumns>
    </section>
    <section>
      <RowWithIconsAndText class="row-element" :elements="rowWithIconsArray" />
      <TwoColumns>
        <template #left-column>
          <h3>
            The <a href="https://all4access.com">All4Access</a> clearinghouse
            aims to increase access using technology.
          </h3>
          <p>
            The clearinghouse can store and share different types of
            accessibility elements, such as captions, audio description, and
            ASL. It makes it easier to reuse accessibility, minimizing costs for
            audiovisual content owners and increasing access for content users.
            The accessibility in the All4Access clearinghouse can be
            synchronized with media content anytime, anywhere, by anyone who
            needs it.
          </p>
        </template>
        <template #right-column>
          <img
            src="/assets/images/technology-illustration.webp"
            alt="Illustration. Center: 4 connectors point down from a cloud, underneath, 3 hands hold phones with the All4Access logo. Sides: 4 people look at an electronic device."
            loading="lazy"
          />
        </template>
      </TwoColumns>
      <TwoColumns>
        <template #left-column>
          <img
            src="/assets/images/access4all-feeling-through.webp"
            alt="A man puts on a hoodie. To the right, the All4access app runs on a phone."
            loading="lazy"
          />
        </template>
        <template #right-column>
          <h3>
            Use the All4Access app on your mobile device to synchronize and play
            accessibility elements associated with media content.
          </h3>
          <p>
            With All4Access, users can easily enjoy content with the
            accessibility they need (captions, audio description, ASL, etc.)
            regardless of where the content is played (television, streaming,
            movie theaters, etc.), as long as the accessibility elements are
            stored in the All4Access clearinghouse. People who are deaf-blind
            can access the caption streams using their braille display.
          </p>
          <p>
            The app was developed by Dicapta and&nbsp;the Universidad Carlos III
            de Madrid and was partly funded by the U.S. Department of Education
            under the Television Access grant.
          </p>
        </template>
      </TwoColumns>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import TwoColumns from "@/components/TwoColumns.vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";

const rowWithIconsArray = ref([
  {
    icon: "lnr-database",
    title: "Universal Clearinghouse",
    text: "STORE & EXCHANGE YOUR ACCESSIBILITY ASSETS",
  },
  {
    icon: "lnr-earth",
    title: "Access to CC and AD",
    text: "REGARDLESS OF COUNTRY, DISTRIBUTOR, OR PLATFORM",
  },
  {
    icon: "lnr-rocket",
    title: "Emerging Technologies",
    text: "TO USE IN AUGMENTED REALITY OR SECOND SCREEN INNOVATIONS",
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
    text-shadow: #000000 1px 2px 4px;
    font-weight: 500;
  }
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
