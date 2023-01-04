<template>
  <div class="form">
    <div class="container">
      <DynamicInputView
        v-for="(item, index) in formData"
        :key="item.key"
        :item="item"
        :value="item.value"
        @input="(value) => onChangeValue(value, index)"
        @onUploadFile="onUploadFile"
        @onRemoveFile="onRemoveFile"
        @onAddChosen="onAddChosen"
        @onRemoveChosen="onRemoveChosen"
      />
    </div>
    <div class="navigate-block">
      <button
        class="btn__next"
        :class="{ active: isEnable }"
        :disabled="!isEnable"
        @click="nextStep"
      >
        {{ isLastForm ? "Finish" : "Next" }}
      </button>
      <button v-if="!isFirstForm" class="btn__prev" @click="previousStep">
        Back
      </button>
      <button class="btn__navigate" @click="navigateLogin">
        Back to Login
      </button>
    </div>
  </div>
</template>

<script>
import DynamicInputView from "@/features/register/dynamicForm/DynamicInputView.vue";
import {
  checkDate,
  checkLength,
  checkRequired,
  checkSalary,
} from "@/utils/ValidateForm";
import { INPUT_DATE, INPUT_SALARY } from "@/constants/registerFormConstants";

export default {
  props: {
    dynamicForm: {
      type: Array,
    },
    formData: {
      type: Array,
      required: true,
    },
    numStep: {
      type: Number,
    },
  },
  components: {
    DynamicInputView,
  },
  computed: {
    isFirstForm() {
      return this.numStep === 1;
    },
    isLastForm() {
      return this.numStep === this.dynamicForm.length;
    },
    formLength() {
      return this.formData.length > 0;
    },
    isEnable() {
      return this.formLength;
    },
  },
  watch: {
    formData: {
      handler() {
        this.isValid = false;
      },
      deep: true,
    },
    numStep: {
      handler() {
        this.isValid = false;
      },
      deep: true,
    },
  },
  methods: {
    onChangeValue(value, index) {
      this.$emit("input", value, index);
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
    validate() {
      this.formData.forEach((item) => {
        item.error = "";
      });
      this.formData.forEach((item) => {
        if (item.required) {
          checkRequired(item);
        }
        if (item.maxLength) {
          checkLength(item);
        }
        if (item.view_type === INPUT_DATE) {
          checkDate(item);
        }
        if (item.view_type === INPUT_SALARY) {
          checkSalary(item);
        }
      });
    },
    nextStep() {
      this.validate();
      let error = this.formData.filter((item) => item.error);
      if (!error.length) {
        this.isValid = true;
      }
      if (this.isValid) {
        this.$emit("doneStep", this.numStep);
        this.$emit("nextStep");
        this.$emit("changeForm", this.numStep + 1);
      } else {
        console.log("co loi");
      }
    },
    previousStep() {
      this.$emit("changeForm", this.numStep - 1);
    },
    navigateLogin() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 530px;

  .container {
    width: 100%;
    max-height: 418px;
    overflow: scroll;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 16px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #dcdcdc;

    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-track {
      background: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
      background: #dcdcdc;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #666666;
    }
  }
  .navigate-block {
    .btn__next {
      width: 102px;
      height: 40px;
      background: #dcdcdc;
      border-radius: 3px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      outline: none;
      border: none;
      color: #ffffff;
      margin-top: 24px;

      &.active {
        background: #627d98;
        cursor: pointer;
      }
    }
    .btn__prev {
      width: 102px;
      height: 40px;
      background: #dcdcdc;
      border-radius: 3px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      border: none;
      outline: none;
      margin: 24px 0 0 10px;
      cursor: pointer;
      color: #333333;
      font-weight: 400;
    }
    .btn__navigate {
      float: right;
      margin: 24px 0 0 10px;
      border: none;
      width: 150px;
      height: 40px;
      background: #dcdcdc;
      border-radius: 3px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
    }
  }
}
</style>
