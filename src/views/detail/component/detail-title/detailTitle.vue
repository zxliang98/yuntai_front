<template>
  <div class="detail-title">
    <div class="top">{{titleInfo.title}}</div>
    <div class="bot">
      <el-avatar :src="titleInfo.userIcon"></el-avatar>
      <div class="name">{{titleInfo.name}}</div>
      <div class="time">{{titleInfo.pubTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    titleInfo: {
      type: Object,
      default () {
        return {
          title: '这个是标题',
          userIcon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          name: '这个是名字',
          pubTime: '这个是时间'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-title {
  .top {
    margin-bottom: 6px;
    font-size: 28px;
    color: #12202d;
    line-height: 40px;
    font-weight: normal;
    word-break: break-all;
  }
  .bot {
    display: flex;
    justify-content: flex-start;
    .el-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .name,
    .time {
      line-height: 28px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #abb2ba;
      letter-spacing: 0;
      margin-left: 12px;
    }
  }
}
</style>
