import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/posts",
      name: "posts",
      component: () => import("./components/listPost"),
      props: true
    },
    {
      path: "/posts/:id",
      name: "post-details",
      component: () => import("./components/Post"),
      props: true
    },
    {
      path: "/post/:id",
      name: "edit-post",
      component: () => import("./components/editPost"),
      props: true
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/addPost")
    }
  ]
});