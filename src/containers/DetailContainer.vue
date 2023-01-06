<template>
  <div class="details-container">
    <BackIcon @click.native="backToRequests" />
    <UserItem />
    <RegisterForm :dynamicForm="registerForm" />
    <RequestActions />
  </div>
</template>

<script>
import { registerForm } from "@/features/register/registerForm";
import UserItem from "@/features/requests/UserItem.vue";
import RegisterForm from "@/components/dynamicForm/DynamicForm.vue";
import BackIcon from "@/components/icons/BackIcon.vue";
import RequestActions from "@/features/requests/RequestActions.vue";
export default {
  data() {
    return {
      registerForm,
    };
  },
  components: {
    BackIcon,
    RegisterForm,
    UserItem,
    RequestActions,
  },
  methods: {
    backToRequests() {
      this.$router.push({ name: "requests" });
    },
  },
};
</script>

<style lang="scss" scoped>
.details-container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  padding: 24px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
::v-deep {
  .dynamic__form {
    width: 100%;
    position: relative;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    .container {
      min-height: 315px;
      max-height: 315px;
    }
    .step-list {
      margin-top: 0;
    }
    .navigate-block {
      display: none;
    }
  }
  .user__item {
    background: #f7f7f7;
    padding: 16px;
  }
}
</style>
