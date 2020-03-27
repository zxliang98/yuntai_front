<template>
  <div class="yuntai-news">
    <div class="news-left">
      <div class="left-top">
        <div class="left">
          <div class="title-box">
            <div class="title">云台·资讯</div>
            <div class="action">更多</div>
          </div>
        </div>
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
        <div class="item">
          <div class="logo">云</div>
          <div class="info">
            <div class="title">
              在线预约订票
            </div>
            <div class="des">
              贴心的票务服务,让您省事省力更省心
            </div>
          </div>
        </div>
        <div class="item">
          <div class="logo">台</div>
          <div class="info">
            <div class="title">
              全景虚拟游览
            </div>
            <div class="des">
              随时随地,为您提供身临其境的游览体验
            </div>
          </div>
        </div>
        <div class="item">
          <div class="logo">山</div>
          <div class="info">
            <div class="title">
              景区活动
            </div>
            <div class="des">
              从云台山开始,感受大自然的魅力
            </div>
          </div>
        </div>
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
