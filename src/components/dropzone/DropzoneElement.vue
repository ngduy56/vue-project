<template>
  <div>
    <div
      class="drag-block"
      :class="{ 'in-valid': !isValid }"
      @dragover.prevent
      @drop.prevent="uploadFile"
      @click="selectFile"
    >
      <div class="wrapper">
        <UploadIcon />
        <div class="action">
          <p>Drag & Drop</p>
          <p>Or Click here</p>
          <input
            :multiple="multiple"
            type="file"
            ref="file"
            class="dropzone-file"
            @change="uploadFile"
          />
        </div>
      </div>
    </div>
    <div v-if="errors.size" class="error-vali">
      {{ errors.size }}
    </div>
    <div v-if="errors.number" class="error-vali">
      {{ errors.number }}
    </div>
    <div v-if="errors.type" class="error-vali">
      {{ errors.type }}
    </div>
  </div>
</template>

<script>
import UploadIcon from "@/components/icons/UploadIcon.vue";
import { Validate } from "@/utils/Validate.js";

export default {
  components: {
    UploadIcon,
  },
  props: {
    multiple: {
      type: Boolean,
      default: false,
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
  data() {
    return {
      errors: {
        number: "",
        size: "",
        type: "",
      },
      isValid: true,
    };
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    uploadFile(e) {
      this.errors = {
        number: "",
        size: "",
        type: "",
      };
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.isValid = Validate(
        files,
        this.typeFile,
        this.errors,
        this.maxNumber,
        this.maxSize
      );
      let newFileList = Array.from(files);
      if (this.isValid) {
        this.$emit("onUpload", newFileList);
      }
    },
  },
};
</script>

<style scoped>
.drag-block {
  height: 232px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
}
.error-vali {
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: red;
  line-height: 20px;
}
.success-vali {
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #00bd00;
  line-height: 20px;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.in-valid {
  border-color: red;
}
.drag-block:hover {
  cursor: pointer;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.dropzone-file {
  display: none;
}
.action p {
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 0;
  color: #333333;
}
.action p:first-child {
  font-weight: 700;
  margin-top: 16px;
}
.action p:nth-child(2) {
  text-decoration: underline;
  margin-top: 0;
}
.upload-icon {
  width: 100%;
}
</style>
