<template>
  <div class="block">
    <InputField
      v-if="item.view_type === INPUT_TEXT"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :maxLength="item.maxLength"
      :error="item.error"
      @input="onChange"
    />
    <InputDate
      v-if="item.view_type === INPUT_DATE"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <DropdownList
      v-if="item.view_type === INPUT_DROPDOWN"
      :value="valueLocal"
      :label="item.label"
      :list="item.cityList"
      :required="item.required"
      @input="onChange"
    />
    <PositionInput
      v-if="item.view_type === INPUT_DROPDOWN_SEARCH"
      :label="item.label"
      :required="item.required"
      :optionList="item.optionList"
      :chosenList="item.value"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
    />
    <AboutArea
      v-if="item.view_type === INPUT_AREA"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      :maxLength="item.maxLength"
      @input="onChange"
    />
    <Dropzone
      v-if="item.view_type === IMG_DROPZONE"
      :label="item.label"
      :required="item.required"
      :maxNumber="item.maxNumber"
      :maxSize="item.maxSize"
      :typeFile="item.typeFile"
      :fileList="item.value"
      @onRemove="onRemoveFile"
      @onUpload="onUploadFile"
    />
    <SalaryInput
      v-if="item.view_type === INPUT_SALARY"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
import InputDate from "@/components/InputDate.vue";
import DropdownList from "@/components/DropdownList.vue";
import PositionInput from "@/components/PositionInput.vue";
import AboutArea from "@/components/TextArea.vue";
import Dropzone from "@/components/dropzone/DropzoneComp.vue";
import SalaryInput from "@/components/SalaryInput.vue";
import {
  INPUT_TEXT,
  INPUT_SALARY,
  INPUT_DATE,
  INPUT_DROPDOWN,
  INPUT_DROPDOWN_SEARCH,
  INPUT_AREA,
  IMG_DROPZONE,
} from "@/constants/registerFormConstants";
export default {
  data() {
    return {
      INPUT_TEXT,
      INPUT_SALARY,
      INPUT_DATE,
      INPUT_DROPDOWN,
      INPUT_DROPDOWN_SEARCH,
      INPUT_AREA,
      IMG_DROPZONE,

      valueLocal: "",
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: [String, Array],
    },
  },
  components: {
    InputField,
    InputDate,
    DropdownList,
    PositionInput,
    AboutArea,
    SalaryInput,
    Dropzone,
  },
  watch: {
    value: {
      handler(val) {
        this.valueLocal = val;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    onChange(value) {
      this.$emit("input", value);
    },
    onUploadFile(files) {
      this.$emit("onUploadFile", files);
    },
    onRemoveFile(lastModified) {
      this.$emit("onRemoveFile", lastModified);
    },
    onAddChosen(option) {
      this.$emit("onAddChosen", option);
    },
    onRemoveChosen(chosenItem) {
      this.$emit("onRemoveChosen", chosenItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  position: relative;
  margin-top: 15.85px;

  &:first-child {
    margin-top: 0;
  }
}
</style>
