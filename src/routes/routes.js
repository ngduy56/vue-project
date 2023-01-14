import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import HomePage from "@/pages/HomePage";
import RequestContainer from "@/containers/RequestContainer.vue";
import DetailContainer from "@/containers/DetailContainer.vue";

export const routes = [
  { path: "/", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    children: [
      { path: "users", name: "users", component: RequestContainer },
      {
        path: "users/:id",
        name: "userDetail",
        component: DetailContainer,
      },
    ],
  },
  { path: "*", redirect: "/" },
];
