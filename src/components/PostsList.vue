<template>
  <div class="container-list">

    <div v-if="innerWidth > heightLimit">
      <MasonryWall :items="articles" :gap="0">
        <template #default="{ item, index }">
          <RouterLink :to="'/posts/' + item.id" :column-width="100" class="card post-card" style="width: 18rem;">
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

    <div class="small-container" v-if="innerWidth < heightLimit || innerWidth == heightLimit">
          <RouterLink v-for="item of articles" :to="'/posts/' + item.id" :key="item.id" :column-width="100" class="card small-container">
            <img :src="item.image" class="card-img-top" alt="...">
            <div   class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-footer">
              {{ parseDate(item.dateParsed) }}
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
import { Article } from '@/models/article';
import MasonryWall from '@yeger/vue-masonry-wall'
import { getImage, filterLanguageParsingDate } from "@/services/articlesService";
import moment from 'moment'

export default defineComponent({
  components: {
    MasonryWall
  },
  name: 'PostsList',
  props: {
    fileId: String,
  },
  setup() {
    const i18n = useI18n();
    const languageStorage = useLanguage();
    return { i18n, languageStorage }
  },
  data() {
    return {
      language: "en",
      text: "",
      imageUrl: "",
      articles: articles.articles as Article[],
      heightLimit: 1000,
      innerWidth: window.innerWidth
    };
  },
  methods: {
    onResize() {
      console.log(window.innerWidth)
      this.innerWidth = window.innerWidth
    },
    getArticles(language: string) {
      this.articles = filterLanguageParsingDate(articles.articles as Article[], language) as Article[]

      this.getImages()
    },
    getUrl() {
      return window.location.origin
    },
    parseDate(date: string) {
      moment.locale(this.language)
      const dateParsed = moment(date)
      return dateParsed.fromNow()
    },
    getImages() {
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
    languageStorage.$onAction(({ name: useLanguage, args }: any) => {
      const url = args[0]
      this.language = url
      this.getArticles(url)
      this.$forceUpdate()
    }, true)
  },
  updated() {
    //this.getSources();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
});
</script>
  


<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000000;
}

:deep(a:link) {
  text-decoration: none;
}
.small-container{
  margin: 0 auto;
  margin-bottom: 30px;
  width: 22rem;
}
.post-card {
  margin: 0 auto;
  margin-bottom: 30px
}

.out-list {
  margin: 10px
}

.container-list {
  margin: 0 auto;

}</style>