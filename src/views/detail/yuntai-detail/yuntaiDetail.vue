<template>
  <div class="yuntai-detail">
    <div class="detail-box" v-if="show">
      <yuntai-breadcrumb :breadcrumb="breadcrumb"></yuntai-breadcrumb>
      <detail-title :titleInfo="titleInfo"></detail-title>
      <div class="content" v-html="content"></div>
      <template v-if="isLogin">
        <yuntai-comment @commentSend="commentSend"></yuntai-comment>
      </template>
      <div v-else class="no-login">
        <span @click="login" class="login">登录</span>之后才能评论
      </div>
      <yuntai-comment-list :commentList="commentList"></yuntai-comment-list>
    </div>
  </div>
</template>

<script>
import Content from '@/http/Content'
import detailTitle from './../component/detail-title/detailTitle'
import yuntaiComment from './../component/yuntai-comment/yuntaiComment'
import yuntaiCommentList from './../component/yuntai-comment-list/yuntaiCommentList'
import { Storage } from '@/common/tools'
import FastScanner from 'fastscan'
const noWord = ['法轮功']
export default {
  data () {
    return {
      titleInfo: {},
      resInfo: {},
      content: '',
      show: false,
      id: 0,
      type: '',
      commentList: [],
      isLogin: false,
      pn: 0,
      pl: 10
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
    detailTitle,
    yuntaiComment,
    yuntaiCommentList
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
    },
    async getDetailComment () {
      const params = {
        pn: this.pn,
        pl: this.pl,
        id: this.id,
        type: this.type
      }
      const res = await Content.commentList(this, params)
      this.commentList = res.data
    },
    async commentSend (comment) {
      var scanner = new FastScanner(noWord)
      var offWords = scanner.search(comment)
      if (offWords.length || !comment.trim()) {
        return this.$message.warning('请重新输入')
      }
      console.log(comment)
      const params = {
        comment: comment,
        userName: '张三',
        contentId: this.id,
        type: this.type
      }
      await Content.commentAdd(this, params)
      this.$message.success('发布成功')
      this.getDetailComment()
    },
    login () {
      this.$router.push({ name: 'login' })
    }
  },
  created () {
    this.id = this.$route.params.id || ''
    this.type = this.$route.query.type || ''
    this.isLogin = !!Storage.getToken()
    this.getDetail()
    this.getDetailComment()
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
    .yuntai-comment {
      margin: 20px 0;
    }
    .no-login {
      margin: 20px 0;
      text-align: center;
      .login {
        font-weight: bold;
        color: #409eff;
        cursor: pointer;
        &:hover {
          color: #086bd1;
        }
      }
    }
  }
}
</style>
