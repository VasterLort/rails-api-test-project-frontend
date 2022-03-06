import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../components/HomePage.vue";
import PostIndex from "../components/PostIndex.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/posts",
    name: "PostIndex",
    component: PostIndex,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router