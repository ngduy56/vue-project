<template>
  <div class="input-label">
    <span class="require" v-if="required">Must</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.input-label {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 5.76px;

  .require {
    padding: 0px 8px;
    gap: 10px;
    background: #627d98;
    border-radius: 3px;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
  }
  .label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #333333;
  }
}
</style>
