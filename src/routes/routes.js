const LoginPage = () =>
  import(/* webpackChunkName: "Login" */ "@/pages/LoginPage");
const RegisterPage = () =>
  import(/* webpackChunkName: "Regis" */ "@/pages/RegisterPage");
const HomePage = () =>
  import(/* webpackChunkName: "Home" */ "@/pages/HomePage");
const RequestContainer = () =>
  import(/* webpackChunkName: "RequestC" */ "@/containers/RequestContainer");
const DetailContainer = () =>
  import(/* webpackChunkName: "DetailsC" */ "@/containers/DetailContainer");

export const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    children: [
      {
        path: "users",
        name: "users",
        component: RequestContainer,
      },
      {
        path: "users/:id",
        name: "userDetail",
        component: DetailContainer,
      },
    ],
  },
  { path: "*", redirect: "/register" },
];
