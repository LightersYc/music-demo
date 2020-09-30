<template>
  <!-- 轮播图 -->
  <div class="swiper">
    <van-swipe :autoplay="5000">
      <van-swipe-item v-for="item in swiperList" :key="item.bannerId">
        <img class="banner-img" :src="item.pic" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import findApi from "@/api/find.js";
export default {
  data() {
    return {
      swiperList: [],
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      const res = await findApi.getBanner();
      this.swiperList = res.banners;
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  padding: 10px;
  box-sizing: border-box;
  .banner-img {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
