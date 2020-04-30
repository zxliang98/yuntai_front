<template>
  <div class="yuntai-comment-list">
    <div class="comment-item" v-for="item in list" :key="item.id">
      <div class="content">
        <div :style="{backgroundColor: item.bgcolor}" class="dot"></div>
        <div class="comment">{{item.comment}}</div>
        <div>-</div>
        <div class="user">{{item.userName}}</div>
      </div>
      <div class="time">{{getDataTime(item.publishTime)}}</div>
    </div>
  </div>
</template>

<script>
import { useTimes } from '@/common/utils'
export default {
  data () {
    return {
      colorList: [
        '#007dff',
        '#0861bf',
        '#07478a',
        '#4fa5ff',
        '#3870ab',
        '#244569',
        '#8cc3ff',
        '#5a7da3',
        '#415b78',
        '#add5ff'
      ],
      list: []
    }
  },
  props: {
    commentList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    commentList: {
      handler (n) {
        this.list = n.map(item => ({
          id: item.id,
          comment: item.comment,
          userName: item.userName,
          publishTime: item.publishTime,
          bgcolor: this.colorList[parseInt(Math.random() * 11, 10)]
        }))
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...useTimes
  }
}
</script>

<style lang="less" scoped>
.yuntai-comment-list {
  .comment-item {
    padding: 0 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #000;
        margin-right: 12px;
      }
      .comment {
        max-width: 600px;
      }
    }
  }
}
</style>
