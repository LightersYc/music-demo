<template>
  <div class="list-item">
    <img
      :src="src"
      alt=""
    >
    <div class="text text-ellipsiss">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      reuire: true
    },
    name: {
      type: String,
      reuire: true
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.list-item {
  width: 110px;
  margin-right: 12px;
  margin-bottom: 15px;
  &:nth-of-type(3n + 1) {
    margin-right: 0px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .text {
    width: 100%;
    height: 30px;
    font-size: 12px;
    margin-top: 8px;
  }
}
</style>
