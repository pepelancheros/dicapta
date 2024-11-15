<template>
  <nav class="navbar">
    <div class="navbar__content navbar__desktop">
      <RouterLink to="/" class="logo"
        ><img src="@/assets/logo.webp" alt="Dicapta logo"
      /></RouterLink>
      <ul class="navbar__elements">
        <li><RouterLink class="navbar__main-link" to="/">Home</RouterLink></li>
        <li>
          <RouterLink class="navbar__main-link" to="/services"
            >Services</RouterLink
          >
          <ul class="navbar__submenu">
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
          <RouterLink class="navbar__main-link" to="/projects"
            >Projects</RouterLink
          >
          <ul class="navbar__submenu">
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
          <RouterLink class="navbar__main-link" to="/resources"
            >Resources</RouterLink
          >
          <ul class="navbar__submenu">
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
          <RouterLink class="navbar__main-link" to="/news">News</RouterLink>
          <ul class="navbar__submenu">
            <li>
              <RouterLink to="/news/press">Press</RouterLink>
            </li>
            <li><RouterLink to="/news/newsletters">Newsletters</RouterLink></li>
          </ul>
        </li>
        <li>
          <RouterLink class="navbar__main-link" to="/about"
            >About Dicapta</RouterLink
          >
          <ul class="navbar__submenu">
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
        <span className="material-symbols-rounded">{{
          showNavModal ? "close" : "menu"
        }}</span>
      </button>
      <div class="navbar__mobile-logo-container">
        <RouterLink to="/" class="logo"
          ><img src="@/assets/logo.webp" alt="Dicapta logo"
        /></RouterLink>
        <div class="social-media-container">
          <a
            href="https://www.linkedin.com/company/dicapta"
            rel="noopener noreferrer"
            target="_blank"
            ><img src="/assets/images/linkedin-logo.png" alt="linkedin logo"
          /></a>
          <a
            href="https://www.youtube.com/user/DICAPTA"
            rel="noopener noreferrer"
            target="_blank"
            ><img src="/assets/images/youtube-logo.png" alt="youtube logo"
          /></a>
          <a
            href="https://www.facebook.com/Dicapta"
            rel="noopener noreferrer"
            target="_blank"
            ><img src="/assets/images/facebook-logo.webp" alt="facebook logo"
          /></a>
          <a
            href="https://www.instagram.com/dicapta"
            rel="noopener noreferrer"
            target="_blank"
            ><img src="/assets/images/instagram-logo.png" alt="instagram logo"
          /></a>
          <a
            href="https://x.com/Dicapta_tweets"
            rel="noopener noreferrer"
            target="_blank"
            ><img src="/assets/images/x-logo.webp" alt="X logo"
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
          <RouterLink
            class="navbar__main-link"
            to="/services"
            @click="handleMobileNavElementClick"
            >Services</RouterLink
          >
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
          <RouterLink
            class="navbar__main-link"
            to="/projects"
            @click="handleMobileNavElementClick"
            >Projects</RouterLink
          >
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
          <RouterLink
            class="navbar__main-link"
            to="/resources"
            @click="handleMobileNavElementClick"
            >Resources</RouterLink
          >
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
          <RouterLink to="/news" @click="handleMobileNavElementClick"
            >News</RouterLink
          >
          <ul class="navbar__submenu">
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
          <RouterLink
            class="navbar__main-link"
            to="/about"
            @click="handleMobileNavElementClick"
            >About Dicapta</RouterLink
          >
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
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const showNavModal = ref(false);

function handleMobileNavElementClick() {
  showNavModal.value = !showNavModal.value;
  document.body.style.overflow = showNavModal.value ? "hidden" : "auto";
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
  }

  a {
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
    padding-top: 8px;

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
      box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
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
      display: none;
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

    li:hover ul {
      display: block;
    }
  }
}
</style>
