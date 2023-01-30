<template>
  <div class="user__list">
    <table>
      <tr>
        <th v-for="heading in headings" :key="heading.lastModified">
          {{ heading.title }}
        </th>
      </tr>
      <UserRowItem
        v-for="user in userList"
        :key="user.lastModified"
        :user="user"
        @navigateDetail="navigateDetail"
      />
    </table>
  </div>
</template>

<script>
import UserRowItem from "@/features/requests/UserRowItem.vue";
export default {
  data() {
    return {
      headings: [
        { title: "Fullname" },
        { title: "City" },
        { title: "Wish Salary" },
        { title: "Create at" },
        { title: "Status" },
      ],
    };
  },
  props: ["userList"],
  components: {
    UserRowItem,
  },
  methods: {
    navigateDetail(id) {
      this.$emit("navigateDetail", id);
    },
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
