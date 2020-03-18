<template>
  <div class="yuntai-news">
    <div class="news-left">
      <div class="left-top">
        <div class="left">资讯</div>
        <div class="right">
          <el-image fit="cover" :src="importImgs.imgBanner2"></el-image>
        </div>
      </div>
      <div class="left-bot">
        <el-image fit="cover" :src="importImgs.daiziMihougu"></el-image>
      </div>
    </div>
    <div class="news-right">
      <div class="right-top">
        <div class="item">在线预约订票</div>
        <div class="item">全景虚拟游览</div>
        <div class="item">博物馆活动</div>
      </div>
      <div class="right-bot">时间介绍</div>
    </div>
  </div>
</template>

<script>
import imgBanner2 from '@/assets/imgs/banner2.jpg'
import daiziMihougu from '@/assets/imgs/daizi-mihougu.jpg'
export default {
  data () {
    return {
      importImgs: { imgBanner2, daiziMihougu }
    }
  }
}
</script>

<style lang="less" scoped>
@import './yuntaiNews.less';
</style>
