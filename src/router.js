import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "@/routes/routes";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes,
});
