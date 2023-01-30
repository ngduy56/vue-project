<template>
  <div class="loading">
    <img src="@/assets/loading.gif" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  z-index: 999;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(219, 219, 219, 0.6);
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
