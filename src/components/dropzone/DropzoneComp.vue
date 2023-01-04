<template>
  <div class="main">
    <InputLabel v-if="label" :label="label" :required="required" />
    <DropzoneElement
      @onUpload="onUpload"
      :maxSize="maxSize"
      :maxNumber="maxNumber"
      :typeFile="typeFile"
    />
    <FileElement :fileList="fileList" @onRemove="onRemove" />
  </div>
</template>

<script>
import InputLabel from "@/components/InputLabel.vue";
import DropzoneElement from "./DropzoneElement.vue";
import FileElement from "./FileElement.vue";
export default {
  props: {
    label: {
      type: [String, undefined],
    },
    required: {
      type: Boolean,
    },
    fileList: {
      type: Array,
      required: true,
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
