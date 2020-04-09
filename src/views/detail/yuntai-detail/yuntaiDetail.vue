<template>
  <div class="yuntai-detail">
    <div class="detail-box">
      <yuntai-breadcrumb :breadcrumb="breadcrumb"></yuntai-breadcrumb>
      <detail-title></detail-title>
      <detail-content></detail-content>
    </div>
  </div>
</template>

<script>
import detailTitle from './../component/detail-title/detailTitle'
import detailContent from './../component/detail-content/detailContent'
export default {
  data () {
    return {
      breadcrumb: [
        { name: '首页', path: { path: '/' } },
        { name: '导览', path: { path: '/visit' } },
        { name: '详情' }
      ]
    }
  },
  components: {
    detailTitle,
    detailContent
  }
}
</script>

<style lang="less" scoped>
.yuntai-detail {
  background-color: #f3f5f8;
  padding-bottom: 12px;
  .detail-box {
    background-color: #fff;
    margin: 12px auto 0;
    width: 1000px;
    padding: 24px;
    .detail-title {
      margin: 12px 0;
    }
  }
}
</style>
