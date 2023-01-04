<template>
  <div class="chosen-item">
    <span>{{ name }}</span>
    <DeleteIcon @click.native="removeChosen" />
  </div>
</template>

<script>
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
export default {
  name: "ChosenItem",
  props: {
    chosenItem: {
      type: Object,
    },
  },
  components: {
    DeleteIcon,
  },
  data() {
    return {
      name: this.chosenItem.name,
    };
  },
  methods: {
    removeChosen() {
      this.$emit("removeChosen", this.chosenItem);
    },
  },
};
</script>

<style>
.chosen-item {
  font-size: 14px;
  height: 28px;
  min-width: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  line-height: 20px;
  background: #f0f4f8;
  color: #627d98;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.chosen-item:last-child {
  margin-right: 6px;
}
.close-icon:hover {
  cursor: pointer;
}
</style>
