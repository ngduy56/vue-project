<template>
  <tr class="item" @click="navigateDetail">
    <td><UserItem :user="user" /></td>
    <td>{{ address }}</td>
    <td>{{ salary }}</td>
    <td>{{ formatDate }}<br />{{ formattedHour }}</td>
    <td>
      <span :class="statusUser">{{ statusUser }}</span>
    </td>
  </tr>
</template>

<script>
import UserItem from "@/features/requests/UserItem.vue";

export default {
  data() {
    return {
      formattedHour: "",
      status: {
        0: "pending",
        1: "approved",
        2: "rejected",
      },
    };
  },
  props: ["user"],
  computed: {
    id() {
      return this.user.id;
    },
    address() {
      return this.user.address ? this.user.address : "No info";
    },
    salary() {
      return this.user.salary ? this.user.salary : "No info";
    },
    formatDate() {
      return this.convertDate(this.user.created_at);
    },
    statusUser() {
      return this.status[this.user.status];
    },
  },
  components: { UserItem },
  methods: {
    navigateDetail() {
      this.$emit("navigateDetail", this.id);
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
  cursor: pointer;
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
  text-transform: capitalize;
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
