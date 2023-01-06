<template>
  <div class="main">
    <div @click="showDropdown" v-click-outside="hideDropdown">
      <div
        class="search-block"
        :class="{ 'is-focused': isFocused, 'is-empty': isEmpty }"
      >
        <SearchIcon />
        <div class="chosen-list">
          <ChosenItem
            v-for="chosenItem in chosenList"
            :key="chosenItem.code"
            :chosenItem="chosenItem"
            @removeChosen="removeChosen"
          />
          <SearchInput
            :placeholder="'Select position that you want'"
            @input="changeFilterName"
            @focusInput="showDropdown"
          />
        </div>
      </div>
      <div class="option-block">
        <div v-if="isFocused" class="option-list">
          <OptionItem
            v-if="isEmpty"
            :isEmpty="isEmpty"
            :optionItem="optionItem"
          />
          <OptionItem
            v-for="optionItem in optionList"
            :key="optionItem.code"
            :optionItem="optionItem"
            @addChosen="addChosen"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ChosenItem from "./ChosenItem.vue";
import OptionItem from "./OptionItem.vue";
import SearchInput from "./SearchInput.vue";
export default {
  name: "InputExam",
  data() {
    return {
      isFocused: false,
      isEmpty: false,
      optionItem: {
        name: "No result found!",
      },
    };
  },
  props: {
    optionList: {
      type: Array,
      require: true,
    },
    chosenList: {
      type: Array,
      require: true,
    },
  },
  components: {
    SearchIcon,
    ChosenItem,
    OptionItem,
    SearchInput,
  },
  watch: {
    optionList: {
      handler(val) {
        this.isEmpty = val.length === 0;
      },
    },
    deep: true,
  },
  mounted() {
    this.optionList.forEach((item) => {
      item.isChosen = false;
    });
  },
  methods: {
    addChosen(optionItem) {
      this.$emit("addChosen", optionItem);
    },
    removeChosen(chosenItem) {
      this.$emit("removeChosen", chosenItem);
    },
    changeFilterName(filterName) {
      this.$emit("input", filterName);
    },
    showDropdown() {
      this.isFocused = true;
    },
    hideDropdown() {
      this.isFocused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 450px;
  margin: 0;
}
.search-block {
  position: relative;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: #333333;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  border-radius: 4px;
}
.is-focused {
  border-color: #1991d2;
}
.is-empty {
  border-color: red;
}
.search-icon {
  min-width: 24px;
  height: 24px;
}
.option-block {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 1px 8px 0px #66666640;
  border-radius: 4px;
  margin-top: 4px;
}
.option-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 160px;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #dcdcdc;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #666666;
  }
}
.chosen-list {
  width: 100%;
  padding: 3px 0 4px 3px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
