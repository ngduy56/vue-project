import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

export const routes = [
  { path: "/", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
];
