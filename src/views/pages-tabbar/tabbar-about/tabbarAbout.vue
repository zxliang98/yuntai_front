<template>
  <div class="tabbar-about">
    <el-image
      fit="cover"
      src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495878219209/天高云飞染秋色0000.jpg"
    ></el-image>
    <div class="about-card">
      <el-card>微博</el-card>
      <el-card>微信</el-card>
      <baidu-map
        class="map"
        :center="{lng: 113.367424, lat: 35.4201789}"
        :zoom="11"
        :scroll-wheel-zoom="true"
        @click="getMapInfo"
      ></baidu-map>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getMapInfo (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar-about {
  .el-image {
    width: 100%;
    height: 500px;
  }
  .about-card {
    width: 1200px;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    .map,
    .el-card {
      width: 380px;
      height: 400px;
    }
  }
}
</style>
