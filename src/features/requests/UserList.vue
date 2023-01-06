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
      <tr>
        <td><UserItem /></td>
        <td>Ha Noi</td>
        <td>16.000.000 đ</td>
        <td>2022/10/04 <br />10:01</td>
        <td><span class="pending">Pending</span></td>
      </tr>
      <tr>
        <td><UserItem /></td>
        <td>Da Nang</td>
        <td>16.000.000 đ</td>
        <td>2022/10/04 <br />10:01</td>
        <td><span class="approved">Approved</span></td>
      </tr>
      <tr>
        <td><UserItem /></td>
        <td>Ho Chi Minh</td>
        <td>16.000.000 đ</td>
        <td>2022/10/04 <br />10:01</td>
        <td><span class="rejected">Rejected</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
import UserItem from "@/features/requests/UserItem.vue";
export default {
  components: {
    UserItem,
  },
};
</script>

<style lang="scss" scoped>
.user__list {
  height: 672px;

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
        // padding-right: 50px;
        text-align: center;
      }
    }
    td {
      text-align: left;
      padding: 7.5px 10px;
      font-size: 14px;
      &:first-child {
        padding-left: 54px;
      }
      &:last-child {
        // padding-right: 50px;
        text-align: center;
      }
    }
    tr:last-child {
      border-bottom: 2px solid #e4e7eb;
    }
    span {
      padding: 2px 8px;
      border-radius: 4px;
    }
    .pending {
      background: #fffbeb;
      color: #dd901d;
    }
    .approved {
      background: #f0f4f8;
      color: #627d98;
    }
    .rejected {
      background: #ffe3e3;
      color: #f86a6a;
    }
  }
}
</style>
