<template>
  <main>
    <section class="banner">
      <img
        class="banner__img"
        src="@/assets/images/home-banner.jpg"
        alt="A family watches TV and laughs"
      />
      <div class="banner__text">
        <p class="banner__text-title">DICAPTA</p>
        <p class="banner__text-subtitle">
          Disabilities Collaborative Organization, bringing access through the
          power of technology for all.
        </p>
      </div>
    </section>
    <section class="services">
      <h2 class="services__title">Our Services</h2>
      <div class="services__buttons-container">
        <button class="services__button">
          <img
            src="@/assets/images/dubbing.png"
            alt="dubbing icon"
            class="services__button-img"
          /><span class="services__button-text">Dubbing</span>
        </button>
        <button class="services__button">
          <img
            src="@/assets/images/audiodescription.png"
            alt="audio description icon"
            class="services__button-img"
          /><span class="services__button-text">Audio description</span>
        </button>
        <button class="services__button">
          <img
            src="@/assets/images/consulting.png"
            alt="consulting icon"
            class="services__button-img"
          /><span class="services__button-text">Consulting</span>
        </button>
        <button class="services__button">
          <img
            src="@/assets/images/liveevents.png"
            alt="live events icon"
            class="services__button-img"
          /><span class="services__button-text">Live events accessibility</span>
        </button>
      </div>
      <div class="services__info-section">
        <div class="services__info-container">
          <div class="services__info-item">
            <div class="services__info-img-container">
              <img
                class="services__info-img"
                src="@/assets/images/video.png"
                alt="video icon"
              />
            </div>
            <p class="services__info-title">4000+ Hours</p>
            <p class="services__info-text">ACCESSIBILITY ASSETS PRODUCED</p>
          </div>
          <div class="services__info-item">
            <div class="services__info-img-container">
              <img
                class="services__info-img"
                src="@/assets/images/emergingtechnologies.png"
                alt="computer and phone icon"
              />
            </div>
            <p class="services__info-title">Emerging Technogies</p>
            <p class="services__info-text">DEVELOPMENT</p>
          </div>
          <div class="services__info-item">
            <div class="services__info-img-container">
              <img
                class="services__info-img"
                src="@/assets/images/mutilingualexpertise.png"
                alt="chat icon"
              />
            </div>
            <p class="services__info-title">Multilingual Expertise</p>
            <p class="services__info-text">
              ENGLISH, SPANISH, FRENCH AND PORTUGUESE MARKET REACH
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <p class="contact__text">Let us help you reach new markets</p>
      <button class="contact__button">Contact us</button>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  font-size: $size-12;
}

.banner {
  background-color: var(--c-gray-700);
  position: relative;
  height: 400px;
  margin-bottom: $size-32;

  &__img {
    width: 100%;
    opacity: 0.8;
    height: 400px;
    object-fit: cover;
  }

  &__text {
    position: absolute;
    top: 60px;
    left: 50px;
    color: var(--c-white-soft);
    max-width: 300px;
  }

  &__text-title {
    font-size: $size-48;
  }

  &__text-subtitle {
    font-size: $size-16;
  }
}

.services {
  &__title {
    text-align: center;
    color: var(--color-text-secondary);
    font-size: $size-48;
    margin-bottom: $size-32;
  }

  &__buttons-container {
    display: flex;
    flex-direction: column;
    margin: 0 $size-48;
  }

  &__button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    flex: 0 50%;
    margin-bottom: $size-32;
  }

  &__button-img {
    width: 100px;
  }

  &__button-text {
    margin-left: $size-16;
    font-size: $size-24;
    text-align: left;
    color: var(--c-black);
  }

  &__info-section {
    background-color: var(--c-gray-300);
  }

  &__info-container {
    display: flex;
    flex-direction: column;
    padding: $size-64 0;
    margin: auto;
    max-width: $size-256;
  }

  &__info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 33%;
    text-align: center;
    margin-bottom: $size-32;
  }

  &__info-img-container {
    height: 70px;
  }

  &__info-img {
    width: 60px;
    margin-bottom: $size-16;
  }

  &__info-title {
    font-size: $size-24;
    font-weight: 500;
    margin-bottom: $size-12;
  }

  &__info-subtitle {
    font-size: $size-16;
  }
}

.contact {
  text-align: center;
  margin: $size-24;

  &__text {
    font-size: $size-24;
    margin-bottom: $size-12;
  }
}

// styles for tablet size (768px) and higher
@media all and (min-width: 48rem) {
  .banner {
    &__img {
      object-position: 0 30%;
    }
  }

  .services {
    &__button {
      margin-bottom: $size-48;
    }

    &__buttons-container {
      flex-direction: row;
      flex-flow: wrap;
      width: 700px;
      margin: auto;
    }

    &__button-text {
      font-size: $size-32;
    }

    &__info-container {
      flex-direction: row;
      max-width: $size-768;
      justify-content: space-between;
    }

    &__info-item {
      margin-bottom: 0;
    }
  }
}
</style>
