<template>
  <div class="container">
    <div class="authentication">
      <AuthRegister />
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/features/register/RegisterForm.vue";
import AuthRegister from "@/components/AuthRegister.vue";
export default {
  components: {
    RegisterForm,
    AuthRegister,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";
.container {
  @include flex(center, center);
  width: 100%;
  height: 100vh;

  background-image: url("@/assets/why-mercury-it-background@2x.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .authentication {
    @include flex(center, center);
    position: relative;
    height: 270px;
    width: 768px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);
  }
}
</style>
