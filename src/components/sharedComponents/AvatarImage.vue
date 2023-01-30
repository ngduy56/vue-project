<template>
  <div class="avatar">
    <InputLabel :label="label" :required="required" />
    <img :src="avatarUser" />
  </div>
</template>

<script>
import InputLabel from "@/components/sharedComponents/InputLabel.vue";
import avatarDefault from "@/assets/avatar.png";
import { BASE_URL } from "@/constants/detailConstants";

export default {
  props: ["label", "readonly", "required", "avatar"],
  computed: {
    avatarUser() {
      return this.avatar ? `${BASE_URL}${this.avatar}` : avatarDefault;
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
