import { NUMBER_REGEX } from "@/constants/registerFormConstants";
const checkRequired = (item) => {
  if (item.required && !item.value) {
    if (item.label) {
      item.error = `${item.label} is required!`;
    } else {
      item.error = "This information is required!";
    }
  }
};
const checkLength = (item) => {
  if (item.value.length > item.maxLength) {
    item.error = `${item.label} has max length is ${item.maxLength} characters`;
  }
};
const checkDate = (item) => {
  const dateTime = new Date(item.value).getTime();
  const currentDate = new Date().getTime();
  if (dateTime > currentDate) {
    item.error = `${item.label} is invalid!`;
  }
};
const checkSalary = (item) => {
  let salary = item.value;
  if (salary.toString().length === 0) {
    item.error = `${item.label} is required!`;
  }
  if (salary.toString().length > 0 && !NUMBER_REGEX.test(salary)) {
    item.error = `${item.label} must be Number`;
  }
  if (salary.toString().length > item.maxLength) {
    item.error = `${item.label} has maxixum ${item.maxLength} numbers`;
  }
};
const checkPassword = (formData) => {
  const password = formData.find((item) => item.key === "password");
  const rePassword = formData.find((item) => item.key === "re-password");
  if (password.value !== rePassword.value) {
    password.error = `${password.label} is not match`;
    rePassword.error = `${rePassword.label} is not match`;
  }
};
export { checkRequired, checkLength, checkDate, checkSalary, checkPassword };
