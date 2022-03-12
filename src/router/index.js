import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../components/HomePage.vue";
import PostIndex from "../components/PostIndex.vue";
import UpdatePassword from "../components/UpdatePassword.vue";
import PasswordChangeForm from "../components/PasswordChangeForm.vue";
import EmailChangeForm from "../components/EmailChangeForm.vue";
import ReceiveConfirmation from "../components/ReceiveConfirmation.vue";
import DeleteAccount from "../components/DeleteAccount.vue";

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
    path: "/users/password/edit",
    name: "UpdatePassword",
    component: UpdatePassword
  },
  {
    path: "/users/edit",
    name: "PasswordChangeForm",
    component: PasswordChangeForm
  },
  {
    path: "/users/email/edit",
    name: "EmailChangeForm",
    component: EmailChangeForm
  },
  {
    path: "/users/confirmation",
    name: "ReceiveConfirmation",
    component: ReceiveConfirmation
  },
  {
    path: "/users/delete",
    name: "DeleteAccount",
    component: DeleteAccount
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router