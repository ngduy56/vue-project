import { NUM_BYTE, REGEX_FILE_EXTENSION } from "@/constants/dropzoneConstants";

export const Validate = (files, typeFile, errors, maxNumber, maxSize) => {
  let isValid = true;
  if (files.length > maxNumber) {
    errors.number = `The maximum file uploaded is ${maxNumber}`;
    isValid = false;
  } else isValid = true;

  for (let i = 0; i < files.length; i++) {
    if (Math.ceil(files[i].size / NUM_BYTE) > maxSize) {
      errors.size = `The maximum file size is ${maxSize / NUM_BYTE} MB`;
      isValid = false;
    }
    let filterFileExtension = files[i].name.match(REGEX_FILE_EXTENSION)[0];
    if (!typeFile.includes(filterFileExtension)) {
      errors.type = `The type file must be ${typeFile.join(", ")}.`;
      isValid = false;
    }
  }
  return isValid;
};
