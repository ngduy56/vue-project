<template>
  <div class="user__list">
    <table>
      <tr>
        <th>Fullname</th>
        <th>City</th>
        <th>Wish Salary</th>
        <th>Create at</th>
        <th>Status</th>
      </tr>
      <UserRowItem v-for="user in userList" :key="user.name" :user="user" />
    </table>
  </div>
</template>

<script>
import UserRowItem from "@/features/requests/UserRowItem.vue";
export default {
  props: ["userList"],
  components: {
    UserRowItem,
  },
};
</script>

<style lang="scss" scoped>
.user__list {
  width: 100%;
  min-height: calc(100% - 70px);

  table {
    border-collapse: collapse;
    width: 100%;
    line-height: 20px;

    th {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      padding: 15px 10px;
      border-top: 2px solid #e4e7eb;
      border-bottom: 2px solid #e4e7eb;
      &:first-child {
        padding-left: 54px;
      }
      &:last-child {
        text-align: center;
      }
    }
    tr:nth-child(3n + 1) {
      border-bottom: 1px solid #e4e7eb;
    }
  }
}
</style>
