<template>
  <tr class="item">
    <td><UserItem :user="user" @input="navigateDetail" /></td>
    <td>{{ user.address ? user.address : "No info" }}</td>
    <td>{{ user.salary ? user.salary : "No info" }}</td>
    <td>{{ formatDate }}<br />{{ this.formattedHour }}</td>
    <td>
      <span v-if="user.status === 0" class="pending">Pending</span>
      <span v-if="user.status === 1" class="approved">Approved</span>
      <span v-if="user.status === 2" class="rejected">Rejected</span>
    </td>
  </tr>
</template>

<script>
import UserItem from "@/features/requests/UserItem.vue";

export default {
  data() {
    return {
      formattedHour: "",
    };
  },
  props: ["user"],
  computed: {
    formatDate() {
      return this.convertDate(this.user.created_at);
    },
  },
  components: { UserItem },
  methods: {
    navigateDetail(id) {
      this.$router.push({ path: `users/${id}` });
    },
    convertDate(date) {
      let offsetTz = 7 * 60 * 60 * 1000;
      date = new Date(date).getTime();
      date = new Date(date + offsetTz);

      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let min = date.getMinutes();
      let year = date.getFullYear();

      month = (month < 10 ? "0" : "") + month;
      day = (day < 10 ? "0" : "") + day;
      hour = (hour < 10 ? "0" : "") + hour;
      min = (min < 10 ? "0" : "") + min;

      let formattedDate = year + "/" + month + "/" + day;
      this.formattedHour = hour + ":" + min;

      return formattedDate;
    },
  },
};
</script>

<style lang="scss" scoped>
.item:hover {
  background: #f9f9f9;
}
td {
  text-align: left;
  padding: 7.5px 10px;
  font-size: 14px;
  &:first-child {
    padding-left: 54px;
  }
  &:last-child {
    text-align: center;
  }
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
</style>
