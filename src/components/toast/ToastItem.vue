<template>
  <div :class="`toast ${type}`">
    <div class="toast__icon">
      <i :class="icon"></i>
    </div>
    <div class="toast__body">
      <h3 class="toast__title">{{ title }}</h3>
      <p class="toast__msg">{{ message }}</p>
    </div>
    <div class="toast__close" @click="$emit('remove')">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
import { TOP_RIGHT } from "@/constants/positionConstants.js";
export default {
  data() {
    return {
      icons: {
        success: "fas fa-check-circle",
        error: "fas fa-exclamation-circle",
      },
      timeoutToast: null,
    };
  },
  props: {
    title: {
      type: String,
      default: "Success",
    },
    type: {
      type: String,
      default: "success",
    },
    position: {
      type: String,
      default: "top-right",
    },
    message: {
      type: String,
      default: "Successfully!",
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  mounted() {
    this.timeoutToast = setTimeout(() => {
      this.$emit("remove");
    }, this.duration + 1000);

    if (this.position !== TOP_RIGHT) {
      this.$emit("changePosition", this.position);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeoutToast);
  },
  computed: {
    icon() {
      return this.icons[this.type];
    },
    delay() {
      return this.duration / 1000;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  padding: 20px 0;
  min-width: 400px;
  max-width: 450px;
  border-left: 8px solid;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);

  .toast__icon {
    font-size: 24px;
  }
  .toast__icon,
  .toast__close {
    padding: 0 16px;
  }
  .toast__body {
    flex-grow: 1;
  }
  .toast__title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
  .toast__msg {
    font-size: 14px;
    color: #888;
    margin: 0;
    line-height: 1.5;
    line-break: auto;
    width: 250px;
  }
  .toast__close {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
}
.success {
  border-color: #34e257;
  background: #d7f7de;
}
.success .toast__icon {
  color: #34e257;
}
.success .toast__close {
  color: #34e257;
}
.error {
  border-color: red;
  background: #ffe8e8;
}
.error .toast__icon {
  color: red;
}
.error .toast__close {
  color: red;
}

.toast + .toast {
  margin-top: 10px;
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
