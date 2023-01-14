<template>
  <div class="actions">
    <button class="btn__approve" @click="approve">Approve</button>
    <button class="btn__reject" @click="reject">Reject</button>
  </div>
</template>

<script>
export default {
  methods: {
    approve() {
      let isApproved = true;
      this.$emit("approve", isApproved);
    },
    reject() {
      this.$emit("reject");
    },
  },
};
</script>

<style scoped lang="scss">
.actions {
  button {
    width: 102px;
    height: 40px;
    background: #dcdcdc;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #333333;
    font-weight: 400;
  }
  .btn__approve {
    background: #48647f;
    color: #ffffff;
    font-weight: 700;
  }
  .btn__reject {
    color: #f86868;
    margin-left: 16px;
    background: #ffffff;
    border: 1px solid #ffbdbd;
  }
}
</style>
