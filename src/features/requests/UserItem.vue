<template>
  <div class="user__item">
    <img class="user__avatar" :src="avatarUser" />
    <div class="user__info">
      <p class="user__name">
        {{ fullname }}
      </p>
      <p class="user__pos">
        {{ position }}
      </p>
    </div>
  </div>
</template>

<script>
import avatarDefault from "@/assets/avatar.png";
import { BASE_URL } from "@/constants/detailConstants";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    avatarUser() {
      return this.user.avatar
        ? `${BASE_URL}${this.user.avatar}`
        : avatarDefault;
    },
    fullname() {
      return this.user.fullname;
    },
    position() {
      return this.user.position;
    },
  },
};
</script>

<style lang="scss" scoped>
.user__item {
  display: flex;
  width: 100%;
  cursor: pointer;

  p {
    margin: 0;
    line-height: 20px;
  }
  .user__avatar {
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }
  .user__info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .user__name {
      font-size: 14px;
    }
    .user__pos {
      font-size: 12px;
      color: #555555;
    }
  }
}
</style>
