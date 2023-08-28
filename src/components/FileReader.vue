<template>
    <div class="container-article">
      <div class="separator"></div>

      <h1 >{{article.title }}</h1>
      <div class="separator"></div>

      <img v-if="imageUrl && article.show_starting_image" :src="imageUrl" class="rounded img-fluid imgcontainer" alt="..."/>
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
  import { getImage } from "@/services/articlesService";

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
        if (this.article.show_starting_image === undefined) {
          this.article.show_starting_image = true;
        }

        this.imageUrl = getImage(this.article)
        console.log(this.article.image)

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
  padding: 10px;
}
.separator{
  margin-bottom: 25px;
}
.imgcontainer {
  text-align: center;
  padding-top: 10px;
  margin: 0 auto;
  max-width: 400px;
}

.content-text {
  max-width: 200 px;
  white-space: initial;
}
  </style>