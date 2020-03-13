<template>
  <div class="yuntai-notice">
    <p class="notice-title">{{notice.title}}</p>
    <p class="notice-info">{{notice.info}}</p>
  </div>
</template>

<script>
export default {
  props: {
    notice: {
      type: Object,
      default () {
        return {
          title: '云台山景区关于闭馆的公告',
          info:
            '根据新型冠状病毒感染的肺炎疫情防控工作需要，为避免人员聚集引发交叉感染，云台山景区决定，自2020年1月25日（正月初一）起闭馆，恢复开放时间另行通知……'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-notice {
  width: 100%;
  color: #333333;
  text-align: center;
  .notice-title {
    font-size: 30px;
    margin-bottom: 6px;
  }
  .notice-info {
    font-size: 16px;
    max-width: 60%;
    margin: 0 auto;
    // 文字超出显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
