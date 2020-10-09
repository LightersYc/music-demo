<template>
  <div class="loginPhone">
    <publicTop>
      <template v-slot:title>
        <div>手机号登录</div>
      </template>
      <template v-slot:content>
        <div class="registered">
          <div class="tip">未注册手机号登录后将自动创建账号</div>
          <van-field
            v-model="phone"
            label="手机号(+86)"
            clearable
            placeholder="请输入手机号"
            maxlength='11'
            :error-message="phone.length === 11 && disable? '手机号格式错误' :''"
          />
          <van-button
            type="danger"
            size="large"
            :disabled='disable'
          >下一步</van-button>
        </div>
      </template>

    </publicTop>
  </div>
</template>

<script>
export default {
  components: {
    publicTop: () => import("./publicTop.vue")
  },
  data() {
    return {
      phone: ""
    };
  },
  computed: {
    disable() {
      const TEL_REGEXP = /^1[3456789]\d{9}$/;
      if (!TEL_REGEXP.test(this.phone)) {
        return true;
      }
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>

</style>
