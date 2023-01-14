<template>
  <LoginContainer @onSubmit="onSubmit" />
</template>

<script>
import LoginContainer from "@/containers/LoginContainer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    LoginContainer,
  },
  computed: {
    ...mapGetters({
      logged: "authentication/logged",
    }),
  },
  watch: {
    logged() {
      if (this.logged) {
        this.$router.push({ path: "/home/users" });
      }
    },
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
