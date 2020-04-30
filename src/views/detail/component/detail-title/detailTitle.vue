<template>
  <div class="detail-title">
    <div class="top">{{titleInfo.title}}</div>
    <div class="bot">
      <el-avatar :src="titleInfo.userIcon"></el-avatar>
      <div class="name">{{titleInfo.name}}</div>
      <div class="time">{{getDataTime(titleInfo.pubTime)}}</div>
    </div>
  </div>
</template>

<script>
import { useTimes } from '@/common/utils'
export default {
  data () {
    return {}
  },
  props: {
    titleInfo: {
      type: Object,
      default () {
        return { }
      }
    }
  },
  methods: {
    ...useTimes
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
