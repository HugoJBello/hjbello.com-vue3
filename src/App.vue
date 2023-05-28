<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarTop from "./components/NavbarTop.vue";

</script>

<template>
  <div>
    <NavbarTop />
    
    <RouterView class="bg-light"/>
  </div>
</template>

<style scoped></style>