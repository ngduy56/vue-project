<template>
  <div class="container">
    <div class="authentication">
      <div class="register-block">
        <span>Don’t have an account?</span>
        <button class="btn__register">Register</button>
      </div>
    </div>
    <div class="login__form">
      <span>Login</span>
      <InputField :width="317" :placeholder="'Username'" />
      <InputField :width="317" :placeholder="'Password'" />
      <button class="btn__login">Login</button>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
export default {
  components: {
    InputField,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";
.container {
  @include flex(center, center);
  width: 100vw;
  height: 100vh;

  background-image: url("@/assets/why-mercury-it-background@2x.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .authentication {
    position: relative;
    height: 270px;
    width: 768px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);

    .register-block {
      width: 100%;
      height: 100%;
      @include flex(center, flex-end);
      flex-direction: column;
      padding: 32px;

      span {
        width: 160px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 8px;
      }
      .btn__register {
        width: 160px;
        height: 32px;
        font-size: 14px;
        color: #555555;
        border: 1px solid #555555;
        border-radius: 4px;
      }
    }
  }
  .login__form {
    position: absolute;
    width: 382px;
    height: 476px;
    top: 146px;
    left: 381px;

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
}
</style>
