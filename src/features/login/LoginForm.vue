<template>
  <div class="login__form">
    <span>Login</span>
    <InputField :width="317" :placeholder="'Username'" />
    <InputField :width="317" :placeholder="'Password'" />
    <button class="btn__login">Login</button>
  </div>
</template>

<script>
import InputField from "@/components/sharedComponents/InputField.vue";

export default {
  components: {
    InputField,
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
  }
}
</style>
