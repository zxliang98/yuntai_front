<template>
  <div class="tabbar-play">
    <el-image
      fit="cover"
      src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495877121143/_DSC8079秋染子房湖123213.jpg"
    ></el-image>
    <div class="play-card">
      <el-card>
        <div class="card-header" slot="header">
          <span>特色美食</span>
          <span class="see-more">查看更多</span>
        </div>
        <div class="card-content">12424</div>
      </el-card>
      <el-card>
        <div class="card-header" slot="header">
          <span>特产购物</span>
          <span class="see-more">查看更多</span>
        </div>
        <div class="card-content">12424</div>
      </el-card>
      <el-card>
        <div class="card-header" slot="header">
          <span>休闲娱乐</span>
          <span class="see-more">查看更多</span>
        </div>
        <div class="card-content">12424</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.tabbar-play {
  .el-image {
    width: 100%;
    height: 500px;
  }
  .play-card {
    width: 1200px;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 380px;
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
