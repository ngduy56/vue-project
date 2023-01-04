<template>
  <div
    class="option-item"
    :class="{ 'is-chosen': optionItem.isChosen }"
    @click="addChosen"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    optionItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: this.optionItem.name,
    };
  },
  methods: {
    addChosen() {
      this.$emit("addChosen", this.optionItem);
    },
  },
};
</script>

<style scoped>
.option-item {
  font-family: "inter", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.option-item:hover {
  background-color: #617d98;
  color: #ffffff;
  cursor: pointer;
}
.is-chosen {
  background-color: #617d98;
  color: #ffffff;
}
</style>
