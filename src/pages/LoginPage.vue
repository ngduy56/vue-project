<template>
  <LoginContainer @onSubmit="onSubmit" />
</template>

<script>
import LoginContainer from "@/containers/LoginContainer.vue";
import { mapActions } from "vuex";
export default {
  components: {
    LoginContainer,
  },
  methods: {
    ...mapActions({
      login: "authentication/login",
    }),
    onSubmit(data) {
      this.login(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
