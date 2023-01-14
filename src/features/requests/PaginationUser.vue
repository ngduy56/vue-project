<template>
  <div class="pagi__info">
    <span>1~10 trong tổng cộng 21 bản ghi</span>
    <NextPaginationIcon />
  </div>
</template>

<script>
import NextPaginationIcon from "@/components/icons/NextPaginationIcon.vue";

export default {
  components: {
    NextPaginationIcon,
  },
};
</script>

<style scoped lang="scss">
.pagi__info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px 10px 25px 25px;
  gap: 65px;
  position: absolute;
  bottom: 24px;
  right: 24px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #666666;
  }
}
</style>
