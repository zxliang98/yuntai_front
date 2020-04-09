<template>
  <div class="yuntai-list">
    <div class="list-box" v-for="item in listInfo" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    listInfo: {
      type: Array,
      default () {
        return [
          { id: 1, title: 'niha' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-list {
  background-color: #f3f5f8;
  padding-bottom: 12px;
  .list-box {
    background-color: #fff;
    margin: 12px auto 0;
    width: 1000px;
    padding: 24px;
  }
}
</style>
