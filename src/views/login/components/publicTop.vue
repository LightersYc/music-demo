<template>
  <div class="login-box">
    <div class="flex-start title">
      <van-icon name="arrow-left" color="#333" size="30" @click="$router.go(-1)" />
      <div>手机号登录</div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login-box {
  padding: 10px;
  .title {
    font-size: 20px;
  }
  .registered {
    margin-top: 40px;
    padding: 0 15px;
    .tip {
      font-size: 14px;
      color: #ccc;
      margin-bottom: 10px;
    }
    .van-cell {
      padding-left: 0px;
      &::after {
        border-bottom: none;
      }
    }
    .van-button--large {
      margin-top: 10px;
      height: 40px;
      border-radius: 22px;
    }
  }
}
</style>


