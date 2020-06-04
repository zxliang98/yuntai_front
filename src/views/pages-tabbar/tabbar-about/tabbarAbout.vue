<template>
  <div class="tabbar-about">
    <el-image
      fit="cover"
      src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495878219209/天高云飞染秋色0000.jpg"
    ></el-image>
    <div class="about-card">
      <el-card>
        <el-image fit="cover" :src="weibo"></el-image>扫描关注我们的微博
      </el-card>
      <el-card>
        <el-image fit="cover" :src="weixin"></el-image>扫描关注我们的微信
      </el-card>
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
import weixin from './../../../assets/imgs/gfwx.jpg'
import weibo from './../../../assets/imgs/weibo.jpg'
export default {
  data () {
    return {
      weixin,
      weibo
    }
  },
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
      /deep/.el-card__body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .el-image {
      display: block;
      width: 250px;
      height: 250px;
      margin-bottom: 20px;
    }
  }
}
</style>
