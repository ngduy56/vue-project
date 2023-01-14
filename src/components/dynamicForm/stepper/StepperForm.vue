<template>
  <div class="step-block">
    <div class="step-list">
      <div class="line" :style="{ width: lineWidth }"></div>
      <StepItem
        v-for="item in dynamicForm"
        :key="item.num"
        :item="item"
        :currentStep="currentStep"
        @changeForm="changeForm(item.num)"
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
      if (this.dynamicForm[num - 1].isDone) {
        this.$emit("changeForm", num);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step-block {
  position: relative;
  width: 100%;
  .title {
    font-size: 32px;
    color: #333333;
    font-weight: 700;
    line-height: 39px;
  }
  .line {
    height: 1px;
    position: absolute;
    top: 20px;
    left: 70px;
    background-color: #dbdbdb;
  }
  .step-list {
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 24px 0;
    gap: 10px;
  }
}
</style>
