import {
  INPUT_TEXT,
  INPUT_DATE,
  MAX_LENGTH,
  CITY_LIST,
  INPUT_AREA,
  MAX_LENGTH_AREA,
  INPUT_SALARY,
  MAX_LENGTH_NUMBER,
  INPUT_DROPDOWN_SEARCH,
  POSITION_LIST,
  AVATAR_IMG,
} from "@/constants/registerFormConstants";
const profileForm = [
  {
    label: "Username",
    readonly: true,
    view_type: INPUT_TEXT,
    key: "username",
    required: true,
    value: "",
    error: "",
    maxLength: MAX_LENGTH,
  },
  {
    label: "Fullname",
    readonly: true,
    view_type: INPUT_TEXT,
    required: true,
    value: "",
    key: "fullname",
    error: "",
    maxLength: MAX_LENGTH,
  },
  {
    label: "Birthday",
    readonly: true,
    view_type: INPUT_DATE,
    required: true,
    value: "",
    key: "birthday",
    error: "",
  },
  {
    label: "City",
    readonly: true,
    view_type: "input-dropdown",
    required: false,
    value: "",
    key: "address",
    cityList: CITY_LIST,
  },
  {
    label: "Position",
    readonly: true,
    view_type: INPUT_DROPDOWN_SEARCH,
    required: false,
    key: "position",
    value: [],
    optionList: POSITION_LIST,
  },
  {
    label: "Describe Yourself",
    readonly: true,
    view_type: INPUT_AREA,
    required: false,
    value: "",
    key: "describe_yourself",
    error: "",
    maxLength: MAX_LENGTH_AREA,
  },
  {
    label: "Avatar (only one)",
    view_type: AVATAR_IMG,
    required: false,
    value: "",
    key: "avatar",
  },
];
const finishedForm = [
  {
    label: "Reason",
    readonly: true,
    view_type: INPUT_AREA,
    required: true,
    value: "",
    key: "reason",
    error: "",
    maxLength: MAX_LENGTH_AREA,
  },
  {
    label: "Wish salary",
    readonly: true,
    view_type: INPUT_SALARY,
    required: true,
    value: "",
    key: "salary",
    error: "",
    maxLength: MAX_LENGTH_NUMBER,
  },
];
const registerDataForm = [
  {
    id: 1,
    num: 1,
    name: "Profile",
    data: profileForm,
    isDone: true,
  },
  {
    id: 2,
    num: 2,
    data: finishedForm,
    name: "Finished",
    isDone: true,
  },
];
export { registerDataForm };
