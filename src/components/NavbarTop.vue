<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  data-bs-theme="dark">
  
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <RouterLink class="navbar-brand" to="/">{{ $t("pageName") }}</RouterLink>
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/papers">{{ $t("Papers") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/research">{{ $t("Research") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">{{ $t("About") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/projects">{{ $t("Projects") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/teaching">{{ $t("Teaching") }}</RouterLink>
            </li>
          </ul>
          <div class="d-flex">    
        <select v-model="selected" @change="languageSelected($event)" class="dropdown" data-bs-theme="dark">
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
        </div>
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
  import { mapActions } from "pinia";
  import { useLanguage } from "@/stores/language";
  import { useI18n } from "vue-i18n";
  import { defineComponent, watch } from "vue";
  export default defineComponent({
    name: 'NavbarTop',
    setup(){
      const i18n = useI18n();
      const languageStorage = useLanguage();
       return {i18n, languageStorage}
    },
    data() {
      return {
        language:"es",
        selected:"es"
      };
    },
    methods: {
      languageSelected(event: any){
        this.language = event.target.value
        console.log(this.language)
        this.setLanguage(this.language)
        this.$i18n.locale = this.language
      },
      ...mapActions(useLanguage, ['setLanguage']),
    },
  
    created() {
        const locale = this.i18n.locale
        console.log(locale)
        if (locale.value.includes("en")) {
          this.language = "en"
          this.setLanguage("en")
          this.selected = "en"
        } else {
          this.language = "es"
          this.setLanguage("es")
          this.selected = "es"
        }

        const languageStorage = useLanguage();
        languageStorage.$onAction(({name:useLanguage, args}:any)=>{
          const url = args[0]      
          this.language = url
        }, true)
    },
    updated() {
      //this.getSources();
    },
  });
  </script>
  