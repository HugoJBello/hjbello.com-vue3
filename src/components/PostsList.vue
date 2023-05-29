<template>
    <div class="container-list">
      <h1>{{$t("Posts list") }}</h1>
    </div>
  </template>
  
  
  <script lang="ts">
  import { mapActions } from "pinia";
  import { useLanguage } from "@/stores/language";
  import { useI18n } from "vue-i18n";
  import { defineComponent, watch } from "vue";
  import articles from '@/assets/articles.json';
  import {Article} from '@/models/article';

  export default defineComponent({
    name: 'PostsList',
    props: {
    fileId: String,
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
        imageUrl: "",
        articles: articles.articles as Article[]
      };
    },
    methods: {
      ...mapActions(useLanguage, ['setLanguage']),
    },
  
    async created() {
        console.log()
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
  


  <style scoped>


:deep(a:link) { text-decoration: none; }

.container-article {
  margin: 0 auto;
  max-width: 760px;
}
.separator{
  margin-bottom: 25px;
}
.imgcontainer {
  padding-top: 10px;
  margin: 0 auto;
  max-width: 600px;
}

.content-text {
  max-width: 200 px;
  white-space: initial;
}
  </style>