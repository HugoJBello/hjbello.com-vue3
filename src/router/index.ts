import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import PapersMenuView from '../views/PapersMenuView.vue'
import ResearchMenuView from '../views/ResearchMenuView.vue'
import AboutMenuView  from '../views/AboutMenuView.vue'
import TeachingMenuView from '../views/TeachingMenuView.vue'
import ProjectsMenuView from '../views/ProjectsMenuView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:fileId',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/papers',
    name: 'papers',
    component: PapersMenuView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMenuView
  },
  {
    path: '/teaching',
    name: 'teaching',
    component: TeachingMenuView
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchMenuView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsMenuView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
