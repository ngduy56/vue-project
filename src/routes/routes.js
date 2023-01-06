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
      { path: "", name: "requests", component: RequestContainer },
      { path: "requests", name: "requests", component: RequestContainer },
      {
        path: "requests:id",
        name: "requestDetail",
        component: DetailContainer,
      },
    ],
  },
];
