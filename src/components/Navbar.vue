<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo"
      ><img src="@/assets/logo.png" alt="Dicapta logo"
    /></RouterLink>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 12px;

  a {
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    color: var(--color-text);

    &:first-of-type {
      border: 0;
    }

    &.router-link-exact-active {
      color: var(--color-text-secondary);
    }

    &:hover {
      background-color: transparent;
      color: var(--color-text-secondary);
    }
  }

  .logo {
    padding: 0;

    img {
      max-width: 130px;
    }
  }
}
</style>
