<template>
  <main id="main" class="case-studies">
    <div class="case-studies__header">
      <h1>Case Studies</h1>
    </div>
    <div class="case-studies__content">
      <div class="mocked-card">
        <img
          src="/assets/images/shutterstock.webp"
          alt=""
          loading="lazy"
          width="800"
          height="534"
        />
        <h3>
          Empowering Accessibility: How All4Access Technology Transformed Access
          for a Blind Student at Johns Hopkins
        </h3>
        <p>
          A blind Johns Hopkins student was taking a Turkish culture class, but
          she could not access the course's video materials. Thanks to the use
          of Dicapta's All4Access technology, the student received the necessary
          tools to access the material and be on equal footing with her
          classmates.
        </p>
        <a href="/resources/case-study-article">Read More</a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: "Dicapta Case Studies | Real-World Examples of Accessible Media Solutions",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Discover Dicapta's case studies, showcasing real-world examples of our innovative accessibility solutions in action. See how we enhance media for all audiences.",
    },
  ],
})
</script>

<style scoped lang="scss">
.case-studies {
  &__header {
    background-color: var(--c-gray-300);
    padding: $size-16;

    h1 {
      font-size: $size-32;
      font-weight: 600;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    max-width: $size-1024;
    margin: auto;
    padding: $size-48 $size-16;
  }
}

.mocked-card {
  max-width: 400px;

  img {
    width: 100%;
  }

  p {
    margin-bottom: $size-12;
  }

  a {
    padding-left: 0;
    font-size: $size-16;

    &:hover {
      color: var(--c-blue-300);
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .case-studies {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
