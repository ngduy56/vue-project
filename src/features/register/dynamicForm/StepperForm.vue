<template>
  <div class="step-block">
    <span class="title">Register</span>
    <div class="line" :style="{ width: lineWidth }"></div>
    <div class="step-list">
      <StepItem
        v-for="item in dynamicForm"
        :key="item.num"
        :item="item"
        :currentStep="currentStep"
        @changeForm="changeForm"
      />
    </div>
  </div>
</template>
<script>
import StepItem from "./StepItem.vue";

export default {
  props: ["dynamicForm", "currentStep"],
  components: {
    StepItem,
  },
  computed: {
    lineWidth() {
      return (this.dynamicForm.length - 1) * 120 + "px";
    },
  },
  methods: {
    changeForm(num) {
      this.$emit("changeForm", num);
    },
  },
};
</script>

<style lang="scss" scoped>
.step-block {
  position: relative;
  width: 100%;
  height: 148px;
  .title {
    font-size: 32px;
    color: #333333;
    font-weight: 700;
    line-height: 39px;
  }
  .line {
    height: 1px;
    position: absolute;
    top: 80px;
    left: 74px;
    background-color: #dbdbdb;
  }
  .step-list {
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 22px 0 32px 0;
    gap: 10px;
  }
}
</style>
