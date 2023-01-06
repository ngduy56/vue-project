<template>
  <div class="requests-container">
    <UserList />
    <PaginationUser />
  </div>
</template>

<script>
import PaginationUser from "@/features/requests/PaginationUser.vue";
import UserList from "@/features/requests/UserList.vue";

export default {
  components: { PaginationUser, UserList },
};
</script>

<style lang="scss" scoped>
.requests-container {
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>
