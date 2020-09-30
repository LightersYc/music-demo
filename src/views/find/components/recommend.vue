<template>
  <div class="song-list">
    <div class="flex recommend">
      <div class="left">推荐歌单</div>
      <div class="right">歌单广场</div>
    </div>
    <div class="img-col">
      <van-loading type="spinner" color="#ff1d11" v-show='load' vertical text-size='12px'>加载中</van-loading>
      <imgCard v-for="item in songList" :key="item.id" :src='item.coverImgUrl' :name='item.name' />
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
      songList: [],
    };
  },
  created() {
    this.getsongList();
  },
  methods: {
    async getsongList() {
      // 未登陆只取六个
      this.load = true;
      const res = await findApi.getsongList();
      this.songList = res.playlists.slice(0, 6);
      this.load = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.song-list {
  padding: 20px 10px 10px;
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
  .img-col {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
