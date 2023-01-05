<template>
  <div class="main">
    <LeftSidebar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftSidebar from "@/components/sharedComponents/LeftSidebar.vue";
export default {
  components: {
    LeftSidebar,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;

  .container {
    flex: 1;
    padding: 48px 32px;
    background: rgb(169, 219, 252);
  }
}
</style>
