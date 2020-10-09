<template>
  <div class="flex-start iconList">
    <div class="icons" v-for="(item,index) in iconList" :key="index">
      <div class="imgItem">
        <i class="iconfont small-icon" :class="item.icon"></i>
      </div>
      <div>{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          icon: "icon-discover",
          text: "每日推荐",
        },
        {
          icon: "icon-selection",
          text: "歌单",
        },
        {
          icon: "icon-present",
          text: "排行榜",
        },
        {
          icon: "icon-wifi",
          text: "电台",
        },
        {
          icon: "icon-selection",
          text: "私人fm",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.iconList {
  font-size: 12px;
  padding: 20px 0px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #efefef;
    bottom: 0px;
    left: 0px;
  }
  .icons {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    .imgItem {
      width: 42px;
      height: 42px;
      line-height: 42px;
      background: linear-gradient(to right, #ff5a4c, #ff1d11);
      border-radius: 50%;
      margin: 0 auto 5px;
      color: #fff;
      text-align: center;
      font-size: 15px;
    }
  }
}
</style>
