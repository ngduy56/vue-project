<template>
  <div class="position-input">
    <InputLabel :label="label" :required="required" />
    <span class="note">Can select multiple</span>
    <InputExam
      :optionList="filterOptions"
      :chosenList="chosenList"
      @input="changeFilterName"
      @addChosen="onAddChosen"
      @removeChosen="onRemoveChosen"
    />
  </div>
</template>
<script>
import InputLabel from "@/components/sharedComponents/InputLabel.vue";
import InputExam from "@/components/autoComplete/InputExam.vue";
export default {
  data() {
    return {
      filterName: "",
    };
  },
  components: {
    InputLabel,
    InputExam,
  },
  props: {
    optionList: {
      type: Array,
      required: true,
    },
    chosenList: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
  },
  computed: {
    filterOptions() {
      return this.optionList.filter((option) => {
        return option.name.match(this.filterName);
      });
    },
  },
  methods: {
    changeFilterName(filterName) {
      if (!this.filterOptions.length) {
        console.log("haha");
      }
      this.filterName = filterName;
    },
    onAddChosen(option) {
      this.$emit("onAddChosen", option);
    },
    onRemoveChosen(chosenItem) {
      this.$emit("onRemoveChosen", chosenItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.position-input {
  position: relative;
}
.note {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
}
</style>
