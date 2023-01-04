<template>
  <div class="step-item">
    <span @click="changeForm" class="step-num">{{ item.num }} </span>
    <div class="step-title">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
    dynamicForm: {
      type: Array,
    },
  },
  methods: {
    changeForm() {
      this.$emit("changeForm", this.item.num, this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 115px;
  height: 67px;

  .step-title {
    margin-top: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  .step-num {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #dbdbdb;
    z-index: 20;

    &.active {
      scale: 1.2;
      background-color: #617d98;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .done {
    background-color: #617d98;
    scale: 1;
  }
}
</style>
