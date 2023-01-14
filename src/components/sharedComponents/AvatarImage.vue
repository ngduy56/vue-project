<template>
  <div class="avatar">
    <InputLabel v-if="label" :label="label" :required="required" />
    <img :src="avatarUser" />
  </div>
</template>

<script>
import InputLabel from "@/components/sharedComponents/InputLabel.vue";
export default {
  props: {
    avatar: {
      type: String,
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
    avatarUser() {
      return this.avatar ? `http://localhost:9999/uploads/${this.avatar}` : "";
    },
  },
  components: {
    InputLabel,
  },
};
</script>
<style scoped lang="scss">
.avatar {
  width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
}
</style>
