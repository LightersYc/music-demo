<template>
  <div class="loginPhone">
    <div class="flex-start title">
      <van-icon name="arrow-left" color="#333" size="30" @click="$router.go(-1)" />
      <div>手机号登录</div>
    </div>
    <div class="registered">
      <div class="tip">未注册手机号登录后将自动创建账号</div>
      <van-field v-model="phone" label="手机号(+86)" clearable placeholder="请输入手机号" maxlength='11' :error-message="phone.length === 11 && disable? '手机号格式错误' :''" />
      <van-button type="danger" size="large" :disabled='disable'>下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
    };
  },
  computed: {
    disable() {
      const TEL_REGEXP = /^1[3456789]\d{9}$/;
      if (!TEL_REGEXP.test(this.phone)) {
        return true;
      }
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.loginPhone {
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
