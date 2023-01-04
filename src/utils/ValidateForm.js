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
const checkInvalidTime = (child) => {
  const currentDate = new Date().getTime();
  const startDate = new Date(child.value.from).getTime();
  const endDate = new Date(child.value.to).getTime();
  if (!child.value.from || !child.value.to) {
    child.error = `${child.label} is required!`;
  }
  if (
    startDate > currentDate ||
    endDate > currentDate ||
    startDate > endDate ||
    startDate === endDate
  ) {
    child.error = `${child.label} is invalid!`;
  }
};

export { checkRequired, checkLength, checkDate, checkSalary, checkInvalidTime };
