<template>
  <main class="contact">
    <h1 class="contact__title">
      Bring your audiovisual productions to new audiences
    </h1>
    <section>
      <img
        class="contact__main-img"
        src="/assets/images/contact-us.jpg"
        alt="Cartoon: Two people brainstorm an idea using technology."
      />
      <p class="contact__top-text">
        Opening an audiovisual production to the world of individuals who are
        blind or deaf can extend the reach of your creations. It can also be a
        creative adventure.
      </p>
      <p class="contact__top-text">
        Let us work with you in making your audiovisual production accessible.
      </p>
      <p class="contact__top-text">
        Contact us to get more details and bring your creations to new
        audiences.
      </p>
    </section>
    <section class="contact__cards-section">
      <div class="contact__card">
        <span class="contact__card-icon material-symbols-rounded"> call </span>
        <p>call us at</p>
        <a href="tel:4073890712">407-389-0712</a>
      </div>
      <div class="contact__card">
        <span class="contact__card-icon material-symbols-rounded"> mail </span>
        <p>Reach us by mail</p>
        <a href="mailto:info@dicapta.com">info@dicapta.com</a>
      </div>
    </section>
    <section class="contact__map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.996851953853!2d-81.23469882449709!3d28.689740775633524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76beae436b827%3A0x1c910dd8620fb2e!2s1511%20E%20State%20Rd%20434%2C%20Winter%20Springs%2C%20FL%2032708%2C%20USA!5e0!3m2!1sen!2sco!4v1729733515861!5m2!1sen!2sco"
        width="600"
        height="450"
        class="contact__map"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <address>
          <p>
            1511 E. State Road 434<br />Suite 2001-224<br />Winter Springs, FL
            32708
          </p>
          <p>Call: 407-389-0712<br />Fax: 407-682-1997</p>
          <p>info@dicapta.com</p>
        </address>
        <div class="contact__social-media-container">
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
            ><img src="/assets/images/facebook-logo.png" alt="facebook logo"
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
            ><img src="/assets/images/x-logo.png" alt="X logo"
          /></a>
        </div>
        <a href="mailto:info@dicapta.com" class="button contact__button"
          >Email us</a
        >
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.contact {
  max-width: $size-1024;
  margin: auto;
  margin-top: $size-96;
  padding: 0 $size-12;

  &__title {
    font-size: $size-48;
    text-align: left;
    margin-bottom: $size-24;
  }

  &__main-img {
    float: right;
    max-width: 500px;
    margin-left: $size-12;
  }

  &__top-text {
    font-size: $size-24;
    margin-bottom: $size-24;
  }

  &__cards-section {
    display: flex;
    justify-content: space-around;
    margin: $size-48 0;
    flex-wrap: wrap;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--c-gray-300);
    width: 350px;
    min-width: 300px;
    padding: $size-32 $size-24;
    margin: $size-24;
    border-radius: 30px;

    p {
      font-size: $size-24;
    }

    a {
      font-size: $size-32;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__card-icon {
    font-size: $size-96;
    color: var(--c-blue-500);
  }

  &__map-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $size-96;
    flex-wrap: wrap;

    address {
      font-size: $size-24;

      margin-bottom: $size-24;
    }
  }

  &__map {
    border-radius: 30px;
    margin-bottom: $size-24;
  }

  &__button {
    padding: $size-8 $size-32;
  }

  &__social-media-container {
    display: flex;
    justify-content: space-between;
    margin-top: $size-24;
    margin-bottom: $size-24;

    img {
      height: 40px;
    }
  }
}

@media all and (min-width: $size-768) {
  .contact {
    margin-top: $size-192;
  }
}
</style>
