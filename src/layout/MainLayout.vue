<template>
  <div class="main">
    <LeftSidebar :user="user" @logout="logoutUser" />
    <div class="container">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import LeftSidebar from "@/components/sharedComponents/LeftSidebar.vue";
import { mapActions, mapGetters } from "vuex";
import { getUserId } from "@/utils/localStorage";
import toast from "@/components/toast/toast";

export default {
  data() {
    return {
      toast,
    };
  },
  components: {
    LeftSidebar,
  },
  async created() {
    let id = getUserId();
    if (id) {
      await this.getUser({ id: id, isAuthor: true });
    }
  },
  computed: {
    ...mapGetters({
      user: "authentication/user",
    }),
  },
  methods: {
    ...mapActions({
      logout: "authentication/logout",
      getUser: "authentication/getUser",
    }),
    logoutUser() {
      this.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;

  .container {
    position: relative;
    height: 100vh;
    flex: 1;
    padding: 48px 32px;
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: all linear 0.3s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
