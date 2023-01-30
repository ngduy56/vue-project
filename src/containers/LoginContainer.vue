<template>
  <div class="login-container">
    <div class="authentication">
      <AuthRegister />
      <LoginForm @onSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/features/login/LoginForm.vue";
import AuthRegister from "@/components/sharedComponents/AuthRegister.vue";

export default {
  components: {
    LoginForm,
    AuthRegister,
  },
  methods: {
    onSubmit(data) {
      this.$emit("onSubmit", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";
.login-container {
  @include flex(center, center);
  width: 100%;
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
  }
}
</style>
