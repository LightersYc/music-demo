<template>
  <div class="loginPage">
    <div class="login" @click="$router.push('/loginPhone')">手机号登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.loginPage {
  width: 100%;
  height: 100vh;
  background-color: #dd001b;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    width: 60%;
    height: 40px;
    line-height: 40px;
    border-radius: 18px;
    text-align: center;
    color: #dd001b;
    background-color: #fff;
  }
}
</style>
