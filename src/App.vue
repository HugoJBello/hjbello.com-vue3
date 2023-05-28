<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarTop from "./components/NavbarTop.vue";
import SetupInit from "./components/SetupInit.vue";

</script>

<template>
  <div class="bg-light">
    <NavbarTop />
    
    <RouterView/>
    <SetupInit></SetupInit>
  </div>
</template>

<style scoped>
.container{
  margin: 0 auto
}
</style>