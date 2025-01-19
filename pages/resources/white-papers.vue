<template>
  <main id="main" class="white-papers">
    <div class="white-papers__header">
      <h1>White Papers</h1>
    </div>
    <div class="white-papers__content">
      <div class="mocked-card">
        <img
          src="/assets/images/girl-and-boy-illustration.webp"
          alt="Two illustrations in one image: Image on the left. A young girl with light brown skin and long, dark, curly hair sits at a desk, reading a large book. She wears a bright yellow dress adorned with a sunflower pattern. Her eyes sparkle. The room is warmly illuminated, featuring a globe, a telescope, and posters in the background. Image on the right. A boy with dark brown skin and short, tightly coiled hair operates a toy car outside. He sports a red hoodie paired with blue jeans. He smiles. In the background are other children. A playground is in the distance."
          loading="lazy"
          width="468"
          height="468"
        />
        <h3>
          Embracing Diversity in Audio Description: A Paradigm Shift for
          Inclusivity
        </h3>
        <p>
          This white paper explores the evolving paradigm in audio description,
          emphasizing including racial and ethnic characteristics when
          describing individuals/people in media.
        </p>
        <a href="/resources/white-paper-article">Read More</a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: "Dicapta White Papers | In-Depth Insights on Accessibility Technology and Media",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Explore Dicapta's white papers for in-depth insights on accessibility technology, media solutions, and industry best practices. Learn more about our impact.",
    },
  ],
})
</script>

<style scoped lang="scss">
.white-papers {
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
  .white-papers {
    &__header {
      padding: $size-48;

      h1 {
        font-size: $size-48;
      }
    }
  }
}
</style>
