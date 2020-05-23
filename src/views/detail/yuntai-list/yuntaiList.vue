<template>
  <div class="yuntai-list" v-window-scroll:[false]="scrollLoad">
    <yuntai-breadcrumb :breadcrumb="breadcrumb"></yuntai-breadcrumb>
    <div @click="toDetail(item)" class="list-box" v-for="item in listInfo" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
import Content from '@/http/Content'
export default {
  data () {
    return {
      listInfo: [],
      option: 0,
      type: '',
      pn: 0,
      pl: 10,
      loadMoreFlag: true
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
  props: {},
  methods: {
    async getList () {
      if (this.type === 'view') {
        const res = await Content.ContentViewList(this, {
          pn: this.pn,
          pl: this.pl,
          state: 1
        })
        this.resInfo = res.data
      } else if (this.type === 'notice') {
        const res = await Content.ContentNoticeList(this, {
          pn: this.pn,
          pl: this.pl,
          state: 1,
          type: this.option
        })
        this.resInfo = res.data
      } else if (this.type === 'play') {
        const res = await Content.ContentPlayList(this, {
          pn: this.pn,
          pl: this.pl,
          state: 1,
          type: this.option
        })
        this.resInfo = res.data
      }
      this.loadMoreFlag = true
      this.listInfo = [...this.listInfo, ...this.resInfo]
      if (this.resInfo.length < this.pl) {
        this.loadMoreFlag = false
      }
      console.log(this.listInfo)
    },
    async toDetail (item) {
      this.$router.push({
        name: 'detail',
        params: { id: item.id },
        query: { type: this.type }
      })
    },
    scrollLoad () {
      if (this.loadMoreFlag) {
        this.loadMoreFlag = false
        this.pn++
        this.getList()
        console.log(1111111111111111111111)
      }
    }
  },
  created () {
    this.pn = 0
    this.option = this.$route.params.type
    this.type = this.$route.query.type
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.yuntai-list {
  background-color: #f3f5f8;
  padding-bottom: 12px;
  .yuntai-breadcrumb {
    background-color: #fff;
    margin: 12px auto 0;
    width: 1000px;
    padding: 12px;
  }
  .list-box {
    cursor: pointer;
    background-color: #fff;
    margin: 12px auto 0;
    width: 1000px;
    padding: 24px;
  }
}
</style>
