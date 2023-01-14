import {
  INPUT_TEXT,
  MAX_LENGTH,
  MAX_LENGTH_PASSWORD,
} from "@/constants/registerFormConstants";

const loginForm = [
  {
    label: "Username",
    view_type: INPUT_TEXT,
    placeholder: "Username",
    key: "username",
    required: true,
    value: "",
    error: "",
    width: 317,
    maxLength: MAX_LENGTH,
  },
  {
    label: "Password",
    placeholder: "Password",
    view_type: INPUT_TEXT,
    key: "password",
    type: "password",
    required: true,
    value: "",
    error: "",
    width: 317,
    maxLength: MAX_LENGTH_PASSWORD,
  },
];
export { loginForm };
