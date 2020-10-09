<template>
  <div class="loginPhone">
    <publicTop>
      <template v-slot:content>
        <div class="registered">
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" label-width="50px" />
          <div class="forget">忘记密码</div>
          <van-button type="danger" size="large" :disabled='disable'>登录</van-button>
        </div>
      </template>
    </publicTop>
  </div>
</template>

<script>
export default {
  components: {
    publicTop: () => import("./publicTop.vue"),
  },
  data() {
    return {
      pwd: "",
    };
  },
  computed: {
    disable() {},
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.forget {
  font-size: 14px;
  text-align: right;
  margin: 10px 0;
}
</style>
