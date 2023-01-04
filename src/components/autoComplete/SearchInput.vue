<template>
  <input
    class="input-search"
    v-model="filterName"
    :placeholder="placeholder"
    @input="onChange"
    @focus="onFocus"
  />
</template>

<script>
export default {
  data() {
    return {
      filterName: "",
    };
  },
  props: {
    placeholder: {
      type: String,
    },
  },
  methods: {
    onChange() {
      this.$emit("input", this.filterName);
    },
    onFocus() {
      this.$emit("focusInput");
    },
  },
};
</script>

<style>
.input-search {
  min-width: 120px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 10px 6px 0;
  outline: none;
  border: none;
  background-color: transparent;
  caret-color: #1991d2;
  flex: 1;
}
.input-search::placeholder {
  color: #bfbfbf;
  font-size: 14px;
  font-weight: 400;
}
</style>
