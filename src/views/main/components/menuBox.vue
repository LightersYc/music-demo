<template>
  <div class="menuBox">
    <transition name="mask" mode="out-in">
      <div class="mask" @click="close" v-show='show'></div>
    </transition>
    <transition mode="out-in" name="menu">
      <div class="menu" v-show='show'>
        <div class="login">
          <div>登录网易云音乐</div>
          <div class="enjoy">手机电脑多端同步，尽享海量高品质音乐</div>
          <span class="login-box" @click="$router.push('/login')">立即登录</span>
        </div>
        <div class="flex login-icon">
          <div class="icon-item" v-for="(item,index) in middleIcon" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <div>{{item.text}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import icons from "@/getIcon/iconList";
export default {
  props: {
    show: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    middleIcon() {
      return icons.middleIcon;
    },
  },
  created() {},
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.menuBox {
  .mask {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 20;
  }
  .menu {
    width: 80%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    .login {
      font-size: 12px;
      text-align: center;
      color: #666;
      background-color: #efefef;
      padding: 25px 0;
      .enjoy {
        margin: 10px 0 20px 0;
        overflow: hidden;
      }
      .login-box {
        border: 1px solid #999;
        border-radius: 15px;
        padding: 5px 10px;
      }
    }
    .login-icon {
      font-size: 12px;
      padding: 10px 10px 20px 10px;
      margin: 15px 0;
      border-bottom: 1px solid #efefef;
      .icon-item {
        text-align: center;
        i {
          color: red;
          font-size: 20px;
        }
        div {
          margin-top: 10px;
        }
      }
    }
  }
  .mask-enter,
  .mask-leave-to {
    opacity: 0;
  }
  .mask-enter-active,
  .mask-leave-active {
    transition: opacity 0.5s;
  }
  .menu-enter,
  .menu-leave-to {
    transform: translateX(-300px);
  }
  .menu-enter-active,
  .menu-leave-active {
    transition: transform 0.5s;
  }
}
</style>
