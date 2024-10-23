<template>
  <div class="footer">
    <div class="social-media">
      <img class="logo" src="@/assets/logo.png" alt="Dicapta logo" />
      <div class="social-media__container">
        <a
          href="https://www.linkedin.com/company/dicapta"
          rel="noopener noreferrer"
          target="_blank"
          ><img src="@/assets/images/linkedin-logo.png" alt="linkedin logo"
        /></a>
        <a
          href="https://www.youtube.com/user/DICAPTA"
          rel="noopener noreferrer"
          target="_blank"
          ><img src="@/assets/images/youtube-logo.png" alt="youtube logo"
        /></a>
        <a
          href="https://www.facebook.com/Dicapta"
          rel="noopener noreferrer"
          target="_blank"
          ><img src="@/assets/images/facebook-logo.png" alt="facebook logo"
        /></a>
        <a
          href="https://www.instagram.com/dicapta"
          rel="noopener noreferrer"
          target="_blank"
          ><img src="@/assets/images/instagram-logo.png" alt="instagram logo"
        /></a>
        <a
          href="https://x.com/Dicapta_tweets"
          rel="noopener noreferrer"
          target="_blank"
          ><img src="@/assets/images/x-logo.png" alt="X logo"
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
          src="@/assets/images/ideas-that-work-logo.png"
          alt="ideas that work logo"
        />
      </a>
    </section>
    <section class="footer__section">
      <h2>Explore</h2>
      <ul class="footer__list-container">
        <li class="footer__list-element">
          Accessibility & Localization Services
        </li>
        <li class="footer__list-element">Technology</li>
        <li class="footer__list-element">Resources</li>
        <li class="footer__list-element">New accessibility releases</li>
      </ul>
    </section>
    <section class="footer__section">
      <h2>Info</h2>
      <ul class="footer__list-container">
        <li class="footer__list-element">TV & movie access</li>
        <li class="footer__list-element">Join us</li>
        <li class="footer__list-element">All4Access</li>
        <li class="footer__list-element">Press kit</li>
        <li class="footer__list-element">Newsletters</li>
      </ul>
    </section>
    <section class="footer__section">
      <h2>Company</h2>
      <ul class="footer__list-container">
        <li class="footer__list-element">About us</li>
        <li class="footer__list-element">Contact us</li>
        <li class="footer__list-element">Social responsibility</li>
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
      <address>
        <p>
          1511 E. State Road 434<br />Suite 2001-224<br />Winter Springs, FL
          32708
        </p>
        <p>Call: 407-389-0712<br />Fax: 407-682-1997</p>
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
  margin: 0 $size-32;
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
  margin-bottom: $size-12;
  margin-left: $size-4;
}
</style>
