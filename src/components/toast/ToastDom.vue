<template>
  <div id="toast"></div>
</template>

<script>
import toast from "./toastDom";

export default {
  data() {
    return {
      toast,
    };
  },
};
</script>

<style lang="scss">
#toast {
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 999999;
}
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
  transition: all linear 0.3s;

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
