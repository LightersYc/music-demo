<template>
  <div class="find">
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        class="tip"
        v-show="isTip"
      >为你推荐更多有趣的内容</div>
    </transition>
    <!-- 轮播图 -->
    <swiper />
    <iconList />
    <!-- 推荐歌单 -->
    <recommend />
    <!-- 更多新碟 -->
    <newList />
  </div>
</template>

<script>
export default {
  components: {
    swiper: () => import("./components/swiper"),
    iconList: () => import("./components/iconList"),
    recommend: () => import("./components/recommend"),
    newList: () => import("./components/newList")
  },
  data() {
    return {
      isTip: false
    };
  },
  created() {},
  mounted() {
    this.isTip = true;
    setTimeout(() => {
      this.isTip = false;
    }, 3000);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.find {
  position: relative;
  .tip {
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 60px);
    font-size: 12px;
    background-color: #666;
    color: #fff;
    border-radius: 10px;
    padding: 5px 8px;
    z-index: 1;
  }
  .fade-enter,
  .fade-leave-to {
    transform:  translate(-50%, -60px);;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: transform 1s;
  }
}
</style>
