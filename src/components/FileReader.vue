<template>
    <div>
      
    </div>
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
  import docs from '@/assets/articles/test.txt';

  export default defineComponent({
    name: 'FileReader',
    props: {
    path: String,
    },
    setup(){
      const i18n = useI18n();
      const languageStorage = useLanguage();
       return {i18n, languageStorage}
    },
    data() {
      return {
        language:"en",
        text:"",
      };
    },
    methods: {
      ...mapActions(useLanguage, ['setLanguage']),
    },
  
    async created() {
        console.log("SUPUT")
        //const text = await import('@/assets/articles/test.txt');
        console.log(docs)
        const languageStorage = useLanguage();
        languageStorage.$onAction(({name:useLanguage, args}:any)=>{
          const url = args[0]      
          this.language = url
          console.log("---", url)
        }, true)
    },
    updated() {
      //this.getSources();
    },
  });
  </script>
  