<template>
  <div class="user__item" @click="$emit('input', id)">
    <img class="user__avatar" :src="avatar" />
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
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    id() {
      return this.user.id;
    },
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
