<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo"
      ><img src="@/assets/logo.png" alt="Dicapta logo"
    /></RouterLink>
    <ul class="navbar__elements">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li>
        <RouterLink to="/services">Services</RouterLink>
        <ul class="navbar__submenu">
          <li>
            <RouterLink to="/services/multilingual-dubbing"
              >Multilingual dubbing</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/services/audio-description"
              >Audio description</RouterLink
            >
          </li>
          <li><RouterLink to="/services/caption">Caption</RouterLink></li>
          <li><RouterLink to="/services/consulting">Consulting</RouterLink></li>
          <li>
            <RouterLink to="/services/media-production"
              >Media production</RouterLink
            >
          </li>
        </ul>
      </li>
      <li>
        <RouterLink to="/projects">Projects</RouterLink>
        <ul class="navbar__submenu">
          <li>
            <RouterLink to="/projects/all4voicing-lite"
              >All4Voicing lite</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/projects/integra">Integra</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects/all4access">All4Access</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects/previous-projects"
              >Previous projects</RouterLink
            >
          </li>
        </ul>
      </li>
      <li>
        <RouterLink to="/resources">Resources</RouterLink>
        <ul class="navbar__submenu">
          <li>
            <RouterLink to="/resources/accessibility-tips"
              >Accessibility tips</RouterLink
            >
          </li>
        </ul>
      </li>
      <li><RouterLink to="/news">News</RouterLink></li>
      <li>
        <RouterLink to="/about">About Dicapta</RouterLink>
        <ul class="navbar__submenu">
          <li><RouterLink to="/about/mission">Mission</RouterLink></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 12px;
  padding: $size-16 $size-32;
  list-style-type: none;
  z-index: 100;
  position: fixed;
  top: 0;
  background: var(--c-white);
  box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);

  a {
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    color: var(--color-text);
    font-size: $size-16;
    font-weight: 500;

    &:first-of-type {
      border: 0;
    }

    &.router-link-active {
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
      max-width: $size-256;
    }
  }

  &__elements {
    display: flex;
  }

  &__submenu {
    box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
  }

  ul {
    list-style-type: none;
    background-color: var(--c-white);
  }

  ul ul {
    display: none;
    padding-left: 16px;
    width: max-content;
    position: absolute;
    padding-top: $size-16;
    padding-left: 0;
    left: 0;

    li {
      margin: $size-8 0;
    }
  }

  li {
    position: relative;
  }

  li:hover ul {
    display: block;
  }
}
</style>
