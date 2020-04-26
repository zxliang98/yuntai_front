<template>
  <div class="yuntai-detail">
    <div class="detail-box" v-if="show">
      <yuntai-breadcrumb :breadcrumb="breadcrumb"></yuntai-breadcrumb>
      <detail-title :titleInfo="titleInfo"></detail-title>
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import Content from '@/http/Content'
import detailTitle from './../component/detail-title/detailTitle'
export default {
  data () {
    return {
      titleInfo: {},
      resInfo: {},
      content: '',
      show: false,
      id: 0,
      type: ''
    }
  },
  computed: {
    breadcrumb () {
      const bb = [{ name: '首页', path: { path: '/' } }]
      switch (this.type) {
        case 'view':
          bb.push({ name: '景区', path: { path: '/view' } })
          break
        case 'notice':
          bb.push({ name: '公告', path: { path: '/notice' } })
          break
        case 'play':
          bb.push({ name: '游玩', path: { path: '/play' } })
          break

        default:
          break
      }
      bb.push({ name: '详情' })
      return bb
    }
  },
  components: {
    detailTitle
  },
  methods: {
    async getDetail () {
      if (this.type === 'view') {
        const res = await Content.ContentView(this, { id: this.id })
        this.resInfo = res.data
      } else if (this.type === 'notice') {
        const res = await Content.ContentNotice(this, { id: this.id })
        this.resInfo = res.data
      } else if (this.type === 'play') {
        const res = await Content.ContentPlay(this, { id: this.id })
        this.resInfo = res.data
      }
      this.titleInfo.title = this.resInfo.title
      this.titleInfo.name = this.resInfo.userName
      this.titleInfo.pubTime = this.resInfo.publishTime
      this.titleInfo.userIcon =
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      this.content = this.resInfo.content
      this.show = true
    }
  },
  created () {
    this.id = this.$route.params.id || ''
    this.type = this.$route.query.type || ''
    this.getDetail()
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
    .content {
      /deep/ pre {
        white-space: pre-wrap;
      }
    }
  }
}
</style>
