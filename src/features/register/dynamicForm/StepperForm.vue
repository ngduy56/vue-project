<template>
  <div class="step-block">
    <span class="title">Register</span>
    <div class="line" :style="{ width: lineWidth }"></div>
    <div class="step-list">
      <StepItem
        :dynamicForm="dynamicForm"
        v-for="(item, index) in dynamicForm"
        :key="item.num"
        :item="item"
        :index="index"
        @changeForm="changeForm"
      />
    </div>
  </div>
</template>
<script>
import StepItem from "./StepItem.vue";

export default {
  props: ["dynamicForm"],
  components: {
    StepItem,
  },
  mounted() {
    let itemStep = document.querySelectorAll(".step-num");
    itemStep[0].classList.add("active");

    this.dynamicForm.map((item, index) => {
      if (item.isDone) {
        itemStep[index].classList.add("done");
      } else {
        itemStep[index].classList.remove("done");
      }
    });
  },
  computed: {
    lineWidth() {
      return (this.dynamicForm.length - 1) * 120 + "px";
    },
  },
  methods: {
    changeForm(num, index) {
      this.$emit("changeForm", num);

      let itemStep = document.querySelectorAll(".step-num");
      itemStep.forEach((i) => {
        i.classList.remove("active");
      });
      itemStep[index].classList.add("active");
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
