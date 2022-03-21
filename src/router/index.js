import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue';
import PostIndex from '../components/PostIndex.vue';
import LoginPage from '../components/LoginPage.vue';
import SignUpPage from '../components/SignUpPage.vue';
import ProfilePage from '../components/ProfilePage.vue';
import NewPasswordPage from '../components/NewPasswordPage.vue';

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/posts",
    name: "PostIndex",
    component: PostIndex
  },
  {
    path: "/user/password/edit",
    name: "NewPasswordPage",
    component: NewPasswordPage
  },
  {
    path: "/sign_in",
    name: "LoginPage",
    component: LoginPage,
    props: route => ({ query: route.query.status_token })
  },
  {
    path: "/sign_up",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router