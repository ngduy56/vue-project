<template>
  <div class="register-block">
    <span>Don’t have an account?</span>
    <button class="btn__register" @click="navigate">Register</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";
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
    cursor: pointer;
  }
}
</style>
