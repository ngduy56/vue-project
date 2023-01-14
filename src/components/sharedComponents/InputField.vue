<template>
  <div class="input-field">
    <InputLabel
      :label="label"
      :style="{ width: `${width}px` }"
      :required="required"
    />
    <input
      :class="{ 'in-valid': error }"
      :type="type"
      :style="{ width: `${width}px` }"
      :readonly="readonly"
      :placeholder="placeholder"
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
  components: {
    InputLabel,
  },
  watch: {
    value: {
      handler(val) {
        this.valueLocal = val;
      },
      immediate: true,
      deep: true,
    },
  },
  props: {
    value: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 450,
    },
    type: {
      type: String,
      default: "text",
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
    maxLength: {
      type: Number,
    },
    error: {
      type: String,
    },
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
  .in-valid {
    border-color: red;
  }
  .error-vali {
    color: red;
    font-size: 14px;
    width: 100%;
  }
}
</style>
