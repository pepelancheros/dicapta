<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView class="content" />

  <Footer></Footer>
</template>

<style scoped lang="scss">
.content {
  margin-top: 70px;
}

// styles for tablet size (768px) and higher
@media all and (min-width: $size-768) {
  .content {
    margin-top: 117px;
  }
}
</style>
