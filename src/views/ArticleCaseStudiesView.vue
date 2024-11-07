<template>
  <main class="case-study">
    <p class="case-study__date blue-background">12 MAY 2024</p>
    <section class="blue-background case-study__first-section">
      <h1 class="case-study__title">
        Empowering Accessibility: How All4Access Technology Transformed Access
        for a Blind Student at Johns Hopkins
      </h1>
    </section>
    <section>
      <TwoColumns>
        <template #left-column>
          <h2>Summary:</h2>
          <p>
            A blind Johns Hopkins student was taking a Turkish culture class,
            but she could not access the course's video materials. Thanks to the
            use of Dicapta's All4Access technology, the student received the
            necessary tools to access the material and be on equal footing with
            her classmates.
          </p>
        </template>
        <template #right-column>
          <img src="/assets/images/shutterstock.jpg" alt="" />
        </template>
      </TwoColumns>
    </section>
    <section class="blue-background">
      <h2>The challenge:</h2>
      <p>
        The Student Disability Services Office at Johns Hopkins University
        needed to provide access to movies in Turkish and Kurdish language to a
        blind student. The movies were part of a cultural course and had English
        subtitles. It was important to hear the film's original dialogues
        because they conveyed part of the cultural ambiance of the film. Since
        the student didn't have access to the film's visual elements and
        couldn't read the subtitles, it was necessary to find a way to solve
        both issues at once in a way that provided the student with a seamless
        experience. Dicapta provided several options, including creating a
        voiceover to give access to the subtitles, and worked with the student
        and the team at Johns Hopkins to determine the best way to give access
        to the film.
      </p>
    </section>
    <section>
      <h2>The solution:</h2>
      <p>
        Dicapta created audio descriptions to provide access to the film's
        visuals and uploaded them to the All4Access platform. At the same time,
        since the university provided the English subtitles files, we were able
        to also upload the subtitles to All4Access. The student used the
        all4Access app to listen to the audio description and access the
        subtitles in her braille display.
      </p>
    </section>
    <section class="blue-background">
      <h2>The results:</h2>
      <p>
        The student was able to access the same information her classmates
        received and realized that she could enjoy a movie; as she previously
        mentioned, she only had an interest in books because of the
        accessibility barriers. The Student Disability Services Office was able
        to solve the accessibility challenge for this particular student and
        also determined that the All4Access technology was a versatile tool for
        solving students with disabilities' access challenges. The Johns Hopkins
        team described All4Access as "a pipe dream."
      </p>
    </section>
    <section>
      <p>
        "The experience of using All4Access to provide access for our student
        was great! I have never appreciated small business more, as we were able
        to work so closely together and provide feedback throughout the term to
        make sure that the student was getting the access she needed as well as
        preferred."
      </p>
      <p>Julie Clementson,</p>
      <p>
        Accessibility and Assistive Technology Coordinator, Student Disability
        Services at Johns Hopkins University.
      </p>
    </section>
    <section class="blue-background case-study__last-section">
      <h2>About Johns Hopkins:</h2>
      <p>
        Johns Hopkins University, founded in 1876, is America's first research
        university. Renowned for its nine world-class academic divisions, it
        serves nearly 24,000 students across various disciplines. Located in
        Baltimore, MD, Johns Hopkins also extends its reach globally with
        graduate campuses in Italy, China, and Washington, D.C., fostering a
        diverse and expansive academic community.
      </p>
    </section>
  </main>
</template>

<script setup>
import TwoColumns from "@/components/TwoColumns.vue";
</script>

<style scoped lang="scss">
.blue-background {
  background: var(--c-blue-600);
  color: white;
  border-radius: 25px;
}

.case-study {
  max-width: $size-1024;
  margin: auto;
  margin-top: 116px;
  padding: 0 $size-24;

  &__date {
    width: 150px;
    margin: 0 40px 0 auto;
    padding: 15px 0;
    border-radius: 10px 10px 0 0;
    text-align: center;
    font-weight: 500;
  }

  &__title {
    font-size: $size-24;
    line-height: 1.5;
    font-weight: 500;
  }

  &__first-section {
    border-end-end-radius: 0;
    border-end-start-radius: 0;
  }

  &__last-section {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-bottom: $size-64;
  }

  h2 {
    font-size: $size-32;
  }

  section {
    padding: $size-32;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .case-study {
    margin-top: 160px;

    &__title {
      font-size: $size-48;
      line-height: 1.2;
    }
  }
}
</style>
