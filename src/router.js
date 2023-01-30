import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "@/routes/routes";
import { getUserId } from "./utils/localStorage";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes,
});
// router.beforeEach((to, from, next) => {
//   const userId = getUserId();
//   const publicPages = ["/", "/register", "/home"];
//   const authRequired = publicPages.includes(to.path);
//   if (authRequired && userId) {
//     next({ path: "/home/users" });
//   } else if (!authRequired && !userId) {
//     next({ path: "/register" });
//   } else next();
// });

router.beforeEach((to, from, next) => {
  const userId = getUserId();
  if (
    (to.path === "/" || to.path === "/register" || to.path === "/home") &&
    userId
  ) {
    next({ path: "/home/users" });
  } else if (to.path !== "/" && to.path !== "/register" && !userId) {
    next({ path: "/register" });
  } else next();
});
