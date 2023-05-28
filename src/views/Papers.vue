<template>
  <div>
    <div v-if="language === 'en'">
      <FileReader file-id="papers.en" />
    </div>

    <div v-if="language === 'es'">
      <FileReader file-id="papers.es" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import FileReader from '@/components/FileReader.vue'; // @ is an alias to /src

import { defineComponent } from 'vue';
import { useLanguage } from "@/stores/language";

export default defineComponent({
  name: 'Papers',
  components: { FileReader },
  data() {
    return {
      language: "",
    };
  },
  created() {
    const languageStorage = useLanguage();
    this.language = languageStorage.getLanguage as string
    languageStorage.$onAction(({ name: useLanguage, args }: any) => {
      const url = args[0]
      this.language = url
      this.$forceUpdate()
      console.log("---", url)
    }, true)
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
