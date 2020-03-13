<template>
  <div class="tabbar-home">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in bannerImgs" :key="item">
        <el-image fit="cover" :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="tabbar-home-card">
      <div class="notice-card">
        <yuntai-notice></yuntai-notice>
      </div>
      <div class="news-card">
        <yuntai-news></yuntai-news>
      </div>
    </div>
  </div>
</template>

<script>
import imgBanner1 from '@/assets/imgs/banner1.jpg'
import imgBanner2 from '@/assets/imgs/banner2.jpg'
import imgBanner3 from '@/assets/imgs/banner3.jpg'
import imgBanner4 from '@/assets/imgs/banner4.jpg'
import imgBanner5 from '@/assets/imgs/banner5.jpg'
import yuntaiNotice from '@/views/detail/component/yuntai-notice/yuntaiNotice'
import yuntaiNews from '@/views/detail/component/yuntai-news/yuntaiNews'

export default {
  data () {
    return {
      bannerImgs: [imgBanner1, imgBanner2, imgBanner3, imgBanner4, imgBanner5]
    }
  },
  components: {
    yuntaiNotice,
    yuntaiNews
  }
}
</script>

<style lang="less" scoped>
.tabbar-home {
  .el-carousel {
    width: 100%;
    height: 100vh;
    background-color: #ccc;
    /deep/.el-carousel__container {
      height: 100vh;
    }
    .el-image {
      width: 100vw;
      height: 100%;
    }
  }
  .tabbar-home-card {
    width: 1200px;
    margin: 0 auto;
    .notice-card {
      width: 100%;
      padding: 16px 0 36px;
    }
  }
}
</style>
