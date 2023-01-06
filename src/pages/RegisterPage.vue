<template>
  <RegisterContainer @onSubmit="onSubmit" />
</template>

<script>
import RegisterContainer from "@/containers/RegisterContainer.vue";
import { mapActions } from "vuex";
export default {
  components: {
    RegisterContainer,
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
