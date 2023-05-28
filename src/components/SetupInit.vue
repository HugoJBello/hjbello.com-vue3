<template>
  <span></span>
</template>

<style scoped>
</style>

<script lang="ts">

import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useLanguage } from "@/stores/language";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup(){
    const languageStore= useLanguage();
    return {languageStore}
  },
  methods: {
    async setDefaultLanguage(){
      const i18next = useI18n()
      console.log(i18next.locale.value)
      if (i18next.locale.value.includes("es")){
        this.setLanguage("es")
      } else {
        this.setLanguage("en")
      }
    },
    ...mapActions(useLanguage, ['setLanguage']),
  },
  async created() {
    await this.setDefaultLanguage();
  }
});
</script>