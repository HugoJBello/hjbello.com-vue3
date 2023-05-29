<template>
  <div class="m-10">
    <div class="container-list">
      <RouterLink v-for="item in articles" :value="item" :key="item.id" :to="'/posts/'+item.id" class="card mb-4 card-cust" style="max-width: 540px;">
        <div class="row">
          <div class="col-4">
            <img :src="item.image" class="img-fluid rounded-start" alt="">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <p class="card-text"><small class="text-muted">{{ item.date }}</small></p>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
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
      getArticles(language: string){
        this.articles = articles.articles.filter((article)=>article.language == language) as Article[]
        this.getImages()
        console.log(this.articles,this.languageStorage.getLanguage)
      },
      getUrl(){
        return window.location.origin
      },
      getImages(){
        for (let i=0; i < this.articles.length; i++){
          const article = this.articles[i]
          if (article.image && ! article.image.includes("https://") && ! article.image.includes("data:image/")){
            this.articles[i].image = this.getUrl() + "/img/articleImages/" + article.image

          } else if (article.image && (article.image.includes("https://") || article.image.includes("data:image/"))) {
            this.articles[i].image = article.image
        }

 
        }
      },
      ...mapActions(useLanguage, ['setLanguage']),
    },
  
    async created() {
        this.getArticles(this.languageStorage.getLanguage)
        const languageStorage = useLanguage();
        languageStorage.$onAction(({name:useLanguage, args}:any)=>{
          const url = args[0]      
          this.language = url
          this.getArticles(url)
          this.$forceUpdate()
        }, true)
    },
    updated() {
      //this.getSources();
    },
  });
  </script>
  


  <style lang="scss" scoped>
a{
  text-decoration: none;
  color: #000000;
}
:deep(a:link) { text-decoration: none; }

@media (min-width: 1000px) {
  .card-cust{
    width: 1000px;
  } 
}

.out-list {
  margin: 10px
}
   .container-list {
    margin: 0 auto;
    max-width: 500px;
  }


  </style>