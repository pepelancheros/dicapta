<template>
  <div class="footer">
    <div class="social-media">
      <img
        class="logo"
        src="@/assets/logo.webp"
        alt="Dicapta logo"
        width="600"
        height="220"
        loading="lazy"
      />
      <div class="social-media__container">
        <a
          href="https://www.linkedin.com/company/dicapta"
          rel="noopener noreferrer"
          target="_blank"
          ><img
            src="/assets/images/linkedin-logo.webp"
            alt="linkedin logo"
            width="100"
            height="100"
            loading="lazy"
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
            loading="lazy"
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
            loading="lazy"
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
            loading="lazy"
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
            loading="lazy"
        /></a>
      </div>
    </div>
    <section class="disclaimer">
      <h2 class="disclaimer__text">Disclaimer</h2>
      <a
        href="https://www.ed.gov/about/ed-offices/osers/osep"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/images/ideas-that-work-logo.webp"
          alt="ideas that work logo"
          width="274"
          height="232"
          loading="lazy"
        />
      </a>
    </section>
    <section class="footer__section">
      <h2>Explore</h2>
      <ul class="footer__list-container">
        <li class="footer__list-element">
          <a href="/services">Services</a>
        </li>
        <li class="footer__list-element">
          <a href="/projects">Projects</a>
        </li>
        <li class="footer__list-element">
          <a href="/resources">Resources</a>
        </li>
      </ul>
    </section>
    <section class="footer__section">
      <h2>Info</h2>
      <ul class="footer__list-container">
        <li class="footer__list-element">
          <a href="/news/newsletters">Newsletters</a>
        </li>
        <li class="footer__list-element">Blog</li>
        <li class="footer__list-element">New Releases</li>
        <li class="footer__list-element">
          <a href="/news/press">Press kit</a>
        </li>
      </ul>
    </section>
    <section class="footer__section">
      <h2>Company</h2>
      <ul class="footer__list-container">
        <li class="footer__list-element"><a href="/about">About us</a></li>
        <li class="footer__list-element">
          <a
            href="https://dicaptafoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            >Social responsibility</a
          >
        </li>
        <li class="footer__list-element">
          <a href="/privacy-policy">Privacy policy</a>
        </li>
        <li class="footer__list-element">
          <a href="/terms-and-conditions">Terms & conditions</a>
        </li>
      </ul>
    </section>
    <section class="footer__address-container">
      <h2>Get in touch</h2>
      <ul class="footer__contact-us-container">
        <li class="footer__list-element">
          <a href="/about/contact-us">Contact us</a>
        </li>
      </ul>
      <address>
        <p>
          1511 E. State Road 434<br />Suite 2001-224<br />Winter Springs, FL
          32708
        </p>
        <p>Call: 407-389-0712</p>
        <p>info@dicapta.com</p>
      </address>
    </section>
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  padding: $size-24 $size-32;
  background-color: var(--c-gray-300);
  justify-content: space-between;

  &__section {
    display: flex;
    flex-direction: column;
    max-width: 170px;
    margin: 0 $size-16 $size-16;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__list-container {
    padding-left: $size-16;
  }

  &__list-element {
    font-size: $size-12;

    a {
      color: var(--c-gray-700);
      padding: $size-4 0;
      display: block;

      &:hover,
      &:focus {
        color: var(--c-blue-500);
        text-decoration: underline;
      }
    }
  }

  &__address-container {
    margin: 0 $size-24;

    h2 {
      margin-left: 0;
      text-align: center;
    }

    address {
      font-size: $size-12;
    }
  }

  &__contact-us-container {
    padding-left: $size-12;
  }
}

.logo {
  max-width: $size-192;
  margin-bottom: $size-4;
}

.social-media {
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;

    img {
      height: $size-24;
      margin-right: $size-8;
    }
  }
}

.disclaimer {
  margin: 0 $size-12;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: $size-96;
  }
}

h2 {
  font-size: $size-16;
  font-weight: 600;
  margin-left: $size-4;
}
</style>
