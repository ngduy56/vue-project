<template>
  <div class="sidebar">
    <div class="user">
      <img class="user__avatar" :src="avatar" alt="avatar" />
      <span class="user__name">{{ fullname }}</span>
      <span class="user__pos">{{ position }}</span>
    </div>
    <div class="task">
      <p class="active">Requests</p>
      <p @click="logout">Log out</p>
    </div>
  </div>
</template>

<script>
import toast from "@/components/toast/toast";
export default {
  data() {
    return {
      toast,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    avatar() {
      return this.user.avatar
        ? `http://localhost:9999/uploads/${this.user.avatar}`
        : "";
    },
    fullname() {
      return this.user.fullname;
    },
    position() {
      return this.user.position;
    },
  },
  methods: {
    logout() {
      toast.addToast({
        title: "Success",
        type: "success",
        position: "bottom-left",
        message: "Successfully!",
        duration: 2000,
      });
      // this.$emit("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss";

.sidebar {
  height: 100vh;
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #dcdcdc;

  .user {
    @include flex(flex-start, center);
    flex-direction: column;
    width: 100%;
    padding: 16px;
    gap: 12px;

    &__avatar {
      width: 150px;
      height: 150px;
      border: 1px solid #dcdcdc;
      border-radius: 50%;
    }
    &__name {
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
    }
    &__pos {
      font-size: 14px;
      color: #555555;
      text-align: center;
    }
  }
  .task {
    width: 100%;

    p {
      width: 100%;
      height: 40px;
      background: transparent;

      font-weight: 700;
      font-size: 16px;
      line-height: 20px;

      margin: 0;
      padding: 10px 0 10px 24px;
      cursor: pointer;
    }
    .active {
      color: #0063c3;
      background: rgba(123, 189, 255, 0.16);
    }
  }
}
</style>
