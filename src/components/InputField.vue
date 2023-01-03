<template>
  <div class="input-field">
    <InputLabel
      :label="label"
      :style="{ width: `${width}px` }"
      :required="required"
    />
    <input
      type="text"
      :placeholder="placeholder"
      v-model="valueLocal"
      @input="onChange"
    />
    <span v-if="error" class="error-vali">{{ error }}</span>
  </div>
</template>

<script>
import InputLabel from "@/components/InputLabel.vue";
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
    placeholder: {
      type: String,
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
.input-field {
  input {
    width: 100%;
    height: 40px;
    outline: none;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 14px;

    &::placeholder {
      color: rgba(153, 153, 153, 0.28);
      font-size: 14px;
      line-height: 20px;
    }
  }
  .error-vali {
    color: red;
    font-size: 14px;
    width: 100%;
  }
}
</style>
