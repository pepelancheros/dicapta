<template>
  <nav class="navbar">
    <div class="navbar__content navbar__desktop">
      <RouterLink to="/" class="logo"
        ><img
          src="@/assets/logo.webp"
          alt="Dicapta logo"
          width="600"
          height="220"
      /></RouterLink>
      <ul class="navbar__elements">
        <li><RouterLink class="navbar__main-link" to="/">Home</RouterLink></li>
        <li>
          <a
            href="#"
            :class="{ 'router-link-active': routePath.includes('services') }"
            id="services-navbar"
            aria-haspopup="true"
            role="button"
            :aria-expanded="activeDropdown === 'services'"
            @click="handleDropdownClick"
            v-click-outside="closeDropdown"
            >Services</a
          >
          <ul
            class="navbar__submenu"
            v-show="activeDropdown === 'services'"
            aria-labelledby="services-navbar"
          >
            <li>
              <RouterLink to="/services/multilingual-dubbing"
                >Multilingual Dubbing</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/services/audio-description"
                >Audio Description</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/services/captioning">Captioning</RouterLink>
            </li>
            <li>
              <RouterLink to="/services/consulting">Consulting</RouterLink>
            </li>
            <li>
              <RouterLink to="/services/media-production"
                >Media Production</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            :class="{ 'router-link-active': routePath.includes('projects') }"
            id="projects-navbar"
            aria-haspopup="true"
            role="button"
            :aria-expanded="activeDropdown === 'projects'"
            @click="handleDropdownClick"
            v-click-outside="closeDropdown"
            >Projects</a
          >
          <ul
            class="navbar__submenu"
            v-show="activeDropdown === 'projects'"
            aria-labelledby="projects-navbar"
          >
            <li>
              <RouterLink to="/projects/tv-movie-access"
                >TV & Movie Access</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/projects/all4voicing-lite"
                >All4Voicing Lite</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/projects/all4access">All4Access</RouterLink>
            </li>
            <li>
              <RouterLink to="/projects/previous-projects"
                >Previous Projects</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            :class="{ 'router-link-active': routePath.includes('resources') }"
            id="resources-navbar"
            aria-haspopup="true"
            role="button"
            :aria-expanded="activeDropdown === 'resources'"
            @click="handleDropdownClick"
            v-click-outside="closeDropdown"
            >Resources</a
          >
          <ul
            class="navbar__submenu"
            v-show="activeDropdown === 'resources'"
            aria-labelledby="resources-navbar"
          >
            <li>
              <RouterLink to="/resources/accessibility-tips"
                >Accessibility Tips</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/resources/information-sheets"
                >Information Sheets</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            :class="{ 'router-link-active': routePath.includes('news') }"
            id="news-navbar"
            aria-haspopup="true"
            role="button"
            :aria-expanded="activeDropdown === 'news'"
            @click="handleDropdownClick"
            v-click-outside="closeDropdown"
            >News</a
          >
          <ul
            class="navbar__submenu"
            v-show="activeDropdown === 'news'"
            aria-labelledby="news-navbar"
          >
            <li>
              <RouterLink to="/news/blog">Blog</RouterLink>
            </li>
            <li>
              <RouterLink to="/news/press">Press</RouterLink>
            </li>
            <li><RouterLink to="/news/newsletters">Newsletters</RouterLink></li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            :class="{ 'router-link-active': routePath.includes('about') }"
            id="about-navbar"
            aria-haspopup="true"
            role="button"
            :aria-expanded="activeDropdown === 'about dicapta'"
            @click="handleDropdownClick"
            v-click-outside="closeDropdown"
            >About Dicapta</a
          >
          <ul
            class="navbar__submenu"
            v-show="activeDropdown === 'about dicapta'"
            aria-labelledby="about-navbar"
          >
            <li><RouterLink to="/about/mission">Mission</RouterLink></li>
            <li><RouterLink to="/about/our-team">Our Team</RouterLink></li>
            <li>
              <RouterLink to="/about/our-partners">Our Partners</RouterLink>
            </li>
            <li>
              <RouterLink to="/about/contact-us">Contact Us</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="navbar__content navbar__mobile">
      <button
        className="navbar__hamburger"
        @click="handleMobileNavElementClick"
      >
        <img
          class="contact__card-icon"
          :src="
            showNavModal
              ? '/assets/images/material-icons/close.svg'
              : '/assets/images/material-icons/menu.svg'
          "
          :alt="showNavModal ? 'close icon' : 'menu icon'"
        />
      </button>
      <div class="navbar__mobile-logo-container">
        <RouterLink to="/" class="logo"
          ><img
            src="@/assets/logo.webp"
            alt="Dicapta logo"
            width="600"
            height="220"
        /></RouterLink>
        <div class="social-media-container">
          <a
            href="https://www.linkedin.com/company/dicapta"
            rel="noopener noreferrer"
            target="_blank"
            ><img
              src="/assets/images/linkedin-logo.webp"
              alt="linkedin logo"
              width="100"
              height="100"
          /></a>
          <a
            href="https://www.youtube.com/user/DICAPTA"
            rel="noopener noreferrer"
            target="_blank"
            ><img
              src="/assets/images/youtube-logo.webp"
              alt="youtube logo"
              width="143"
              height="100"
          /></a>
          <a
            href="https://www.facebook.com/Dicapta"
            rel="noopener noreferrer"
            target="_blank"
            ><img
              src="/assets/images/facebook-logo.webp"
              alt="facebook logo"
              width="100"
              height="100"
          /></a>
          <a
            href="https://www.instagram.com/dicapta"
            rel="noopener noreferrer"
            target="_blank"
            ><img
              src="/assets/images/instagram-logo.webp"
              alt="instagram logo"
              width="100"
              height="100"
          /></a>
          <a
            href="https://x.com/Dicapta_tweets"
            rel="noopener noreferrer"
            target="_blank"
            ><img
              src="/assets/images/x-logo.webp"
              alt="X logo"
              width="100"
              height="90"
          /></a>
        </div>
      </div>
      <div></div>
    </div>
    <div v-if="showNavModal" class="navbar__modal links">
      <ul class="navbar__elements navbar__modal-elements">
        <li>
          <RouterLink
            class="navbar__main-link"
            to="/"
            @click="handleMobileNavElementClick"
            >Home</RouterLink
          >
        </li>
        <li>
          <p
            class="navbar__main-link navbar__text"
            :class="{ 'router-link-active': routePath.includes('services') }"
          >
            Services
          </p>
          <ul class="navbar__submenu">
            <li>
              <RouterLink
                to="/services/multilingual-dubbing"
                @click="handleMobileNavElementClick"
                >Multilingual dubbing</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services/audio-description"
                @click="handleMobileNavElementClick"
                >Audio description</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services/captioning"
                @click="handleMobileNavElementClick"
                >Captioning</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services/consulting"
                @click="handleMobileNavElementClick"
                >Consulting</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services/media-production"
                @click="handleMobileNavElementClick"
                >Media production</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <p
            class="navbar__main-link navbar__text"
            :class="{ 'router-link-active': routePath.includes('projects') }"
          >
            Projects
          </p>
          <ul class="navbar__submenu">
            <li>
              <RouterLink
                to="/projects/tv-movie-access"
                @click="handleMobileNavElementClick"
                >TV & Movie Access</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/projects/all4voicing-lite"
                @click="handleMobileNavElementClick"
                >All4Voicing lite</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/projects/all4access"
                @click="handleMobileNavElementClick"
                >All4Access</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/projects/previous-projects"
                @click="handleMobileNavElementClick"
                >Previous projects</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <p
            class="navbar__main-link navbar__text"
            :class="{ 'router-link-active': routePath.includes('resources') }"
          >
            Resources
          </p>
          <ul class="navbar__submenu">
            <li>
              <RouterLink
                to="/resources/accessibility-tips"
                @click="handleMobileNavElementClick"
                >Accessibility tips</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/resources/information-sheets"
                @click="handleMobileNavElementClick"
                >Information Sheets</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <p
            class="navbar__main-link navbar__text"
            :class="{ 'router-link-active': routePath.includes('news') }"
          >
            News
          </p>
          <ul class="navbar__submenu">
            <li>
              <RouterLink to="/news/blog" @click="handleMobileNavElementClick"
                >Blog</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/news/press" @click="handleMobileNavElementClick"
                >Press</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/news/newsletters"
                @click="handleMobileNavElementClick"
                >Newsletters</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <p
            class="navbar__main-link navbar__text"
            :class="{ 'router-link-active': routePath.includes('about') }"
          >
            About Dicapta
          </p>
          <ul class="navbar__submenu">
            <li>
              <RouterLink
                to="/about/mission"
                @click="handleMobileNavElementClick"
                >Mission</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about/our-team"
                @click="handleMobileNavElementClick"
                >Our Team</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about/our-partners"
                @click="handleMobileNavElementClick"
                >Our Partners</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about/contact-us"
                @click="handleMobileNavElementClick"
                >Contact Us</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const routePath = computed(() => route.fullPath);
const showNavModal = ref(false);
const activeDropdown = ref("");
const navbarCategories = [
  "Home",
  "Services",
  "Projects",
  "Resources",
  "News",
  "About Dicapta",
];

function handleMobileNavElementClick() {
  showNavModal.value = !showNavModal.value;
  document.body.style.overflow = showNavModal.value ? "hidden" : "auto";
}

function handleDropdownClick(event) {
  if (activeDropdown.value === event.target.text.toLowerCase()) {
    activeDropdown.value = "";
    return;
  }
  activeDropdown.value = event.target.text.toLowerCase();
}

function closeDropdown(event) {
  if (navbarCategories.includes(event.target.text)) {
    activeDropdown.value = event.target.text.toLowerCase();
    return;
  }
  activeDropdown.value = "";
}
</script>

<style scoped lang="scss">
.navbar {
  &__content {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    padding: $size-8 $size-24;
    list-style-type: none;
    z-index: 100;
    position: fixed;
    top: 0;
    background: var(--c-white);
    box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
  }

  &__desktop {
    display: none;
  }

  &__mobile {
    display: flex;
  }

  &__hamburger {
    background-color: transparent;
    color: var(--c-blue-500);
    padding: $size-4;

    &:active,
    &:focus {
      background-color: transparent;
      box-shadow: none;
    }
  }

  &__modal {
    display: flex;
    flex-direction: column;
    margin-top: 85px;
    padding: $size-16 $size-24;
    padding-left: 0;
    position: fixed;
    width: 100%;
    left: 0;
    background: white;
    height: 100%;
    top: 0;
    z-index: 100;

    ul {
      list-style-type: none;
    }
  }

  &__modal-elements {
    max-height: 80vh;
    overflow: auto;
  }

  &__main-link {
    position: relative;
    z-index: 100;
    display: inline;
    margin-top: $size-8;
  }

  a,
  &__text {
    margin: 0 1rem;
    padding-bottom: $size-8;
    transition: 0;
    border-left: 1px solid var(--color-border);
    color: var(--color-text);
    font-size: $size-16;
    font-weight: 500;

    &:first-of-type {
      border: 0;
    }

    &.router-link-active {
      border-bottom: 2px solid;
      color: var(--color-text-secondary);
      border-image: linear-gradient(
          to right,
          var(--color-text-secondary) 65%,
          transparent 35%
        )
        100% 1;

      &.logo {
        border: none;
      }
    }

    &:hover {
      background-color: transparent;
      color: var(--color-text-secondary);
    }
  }

  &__text {
    margin-top: $size-12;
    display: block;
    width: fit-content;
  }

  .logo {
    padding: 0;

    img {
      max-width: $size-128;
    }
  }

  &__elements {
    display: flex;
    flex-direction: column;
  }

  &__submenu {
    a.router-link-exact-active {
      border: none;
    }
  }

  &__mobile-logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social-media-container {
    display: flex;

    a {
      margin: 0 $size-12;
      padding: 0;
      border-left: none;
    }

    img {
      max-height: 17px;
      margin: 0;
    }
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .navbar {
    &__mobile {
      display: none;
    }

    &__modal {
      display: none;
    }

    &__desktop {
      display: flex;
    }

    &__elements {
      flex-direction: row;
    }

    &__submenu {
      padding-top: $size-8;
      margin-top: $size-12;
      box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
    }

    &__main-link {
      margin-top: 0;
    }

    .logo {
      img {
        max-width: $size-256;
      }
    }

    ul {
      list-style-type: none;
      background-color: var(--c-white);
    }

    ul ul {
      padding-left: 16px;
      width: max-content;
      position: absolute;
      padding-top: $size-16;
      padding-left: 0;
      left: 0;

      li {
        margin: $size-12 0;
      }
    }

    li {
      position: relative;
    }
  }
}
</style>
