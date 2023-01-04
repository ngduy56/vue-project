<template>
  <div class="dropdown">
    <InputLabel :label="label" :required="required" />
    <select
      class="select"
      :class="{ 'in-valid': error }"
      v-model="valueLocal"
      @change="onChange"
    >
      <option v-for="item in list" :key="item.value" :value="item.value">
        {{ item.name }}
      </option>
    </select>
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
    list: {
      type: Array,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    error: {
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
.dropdown {
  width: 450px;

  .select {
    width: 100%;
    height: 40px;
    font-family: "Inter", sans-serif;
    color: #333333;
    padding: 8px 10px 8px 6px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
      outline: none;
    }

    option {
      width: 45px;
      height: 20px;
      font-weight: 400;
      line-height: 20px;
      border: none;
      color: #333333;
    }
  }
  .in-valid {
    border-color: red;
  }
}
.error-vali {
  position: absolute;
  color: red;
  left: -15px;
  top: 50px;
  font-size: 14px;
}
</style>
