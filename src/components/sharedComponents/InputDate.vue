<template>
  <div class="input-date">
    <InputLabel
      :label="label"
      :required="required"
      :style="{ width: `${width}px` }"
    />
    <input
      class="input"
      type="date"
      :class="{ 'in-valid': error }"
      v-model="valueLocal"
      @input="onChange"
    />
    <span v-if="error" class="error-vali">{{ error }}</span>
  </div>
</template>
<script>
import InputLabel from "@/components/sharedComponents/InputLabel.vue";
export default {
  data() {
    return {
      valueLocal: "",
    };
  },
  watch: {
    value: {
      handler(val) {
        this.valueLocal = val;
      },
      deep: true,
      immediate: true,
    },
  },
  props: {
    width: {
      type: Number,
      default: 450,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    error: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  components: {
    InputLabel,
  },
  methods: {
    onChange() {
      this.$emit("input", this.valueLocal);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-date {
  display: flex;
  flex-direction: column;

  .input {
    font-family: "Inter", sans-serif;
    width: 130px;
    height: 40px;
    outline: none;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    padding: 0 8px 0 6px;

    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }

  .in-valid {
    border-color: red;
  }
  .error-vali {
    margin-top: 2px;
    color: red;
    font-size: 14px;
    width: 100%;
  }
}
</style>
