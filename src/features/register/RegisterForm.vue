<template>
  <div class="register__form">
    <StepperForm :dynamicForm="dynamicForm" @changeForm="changeForm" />
    <DynamicForm
      :dynamicForm="dynamicForm"
      :formData="formData"
      :numStep="numStep"
      @input="onChangeValue"
      @onUploadFile="onUploadFile"
      @onRemoveFile="onRemoveFile"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
      @changeForm="changeForm"
      @nextStep="nextStep"
      @doneStep="doneStep"
    />
  </div>
</template>

<script>
import { dynamicForm } from "@/features/register/dynamicForm/registerForm";
import StepperForm from "@/features/register/dynamicForm/StepperForm.vue";
import DynamicForm from "@/features/register/dynamicForm/DynamicForm.vue";
export default {
  data() {
    return {
      numStep: 1,
      dynamicForm,
    };
  },
  components: { StepperForm, DynamicForm },
  computed: {
    formData() {
      const currentStep = this.dynamicForm.find(
        (item) => item.num === this.numStep
      );
      return currentStep.data;
    },
    isLastForm() {
      return this.numStep === this.dynamicForm.length;
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
    nextStep() {
      if (this.isLastForm) {
        const data = this.filterValue(this.dynamicForm);
        console.log(data);
        this.$router.push({ path: "/" });

        // setTimeout(() => {
        let steps = document.querySelectorAll(".step-num");
        steps.forEach((i) => {
          i.classList.remove("done");
          i.classList.remove("active");
        });

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
        console.log(this.dynamicForm);
        // }, 0);
      }
    },
    changeForm(num) {
      if (num < this.numStep) {
        let itemStep = document.querySelectorAll(".step-num");
        let index = this.dynamicForm.findIndex((item) => item.num === num);
        itemStep[index + 1]?.classList.remove("active");
        itemStep[index]?.classList.add("active");

        this.dynamicForm.forEach((item, index) => {
          if (item.isDone) {
            itemStep[index].classList.add("done");
          }
        });
      }
      this.numStep = num;
    },
    doneStep(num) {
      this.dynamicForm.forEach((item) => {
        if (item.num === num) {
          item.isDone = true;
        }
      });
      let itemStep = document.querySelectorAll(".step-num");
      let index = this.dynamicForm.findIndex((item) => item.num === num);
      itemStep[index]?.classList.remove("active");
      itemStep[index]?.classList.add("done");
      itemStep[index + 1]?.classList.add("active");
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
  flex-direction: column;
  gap: 24px;

  padding: 24px 32px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>
