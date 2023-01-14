<template>
  <div class="main">
    <InputLabel v-if="label" :label="label" :required="required" />
    <DropzoneElement
      :multiple="multiple"
      :maxNumber="maxNumber"
      :maxSize="maxSize"
      :typeFile="typeFile"
      @onUpload="onUpload"
    />
    <FileElement
      v-if="fileList && fileList.length > 0"
      :fileList="fileList"
      @onRemove="onRemove"
    />
  </div>
</template>

<script>
import InputLabel from "@/components/sharedComponents/InputLabel.vue";
import DropzoneElement from "./DropzoneElement.vue";
import FileElement from "./FileElement.vue";
export default {
  props: {
    multiple: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    fileList: {
      type: Array,
    },
    maxSize: {
      type: Number,
      required: true,
    },
    maxNumber: {
      type: Number,
      required: true,
    },
    typeFile: {
      type: Array,
      required: true,
    },
  },
  components: {
    DropzoneElement,
    FileElement,
    InputLabel,
  },
  methods: {
    onUpload(files) {
      this.$emit("onUpload", files);
    },
    onRemove(lastModified) {
      this.$emit("onRemove", lastModified);
    },
  },
};
</script>

<style scoped>
.main {
  width: 495px;
}
.btn-submit {
  margin: 10px 0;
  padding: 8px 30px;
  border: none;
  border-radius: 4px;
}
.btn-submit:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
