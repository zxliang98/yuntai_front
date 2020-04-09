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
          <span @click="seeMore(1)" class="see-more">查看更多</span>
        </div>
        <div class="title" @click="toNoticeDetail(item)" v-for="item in news" :key="item.id">{{item.title}}</div>
      </el-card>
      <el-card>
        <div class="card-header" slot="header">
          <span>公告通知</span>
          <span @click="seeMore(0)" class="see-more">查看更多</span>
        </div>
        <div class="title" @click="toNoticeDetail(item)" v-for="item in notice" :key="item.id">{{item.title}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Content from '@/http/Content'
export default {
  data () {
    return {
      news: [],
      notice: []
    }
  },
  methods: {
    getNewsList () {
      Content.ContentNoticeList(this, {
        pn: 0,
        pl: 10,
        type: 1,
        state: 1
      }).then(res => {
        this.news = res.data.data
        console.log(this.news)
      })
    },
    getNoticeList () {
      Content.ContentNoticeList(this, {
        pn: 0,
        pl: 10,
        type: 0,
        state: 1
      }).then(res => {
        this.notice = res.data.data
        console.log(this.notice)
      })
    },
    toNoticeDetail (item) {
      this.$router.push({
        name: 'detail',
        params: { id: item.id },
        query: { type: 'notice' }
      })
    },
    seeMore (option) {
      this.$router.push({
        name: 'list',
        params: { type: option },
        query: { type: 'notice' }
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
      .title {
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
