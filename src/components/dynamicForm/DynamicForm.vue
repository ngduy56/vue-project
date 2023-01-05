<template>
  <div class="register__form">
    <span class="title">{{ title }}</span>
    <StepperForm
      :dynamicForm="dynamicForm"
      :currentStep="currentStep"
      @changeForm="changeForm"
    />
    <DynamicContentForm
      :dynamicForm="dynamicForm"
      :formData="formData"
      :currentStep="currentStep"
      @input="onChangeValue"
      @onUploadFile="onUploadFile"
      @onRemoveFile="onRemoveFile"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
      @nextStep="nextStep"
      @prevStep="prevStep"
    />
  </div>
</template>

<script>
import StepperForm from "@/components/dynamicForm/stepper/StepperForm.vue";
import DynamicContentForm from "@/components/dynamicForm/formContent/DynamicContentForm.vue";
export default {
  data() {
    return {
      currentStep: 1,
    };
  },
  props: ["title", "dynamicForm"],
  components: { StepperForm, DynamicContentForm },
  computed: {
    formData() {
      const activeStep = this.dynamicForm.find(
        (item) => item.num === this.currentStep
      );
      return activeStep.data;
    },
    isLastForm() {
      return this.currentStep === this.dynamicForm.length;
    },
  },
  methods: {
    onChangeValue(value, index) {
      this.formData[index].value = value;
      this.formData[index].error = "";
    },
    checkFileValue(firstArr, secondArr) {
      let isValid = true;
      for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
          if (firstArr[i].lastModified === secondArr[j]?.lastModified) {
            isValid = false;
          }
        }
      }
      return isValid;
    },
    onUploadFile(files) {
      this.formData.map((item) => {
        if (item.key === "avatar") {
          let isValid = this.checkFileValue(files, item.value);
          if (isValid) {
            item.value = item.value.concat(files);
          }
        }
      });
    },
    onRemoveFile(lastModified) {
      this.formData.map((item) => {
        if (item.key === "avatar") {
          const index = item.value.findIndex(
            (child) => child.lastModified === lastModified
          );
          item.value.splice(index, 1);
        }
      });
    },
    onAddChosen(option) {
      this.formData.map((item) => {
        if (item.key === "position") {
          let currentValue = item.value.filter(
            (child) => child.codename === option.codename
          );
          if (currentValue.length <= 0) {
            item.value.push(option);

            item.optionList.map((pos) => {
              if (pos.codename === option.codename) {
                pos.isChosen = true;
              }
            });
          }
        }
      });
    },
    onRemoveChosen(chosenItem) {
      this.formData.map((item) => {
        if (item.key === "position") {
          const index = item.value.findIndex(
            (child) => child.codename === chosenItem.codename
          );
          item.value.splice(index, 1);

          item.optionList.map((pos) => {
            if (pos.codename === chosenItem.codename) {
              pos.isChosen = false;
            }
          });
        }
      });
    },
    filterValue(form) {
      let data = {};
      let childValue = {};
      form.forEach((item) => {
        if (item.key) {
          data[item.key] = [];
        }
        item.data.forEach((child) => {
          childValue = {};
          if (child.childrens && child.childrens.length > 0) {
            child.childrens.forEach((i) => {
              childValue[i.key] = i.value;
            });
            data[item.key].push(childValue);
          } else {
            data[child.key] = child.value;
          }
        });
      });
      return data;
    },
    setCurrentStep(index) {
      this.currentStep = index;
    },
    resetForm() {
      this.dynamicForm.forEach((item) => {
        item.isDone = false;
        item.data.forEach((child) => {
          if (typeof child.value === "string") {
            child.value = "";
          } else if (Array.isArray(child.value)) {
            child.value = [];
          }
        });
      });
    },
    nextStep() {
      if (this.isLastForm) {
        const data = this.filterValue(this.dynamicForm);
        this.$emit("onChange", data);
        this.resetForm();
      }
      if (!this.isLastForm) {
        this.doneStep(this.currentStep);
      }
      const index =
        this.currentStep < this.dynamicForm.length
          ? this.currentStep + 1
          : this.dynamicForm.length;
      this.setCurrentStep(index);
    },
    prevStep() {
      const index = this.currentStep > 0 ? this.currentStep - 1 : 1;
      this.setCurrentStep(index);
    },
    changeForm(num) {
      this.setCurrentStep(num);
    },
    doneStep(num) {
      this.dynamicForm.forEach((item) => {
        if (item.num === num) {
          item.isDone = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";
.register__form {
  width: 596px;
  max-height: 683px;
  position: absolute;

  padding: 24px 32px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .title {
    font-size: 32px;
    color: #333333;
    font-weight: 700;
    line-height: 39px;
  }
}
</style>
