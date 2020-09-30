<template>
  <div class="main">
    <div class="flex nav">
      <div class="nav-left">
        <i class="iconfont icon-menu" @click="openMenu"></i>
      </div>
      <ul class="flex1 nav-center">
        <router-link tag="li" class="nav-title" replace to="/my">我的</router-link>
        <router-link tag="li" class="nav-title" replace to="/find">发现</router-link>
        <router-link tag="li" class="nav-title" replace to="/friend">朋友</router-link>
        <router-link tag="li" class="nav-title" replace to="/videoPage">视频</router-link>
      </ul>
      <div class="nav-left">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <menuBox :show='show' @close='close' />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  components: {
    menuBox: () => import("./components/menuBox"),
  },
  data() {
    return {
      show: false,
    };
  },
  created() {},
  methods: {
    openMenu() {
      this.show = true;
    },
    close(e) {
      this.show = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  .nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 0 10px;
    box-sizing: border-box;
    color: #999;
    position: sticky;
    top: 0;
    z-index: 2;
    .nav-center {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 15px;
      font-size: 14px;
    }
  }
  .router-link-active {
    color: #333;
    font-size: 15px;
  }
}
</style>
