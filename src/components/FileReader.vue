<template>
    <div class="container-article">
      <div class="separator"></div>

      <h1 >{{article.title }}</h1>
      <div class="separator"></div>

      <img v-if="imageUrl" :src="imageUrl" class="rounded img-fluid" alt="..."/>
      <b></b>
      <div class="separator"></div>
      <div class="separator"></div>
      <Markdown :source="article.text"></Markdown>
    </div>
  </template>
  
  
  <script lang="ts">
  import { mapActions } from "pinia";
  import { useLanguage } from "@/stores/language";
  import { useI18n } from "vue-i18n";
  import { defineComponent, watch } from "vue";
  import articles from '@/assets/articles.json';
  import {Article} from '@/models/article';
  import axios from 'axios';
  import Markdown from 'vue3-markdown-it';

  export default defineComponent({
    components:{Markdown},
    name: 'FileReader',
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
        article: {} as Article
      };
    },
    methods: {
      async getFileArticle(){
        this.article = articles.articles.find((item)=>item.id == this.fileId) as Article

        if (this.article.image){
          this.imageUrl = this.getUrl() + "/img/articleImages/" + this.article.image
          console.log(this.imageUrl)
        } 

        const resp = await axios.get(this.getUrl() + "/articles/" +this.fileId + ".md")
        this.article.text = resp.data
        console.log(this.article)
      },
      getUrl(){
        return window.location.origin
      },
      ...mapActions(useLanguage, ['setLanguage']),
    },
  
    async created() {
        console.log()
        const languageStorage = useLanguage();
        languageStorage.$onAction(({name:useLanguage, args}:any)=>{
          const url = args[0]      
          this.language = url
        }, true)
        await this.getFileArticle()
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