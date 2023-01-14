<template>
  <div class="requests-container">
    <UserList :userList="userList" />
    <PaginationUser />
  </div>
</template>

<script>
import PaginationUser from "@/features/requests/PaginationUser.vue";
import UserList from "@/features/requests/UserList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { PaginationUser, UserList },
  async created() {
    await this.getUserList();
  },
  computed: {
    ...mapGetters({
      userList: "authentication/userList",
    }),
  },
  methods: {
    ...mapActions({
      getUserList: "authentication/getUserList",
    }),
  },
};
</script>

<style lang="scss" scoped>
.requests-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>
