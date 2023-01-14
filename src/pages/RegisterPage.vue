<template>
  <RegisterContainer @onSubmit="onSubmit" />
</template>

<script>
import RegisterContainer from "@/containers/RegisterContainer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    RegisterContainer,
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
      signUp: "authentication/signUp",
    }),
    onSubmit(data) {
      this.signUp(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
