<template>
  <div class="file-item">
    <div class="content">
      <DocIcon v-if="showDocIcon" />
      <PdfIcon v-if="showPdfIcon" />
      <ExcelIcon v-if="showExcelIcon" />
      <UnknownIcon v-if="!showDocIcon && !showPdfIcon && !showExcelIcon" />
      <div class="file-info">
        <p>{{ name }}</p>
        <p>{{ sizeNum }} kB</p>
      </div>
    </div>
    <RemoveIcon @click.native="removeFile" />
  </div>
</template>

<script>
import RemoveIcon from "@/components/icons/RemoveIcon.vue";
import DocIcon from "@/components/icons/DocIcon.vue";
import ExcelIcon from "@/components/icons/ExcelIcon.vue";
import PdfIcon from "@/components/icons/PdfIcon.vue";
import UnknownIcon from "@/components/icons/UnknownIcon.vue";

import { NUM_BYTE } from "@/constants/dropzoneConstants.js";
export default {
  props: {
    fileItem: { type: [Object, File], required: true },
  },
  data() {
    return {
      name: this.fileItem.name,
      size: this.fileItem.size,
      lastModified: this.fileItem.lastModified,
    };
  },
  components: {
    RemoveIcon,
    DocIcon,
    ExcelIcon,
    PdfIcon,
    UnknownIcon,
  },
  computed: {
    sizeNum() {
      return Math.ceil(this.size / NUM_BYTE);
    },
    showDocIcon() {
      return this.name.includes(".docx") || this.name.includes(".doc");
    },
    showExcelIcon() {
      return (
        this.name.includes(".pub") ||
        this.name.includes(".xlsx") ||
        this.name.includes(".xls")
      );
    },
    showPdfIcon() {
      return this.name.includes(".pdf");
    },
  },
  methods: {
    removeFile() {
      this.$emit("onRemove", this.lastModified);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-item {
  min-width: 244px;
  width: 244px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  padding: 0 8px 0 4px;
}
.file-item:hover {
  background-color: #e5f9ff33;
  border-color: #1991d2;
  cursor: pointer;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  margin: 0;
}
.file-info {
  margin-left: 12px;
  flex: 1;
}
.file-info p {
  margin-bottom: 0;
}
.file-info p:first-child {
  width: 150px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.file-info p:nth-child(2) {
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
}
</style>
