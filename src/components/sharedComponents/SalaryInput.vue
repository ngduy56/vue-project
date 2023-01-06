<template>
  <div class="salary-block">
    <InputLabel :label="label" :required="required" />
    <div class="salary-input" :class="{ 'in-valid': error }">
      <input type="text" v-model="valueLocal" @input="onChange" />
      <span>VNĐ</span>
    </div>
    <span v-if="error" class="error-vali">{{ error }}</span>
  </div>
</template>

<script>
import InputLabel from "@/components/sharedComponents/InputLabel.vue";
import { ZERO_REGEX } from "@/constants/registerFormConstants";
export default {
  data() {
    return {
      valueLocal: "",
    };
  },
  props: {
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    value: {
      type: [String, Number],
    },
    error: {
      type: String,
    },
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
  components: {
    InputLabel,
  },
  methods: {
    onChange() {
      this.valueLocal = this.valueLocal.replace(ZERO_REGEX, "");
      this.$emit("input", this.valueLocal);
    },
  },
};
</script>

<style lang="scss" scoped>
.salary-block {
  .salary-input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 14px;
    width: 140px;
    height: 40px;

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      outline: none;
      border: none;
      padding: 10px 0 10px 8px;
      font-size: 14px;
    }

    span {
      transform: translateX(-10px);
    }
  }
  .in-valid {
    border-color: red;
  }
  .error-vali {
    color: red;
    font-size: 14px;
  }
}
</style>
