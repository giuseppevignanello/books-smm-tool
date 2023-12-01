import { createRouter, createWebHistory } from "vue-router";
import SingleBook from "./pages/singleBook.vue";
import AppHome from "./pages/AppHome.vue";
import SocialPost from "./pages/SocialPost.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/book/:id",
      name: "single-book",
      component: SingleBook,
    },
    {
      path: "/social-post/:id",
      name: "social-post",
      component: SocialPost,
    },
  ],
});

export { router };
