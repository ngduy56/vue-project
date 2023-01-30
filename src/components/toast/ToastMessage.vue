<template>
  <transition-group
    tag="div"
    name="list"
    :class="`toast__list ${positionLocal}`"
  >
    <ToastItem
      v-for="(item, index) in toast.items"
      :key="item.key"
      :title="item.title"
      :type="item.type"
      :message="item.message"
      :position="item.position"
      :duration="item.duration"
      @remove="remove(index)"
      @changePosition="changePosition"
    />
  </transition-group>
</template>

<script>
import ToastItem from "@/components/toast/ToastItem.vue";
import toast from "./toast";

export default {
  data() {
    return {
      toast,
      positionLocal: "",
    };
  },
  props: {
    position: {
      type: String,
      default: "top-right",
    },
  },
  created() {
    this.positionLocal = this.position;
  },
  components: {
    ToastItem,
  },
  methods: {
    remove(index) {
      toast.removeToast(index);
    },
    changePosition(position) {
      this.positionLocal = position;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast__list {
  position: fixed;
  z-index: 9999;
}
/// right side
.top-right {
  top: 30px;
  right: 10px;
}
.bottom-right {
  top: unset;
  bottom: 30px;
  right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all linear 0.3s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(calc(100% + 32px));
}
// middle
.top {
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.top .list-enter,
.top .list-leave-to {
  opacity: 0;
  transform: translateY(calc(-32px));
}
.bottom {
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.bottom .list-enter,
.bottom .list-leave-to {
  opacity: 0;
  transform: translateY(calc(100% + 32px));
}
// left

.top-left {
  top: 30px;
  left: 10px;
}
.bottom-left {
  top: unset;
  bottom: 30px;
  left: 10px;
}
.top-left .list-enter,
.top-left .list-leave-to {
  opacity: 0;
  transform: translateY(calc(-32px));
}
.bottom-left .list-enter,
.bottom-left .list-leave-to {
  opacity: 0;
  transform: translateY(calc(100% + 32px));
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(calc(100% + 32px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}
</style>
