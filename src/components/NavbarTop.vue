<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  data-bs-theme="dark">
  
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">Hugo J. Bello page</a>
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">{{ $t("Papers") }}</RouterLink>
            </li>
  
            <li class="nav-item">
              <RouterLink class="nav-link" to="/server">Server</RouterLink>
            </li>
            
          </ul>
          
        </div>
      </div>
  
    </nav>
  </template>
  
  <style scoped>
  .button_add{
    margin-right: 8px;
  }
  </style>
  
  <script lang="ts">
  import { useI18n } from "vue-i18n";
  import { defineComponent, watch } from "vue";
  export default defineComponent({
    name: 'NavbarTop',
    setup(){
      const i18n = useI18n();
       return {i18n}
    },
    data() {
      return {
      };
    },
    methods: {

    },
  
    created() {
        console.log("SUPUT")
    },
    updated() {
      //this.getSources();
    },
  });
  </script>
  