<template>
  <main class="previous-projects">
    <section>
      <h2
        class="previous-projects__title previous-projects__title--first-title"
      >
        GoCC4All
      </h2>
      <p class="previous-projects__subtitle">
        Delivering emergency alerts and TV captions in an accessible way
      </p>
      <RowWithIconsAndText
        class="row-element"
        :elements="rowWithIconsGocc4all"
      />
      <TwoColumns class="previous-projects__custom-two-columns">
        <template #left-column>
          <h2>
            <a href="https://gocc4all.dicaptafoundation.org">GoCC4All</a> is an
            app designed to deliver emergency alerts and TV captions in an
            accessible way to individuals with disabilities, especially those
            who are deaf-blind.
          </h2>
          <p>
            The emergency module delivers geolocated alerts from the Integrated
            Public Warning and Warning System (IPAWS). It also permits the
            provision of an emergency contact, who will receive the user's
            extreme and severe alerts along with the user's location. Its SOS
            feature allows sending the user's location to the emergency contact
            at any time. The TV module provides access to live&nbsp;TV captions
            using a braille display or a mobile device's screen or voice-over
            function. Users can easily customize GoCC4ll to fit their braille
            display setup.
          </p>
        </template>
        <template #right-column>
          <div class="previous-projects__gocc4all-right-column">
            <img
              src="@/assets/images/gocc4all-captions.png"
              alt="Illustration. The GoCC4All app runs captions on a mobile phone’s screen. Next to the phone appears a braille display and a phone with a speaker on top."
            />
            <div class="store-badges">
              <a
                href="https://apps.apple.com/us/app/gocc4all/id1156436201"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  class="apple-badge"
                  src="@/assets/images/apple-store.png"
                  alt="apple store badge"
              /></a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dicaptafoundation.gocc4all2"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  class="google-badge"
                  src="@/assets/images/google-play-badge.png"
                  alt="google play badge"
              /></a>
            </div>
          </div>
        </template>
      </TwoColumns>
      <p class="previous-projects__container">
        GoCc4All was developed by Dicapta Foundation, Dicapta Corporation's
        social enterprise, and was tested and improved in collaboration with the
        Hellen Keller National Center (HKNC). IPAWS is a national emergency
        alert system managed by the Federal Emergency Management Agency (FEMA).
        GoCC4All was developed with funding from the National Institute on
        Disability, Independent Living, and Rehabilitation Research (NIDILRR)
        under the grant #90IFDV0004-01-00.
      </p>
    </section>
    <section>
      <h2 class="previous-projects__title">Management System</h2>
      <p class="previous-projects__subtitle">
        Proprietary administrative platform to monitor company's workflows
      </p>
      <RowWithIconsAndText
        class="row-element"
        :elements="rowWithIconsManagement"
      />
      <TwoColumns>
        <template #left-column>
          <div>
            <img
              src="@/assets/images/dicapta-workflow-control-platform.png"
              alt="Screenshot of Dicapta’s administrative platform."
            />
          </div>
        </template>
        <template #right-column>
          <h2>
            Dicapta developed a proprietary administrative platform to monitor
            the company's workflows.
          </h2>
          <p>
            From closed captioning to audio description, accessible real-time
            conferences, dubbing, and subtitling, the platform facilitates
            control of all the processes that make up the workflow. The client,
            the administrator at Dicapta, and the professional and technical
            personnel working in the production processes converge on the
            platform to maintain real-time, structured production control.
          </p>
          <p>
            The link to this platform is private and restricted to authorized
            personnel.
          </p>
        </template>
      </TwoColumns>
    </section>
    <section>
      <h2 class="previous-projects__title">Other Technologies</h2>
      <p class="previous-projects__subtitle">
        Speech-to-Text based captioning, captioning performance, educational
        technologies
      </p>
      <RowWithIconsAndText class="row-element" :elements="rowWithIconsOther" />
      <TwoColumns class="previous-projects__custom-two-columns">
        <template #left-column>
          <h2>C&amp;CC Cloud &amp; Captioning</h2>
          <p>
            C&amp;CC is an inexpensive and easy way to generate captions made
            possible by integrating machine learning algorithms with a
            speech-to-text system on the cloud. The system learns from the
            peculiarities of a TV station and its narration style to generate
            the captions.
          </p>
        </template>
        <template #right-column>
          <img
            src="@/assets/images/cncc.png"
            alt="C&CC logo. the letters C & C C inside a blue cloud."
          />
        </template>
      </TwoColumns>
      <TwoColumns class="previous-projects__custom-two-columns">
        <template #left-column>
          <img
            src="@/assets/images/img2-tecno.png"
            alt="Screen with captions. To the left of the screen, three sheets show statistics for accuracy, integrity, synchronicity, and average speed."
          />
        </template>
        <template #right-column>
          <h2>Closed Captioning Performance Supervisor</h2>
          <p>
            Our Closed Captioning Performance Supervisor reviews captions
            delivered in real-time by video broadcasters and provides the
            metrics needed to comply with federal regulations. Additionally, it
            gives immediate feedback if something goes wrong.
          </p>
        </template>
      </TwoColumns>
      <p class="previous-projects__container">
        According to the Federal Communications Commission (FCC) Rule 79.1,
        video producers, programmers, and distributors are required to monitor
        and maintain records and information on activities that ensure that the
        delivery of closed captioning to viewers comply with the defined
        criteria for quality standards for closed captioning.
      </p>
      <TwoColumns class="previous-projects__custom-two-columns">
        <template #left-column>
          <h2>Digital Aided Descriptions (DAD) Platform</h2>
          <p>
            The Digital Aided Descriptions (DAD) web-based platform allows
            students to create, as a team, descriptions for images that may
            either be selected by a teacher or suggested by the platform. DAD
            promises outstanding results when used in a diverse classroom.
            Instead of the teacher needing to fully describe images for blind or
            visually impaired students, sighted children work with visually
            impaired children to develop comprehensive descriptions. This way,
            all the children involved will enhance their vocabulary while
            developing collaborative skills. The&nbsp;tool allows the teacher to
            monitor, read, and correct the students' work in real-time.
          </p>
        </template>
        <template #right-column>
          <img
            src="@/assets/images/dad-technology.png"
            alt="A girl with headphones. Over her image, a transparent background shows a yellow banner with the letters DAD."
          />
        </template>
      </TwoColumns>
      <p class="previous-projects__container">
        Phase 1 of this project was developed with funds from a grant from the
        National Institute on Disability, Independent Living, and Rehabilitation
        Research (NIDILRR grant number 90BI0027).
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import RowWithIconsAndText from "@/components/RowWithIconsAndText.vue";
import TwoColumns from "@/components/TwoColumns.vue";

const rowWithIconsGocc4all = ref([
  {
    icon: "lnr-alarm",
    title: "Emergency Alerts",
    text: "TIMELY DELIVERY OF GEOLOCATED ALERTS",
  },
  {
    icon: "lnr-location",
    title: "Location Sharing",
    text: "SENDING USER LOCATION TO EMERGENCY CONTACTS",
  },
  {
    icon: "lnr-tablet",
    title: "Live TV Captions",
    text: "READ CAPTIONS USING SCREEN, BRAILLE DISPLAY OR VOICE-OVER",
  },
]);

const rowWithIconsManagement = ref([
  {
    icon: "lnr-cog",
    title: "Facilitates Workflow",
    text: "EASES THE CONTROL OF ALL PROCESSES",
  },
  {
    icon: "lnr-frame-contract",
    title: "Convergence",
    text: "CLIENTS CONVERGE ON THE PLATFORM",
  },
  {
    icon: "lnr-sort-amount-asc",
    title: "Structured Production",
    text: "WORKFLOW CONTROLLED IN REAL-TIME",
  },
]);

const rowWithIconsOther = ref([
  {
    icon: "lnr-cloud-sync",
    title: "Cloud & Captioning",
    text: "AUTOMATED CAPTIONING SYSTEM FOR TV STATIONS",
  },
  {
    icon: "lnr-chart-bars",
    title: "CC Performance",
    text: "CAPTIONING PERFORMANCE SUPERVISOR",
  },
  {
    icon: "lnr-graduation-hat",
    title: "Educational Technologies",
    text: "DIGITAL AIDED DESCRIPTION COLLABORATIVE TOOL",
  },
]);
</script>

<style scoped lang="scss">
.previous-projects {
  margin-bottom: $size-64;

  &__title {
    font-size: $size-48;
    font-weight: 500;
    text-align: center;
    margin-top: $size-64;

    &--first-title {
      margin-top: $size-192;
    }
  }

  &__subtitle {
    text-align: center;
    margin-bottom: $size-12;
  }

  &__custom-two-columns {
    padding-bottom: 0;
  }

  &__gocc4all-right-column {
    margin-top: $size-32;
  }

  &__container {
    margin: auto;
    padding: 0 $size-32;
  }

  .store-badges {
    display: flex;
    justify-content: center;

    .apple-bage {
      width: 120px;
    }

    .google-badge {
      width: 134px;
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .previous-projects {
    &__container {
      max-width: $size-1024;
      padding: 0 $size-32;
    }
  }
}
</style>
