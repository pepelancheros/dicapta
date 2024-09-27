<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView class="content" />
</template>

<style scoped>
header {
  margin-bottom: 2rem;
}
</style>
