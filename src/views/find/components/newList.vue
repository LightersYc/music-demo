<template>
  <div class="song-list">
    <div class="flex recommend new-dish">
      <div class="left">
        <span :class="type==='dish' ? 'active' :''" @click="type = 'dish'">新碟</span>&nbsp;|&nbsp;
        <span :class="type==='song' ? 'active' :''" @click="type = 'song'">新歌</span>
      </div>
      <div class="right">
        <span v-show="type==='dish'">更多新碟</span>
        <span v-show="type==='song'">新歌推荐</span>
      </div>
    </div>
    <div class="img-col" v-show="type==='dish'">
      <van-loading type="spinner" color="#ff1d11" v-show='load' vertical text-size='12px'>加载中</van-loading>
      <imgCard v-for="item in newDish" :key="item.id" :src='item.picUrl' :name='item.name' />
    </div>
    <div class="img-col" v-show="type==='song'">
      <van-loading type="spinner" color="#ff1d11" v-show='load' vertical text-size='12px'>加载中</van-loading>
      <imgCard v-for="item in newSong" :key="item.id" :src='item.album.blurPicUrl' :name='item.name' />
    </div>
  </div>
</template>

<script>
import findApi from "@/api/find.js";
export default {
  components: {
    imgCard: () => import("@/components/imgCard"),
  },
  data() {
    return {
      load: false,
      type: "dish",
      newDish: [],
      newSong: [],
    };
  },
  created() {
    this.getnewDish();
    this.getnewSong();
  },
  methods: {
    // 获取新碟
    async getnewDish() {
      this.load = true;
      const res = await findApi.getnewDish();
      this.newDish = res.albums.slice(0, 3);
      this.load = false;
    },
    // 获取新歌
    async getnewSong() {
      this.load = true;
      const res = await findApi.getnewSong();
      this.newSong = res.data.slice(0, 3);
      this.load = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-col {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.song-list {
  padding: 20px 10px;
  .recommend {
    div {
      margin-bottom: 20px;
      &.left {
        font-size: 15px;
        font-weight: bold;
      }
      &.right {
        font-size: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 2px 6px;
      }
    }
  }
  .new-dish {
    .left {
      font-size: 15px !important;
      color: #999;
    }
  }
  .active {
    color: #333;
    font-size: 18px;
  }
}
</style>
