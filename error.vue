<template>
  <NuxtLayout name="404">
    <header>
      <Navbar />
    </header>
  
    <main class="content">
        <h1>404</h1>
        <p>Oops, this page doesn't exist</p>
        <button class="font-bold button" @click="goBack">Go back home</button>
    </main>
  
    <Footer></Footer>
  </NuxtLayout>
</template>
  
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .button {
    padding: 4px 6px;
    margin: 10px 0px;
    background: black;
    color: white;
  }
  .content {
    margin-top: 200px;
    margin-bottom: 150px;
    text-align: center;

    h1 {
      font-size: 7rem;
      font-weight: 500;
      color: var(--c-blue-500);
      line-height: 1.3;
    }

    p {
      font-size: 2.25rem;
      margin-bottom: $size-16;
    }

    button {
      border: none;
      background-color: var(--c-blue-500);
      border-radius: 50px;
      color: var(--c-white-soft);
      font-size: $size-24;
      padding: 8px 24px;
      text-align: center;
      transition: 0.3s;
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: var(--c-blue-300);
        box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);
      }
    }
  }

  // styles for tablet size (768px) and higher
  @media all and (min-width: $size-768) {
    .content {
      margin-top: 300px;
      margin-bottom: 217px;
    }
  }
  </style>