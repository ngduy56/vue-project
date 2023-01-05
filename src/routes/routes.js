import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import HomePage from "@/pages/HomePage";
import RequestContainer from "@/containers/RequestContainer.vue";

export const routes = [
  { path: "/", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,

    children: [
      { path: "", name: "request", component: RequestContainer },
      { path: "requests", name: "request", component: RequestContainer },
      {
        path: "requests:id",
        name: "requestDetail",
        component: RequestContainer,
      },
    ],
  },
];
