<template>
  <div class="tabbar-notice">
    <el-image
      fit="cover"
      src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495863258973/index2.jpg"
    ></el-image>
    <div class="notice-card">
      <el-card>
        <div class="card-header" slot="header">
          <span>景区新闻</span>
          <span class="see-more">查看更多</span>
        </div>
        <div v-for="item in 10" :key="item">{{item}}</div>
      </el-card>
      <el-card>
        <div class="card-header" slot="header">
          <span>公告通知</span>
          <span class="see-more">查看更多</span>
        </div>
        <div v-for="item in 10" :key="item">{{item}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.tabbar-notice {
  .el-image {
    width: 100%;
    height: 500px;
  }
  .notice-card {
    width: 1200px;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 590px;
      .card-header {
        display: flex;
        justify-content: space-between;
        .see-more {
          cursor: pointer;
          font-size: 14px;
          color: #409eff;
        }
      }
    }
  }
}
</style>
