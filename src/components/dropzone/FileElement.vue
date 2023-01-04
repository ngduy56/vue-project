<template>
  <div>
    <div class="file-block">
      <div class="file-list">
        <FileItem
          v-for="fileItem in fileList"
          :key="fileItem.lastModified"
          :fileItem="fileItem"
          @onRemove="removeFile"
        />
      </div>
      <NextIcon v-if="showNextIcon" />
    </div>
  </div>
</template>

<script>
import FileItem from "./FileItem.vue";
import NextIcon from "@/components/icons/NextIcon.vue";
export default {
  props: {
    fileList: {
      type: Array,
      required: true,
    },
  },
  components: {
    FileItem,
    NextIcon,
  },
  computed: {
    showNextIcon() {
      return this.fileList.length > 0;
    },
  },
  methods: {
    removeFile(lastModified) {
      this.$emit("onRemove", lastModified);
    },
  },
};
</script>

<style scoped>
.file-block {
  width: 100%;
  margin-top: 33px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.file-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  overflow-y: hidden;
  gap: 17px;
}
.file-list::-webkit-scrollbar {
  display: none;
}
</style>
