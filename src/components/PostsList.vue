<template>
  <div class="container-list">
    <MasonryWall :items="articles"  :gap="0" >
      <template #default="{ item, index }">
    <RouterLink :to="'/posts/'+item.id" :column-width="100" class="card post-card" style="width: 18rem;">
      <img :src="item.image" class="card-img-top" alt="...">
      <div :href="index" class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.description }}</p>
      </div>
      <div class="card-footer">
        {{ parseDate(item.dateParsed) }}
      </div>
    
    </RouterLink>
  </template>
  </MasonryWall>
  </div>
  </template>
  
  
  <script lang="ts">
  import { mapActions } from "pinia";
  import { useLanguage } from "@/stores/language";
  import { useI18n } from "vue-i18n";
  import { defineComponent, watch } from "vue";
  import articles from '@/assets/articles.json';
  import {Article} from '@/models/article';
  import MasonryWall from '@yeger/vue-masonry-wall'
  import { getImage, filterLanguageParsingDate } from "@/services/articlesService";
  import moment from 'moment'
  
  export default defineComponent({
    components:{
      MasonryWall
    },
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
        this.articles = filterLanguageParsingDate(articles.articles as Article[], language) as Article[]

        this.getImages()
        console.log(this.articles,this.languageStorage.getLanguage)
      },
      getUrl(){
        return window.location.origin
      },
      parseDate(date: string){
        moment.locale(this.language)
        const dateParsed  = moment(date)
        return dateParsed.fromNow()
      },
      getImages(){
         this.articles = this.articles.map((article) => {
            article.image = getImage(article)
            return article
         })
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

.post-card{
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 30px;
  @media (min-width: 1250px) {
    margin-left: 80px;

  }
}
.out-list {
  margin: 10px
}
.container-list {
margin: 0 auto;

}


  </style>