<template>
  <div class="newsletters">
    <h2 class="newsletters__title">Subscribe to our newsletter</h2>
    <form @submit.prevent="subscribeEmailToNewsletter">
      <label class="label-hidden" for="email">Email</label>
      <input
        class="newsletters__input"
        v-model="email"
        aria-label="Email"
        type="text"
        id="email"
        placeholder="Email"
      />
      <input
        class="button newsletters__button"
        type="submit"
        value="Subscribe"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AddNewslettersSubscription } from "@/api/strapi.js";

const email = ref("");

async function subscribeEmailToNewsletter() {
  try {
    await AddNewslettersSubscription(email.value);
    window.alert(email.value + " Subscribed!");
  } catch (error) {
    window.alert(
      "Error subscribing: " +
        email.value +
        " please make sure you entered a valid email address."
    );
  } finally {
    email.value = "";
  }
}
</script>

<style scoped lang="scss">
.newsletters {
  background-color: var(--c-gray-300);
  padding: $size-48 0;
  border-bottom: 3px solid var(--c-white);

  &__title {
    font-size: $size-32;
    text-align: center;
    margin-bottom: $size-16;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__input {
    padding: $size-12 $size-16;
    border: none;
    border-radius: $size-16;
    margin-bottom: $size-24;
    margin: 0 $size-12 $size-24;
  }

  &__button {
    margin: 0 $size-12;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .newsletters {
    form {
      flex-direction: row;
    }
    &__input {
      margin-bottom: 0;
      min-width: 300px;
    }
  }
}
</style>
