<template>
  <div class="details-container">
    <BackIcon @click.native="backToHome" />
    <UserItem :user="currentUser" />
    <RegisterForm :dynamicForm="registerDataForm" />
    <RequestActions @approve="approvalAction" @reject="approvalAction" />
  </div>
</template>

<script>
import { registerDataForm } from "@/features/requests/registerDataForm";
import UserItem from "@/features/requests/UserItem.vue";
import RegisterForm from "@/components/dynamicForm/DynamicForm.vue";
import BackIcon from "@/components/icons/BackIcon.vue";
import RequestActions from "@/features/requests/RequestActions.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      registerDataForm,
    };
  },
  components: {
    BackIcon,
    RegisterForm,
    UserItem,
    RequestActions,
  },
  async created() {
    const id = this.$route.params.id;
    await this.getUser({ id: id, reload: false });
    this.fillDataForm();
  },
  beforeDestroy() {
    this.resetForm();
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "authentication/getUser",
      approval: "authentication/approval",
    }),
    backToHome() {
      this.$router.push({ path: "/home/users" });
    },
    approvalAction(isApproved) {
      this.approval({ id: this.currentUser.id, status: isApproved ? 1 : 2 });
      this.backToHome();
    },
    fillDataForm() {
      let user = JSON.parse(JSON.stringify(this.currentUser));
      const newPosition = [];
      const positionValue = user.position.split(", ");
      positionValue.forEach((item, index) => {
        let value = {
          code: index,
          codename: item.toLowerCase(),
          name: item,
          isChosen: true,
        };
        newPosition.push(value);
      });
      user.position = newPosition;

      const keys = Object.keys(user);
      const values = Object.values(user);

      this.registerDataForm.forEach((item) => {
        item.data.forEach((child) => {
          keys.forEach((key) => {
            const index = keys.indexOf(key);
            if (child.key === key) {
              child.value = values[index];
            }
          });
        });
      });
    },
    resetForm() {
      this.registerDataForm.forEach((item) => {
        item.isDone = false;
        item.data.forEach((child) => {
          if (typeof child.value === "string") {
            child.value = "";
          } else if (Array.isArray(child.value)) {
            child.value = [];
          }
        });
      });
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
    position: relative;
    width: 100%;
    flex: 1;
    padding: 0;
    background-color: transparent;
    box-shadow: none;

    display: flex;
    flex-direction: column;
    gap: 0;
    .form {
      height: 100%;
      flex: 1;
      .container {
        min-height: 100%;
      }
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
