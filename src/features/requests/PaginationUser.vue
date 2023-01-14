<template>
  <div class="pagi__info">
    <BackPaginationIcon @click.native="prePage(pageNum)" />
    <span>1 ~ {{ limit }} trong tổng cộng {{ total }} bản ghi</span>
    <NextPaginationIcon @click.native="nextPage(pageNum)" />
  </div>
</template>

<script>
import NextPaginationIcon from "@/components/icons/NextPaginationIcon.vue";
import BackPaginationIcon from "@/components/icons/BackPaginationIcon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    NextPaginationIcon,
    BackPaginationIcon,
  },
  computed: {
    ...mapGetters({
      total: "authentication/total",
      limit: "authentication/limit",
      pageNum: "authentication/pageNum",
      totalPage: "authentication/totalPage",
    }),
  },
  methods: {
    ...mapActions({
      changePage: "authentication/changePage",
    }),
    prePage(page) {
      let currentPage = page - 1;
      if (currentPage >= 1) {
        this.changePage(currentPage);
      }
    },
    nextPage(page) {
      let currentPage = page + 1;
      if (currentPage <= this.totalPage) {
        this.changePage(currentPage);
      }
    },
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
