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

<style scoped>
.content {
  margin-top: 137px;
}
</style>
