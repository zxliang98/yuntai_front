<template>
  <div class="yuntai-news">
    <div class="news-left">
      <div class="left-top">
        <div class="left">
          <div class="title-box">
            <div class="title">
              <i class="el-icon-arrow-left"></i>
              <span>云台 · 资讯</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="action">更多</div>
          </div>
          <ul class="content-box">
            <li v-for="item in notice" :key="item.id">
              <i class="el-icon-postcard"></i>
              {{item.title}}
            </li>
          </ul>
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
            <div class="title">在线预约订票</div>
            <div class="des">贴心的票务服务,让您省事省力更省心</div>
          </div>
        </div>
        <div class="item">
          <div class="logo">台</div>
          <div class="info">
            <div class="title">全景虚拟游览</div>
            <div class="des">随时随地,为您提供身临其境的游览体验</div>
          </div>
        </div>
        <div class="item">
          <div class="logo">山</div>
          <div class="info">
            <div class="title">景区活动</div>
            <div class="des">从云台山开始,感受大自然的魅力</div>
          </div>
        </div>
      </div>
      <div class="right-bot">
        <div class="bot-top">
          <div class="title-box">
            <div class="title">
              <i class="el-icon-arrow-left"></i>
              <span>时间 · 票务</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="action">更多</div>
          </div>
          <div class="content-box">
            <div class="text">
              <div>08:30</div>
              <div>开始售票、开放进馆时间</div>
            </div>
            <i class="el-icon-right"></i>
            <div class="text">
              <div>15:30</div>
              <div>止票时间</div>
            </div>
            <i class="el-icon-right"></i>
            <div class="text">
              <div>15:40</div>
              <div>停止入园时间</div>
            </div>
            <i class="el-icon-right"></i>
            <div class="text">
              <div>16:30</div>
              <div>闭园时间</div>
            </div>
          </div>
        </div>
        <div class="bot-bot">
          <div class="title-box">
            <div class="title">
              <i class="el-icon-arrow-left"></i>
              <span>开放 · 公告</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="action">更多</div>
          </div>
          <div class="content-box">
            <li v-for="item in news" :key="item.id">
              <i class="el-icon-postcard"></i>
              {{item.title}}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgBanner2 from '@/assets/imgs/banner2.jpg'
import daiziMihougu from '@/assets/imgs/daizi-mihougu.jpg'
import Content from '@/http/Content'
export default {
  data () {
    return {
      importImgs: { imgBanner2, daiziMihougu },
      notice: [],
      news: []
    }
  },
  methods: {
    getNewsList () {
      Content.ContentNoticeList(this, {
        pn: 0,
        pl: 5,
        type: 1,
        state: 1
      }).then(res => {
        this.news = res.data
        console.log(this.news)
      })
    },
    getNoticeList () {
      Content.ContentNoticeList(this, {
        pn: 0,
        pl: 8,
        type: 0,
        state: 1
      }).then(res => {
        this.notice = res.data
        console.log(this.notice)
      })
    }
  },
  created () {
    this.getNewsList()
    this.getNoticeList()
  }
}
</script>

<style lang="less" scoped>
@import './yuntaiNews.less';
</style>
