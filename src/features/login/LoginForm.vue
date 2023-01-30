<template>
  <div class="login__form">
    <span>Login</span>
    <DynamicInputView
      v-for="(item, index) in loginForm"
      :key="item.key"
      :item="item"
      :value="item.value"
      @input="(value) => onChange(value, index)"
    />
    <button class="btn__login" @click="onSubmit">Login</button>
  </div>
</template>

<script>
import DynamicInputView from "@/components/dynamicForm/formContent/DynamicInputView.vue";
import { loginForm } from "@/features/login/loginForm";
import { checkLength, checkRequired } from "@/utils/ValidateForm";
import toast from "@/components/toast/toast";
export default {
  data() {
    return {
      toast,
      isValid: false,
      loginForm,
    };
  },
  components: {
    DynamicInputView,
  },
  methods: {
    onChange(value, index) {
      this.loginForm[index].value = value;
      this.loginForm[index].error = "";
    },
    onSubmit() {
      this.validate();
      let error = this.loginForm.filter((item) => item.error);
      if (!error.length) {
        this.isValid = true;
      }
      if (this.isValid) {
        const data = this.filterValue(this.loginForm);
        this.$emit("onSubmit", data);
        this.resetForm();
      } else {
        toast.addToast({
          title: "Error login",
          type: "error",
          message: "Something is wrong. Please check again!",
          duration: 2000,
        });
      }
    },
    validate() {
      this.loginForm.forEach((item) => {
        item.error = "";
      });
      this.isValid = false;
      this.loginForm.forEach((item) => {
        if (item.required) {
          checkRequired(item);
        }
        if (item.maxLength) {
          checkLength(item);
        }
      });
    },
    filterValue(form) {
      let data = {};
      form.forEach((item) => {
        data[item.key] = item.value;
      });
      return data;
    },
    resetForm() {
      this.loginForm.forEach((item) => {
        item.value = "";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";
.login__form {
  width: 382px;
  height: 476px;

  position: absolute;
  top: -103px;
  transform: translateX(85px);
  @include flex(center, center);
  flex-direction: column;
  gap: 24px;

  padding: 24px 32px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  span {
    font-size: 32px;
    color: #333333;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 39px;
  }
  .btn__login {
    width: 317px;
    height: 40px;

    padding: 10px;
    border: none;
    background: #627d98;
    border-radius: 4px;

    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
  }
  ::v-deep {
    .block {
      margin-top: 0;
    }
  }
}
</style>
