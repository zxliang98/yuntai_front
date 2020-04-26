<template>
  <div class="tabbar-play">
    <el-image
      fit="cover"
      src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495877121143/_DSC8079秋染子房湖123213.jpg"
    ></el-image>
    <div class="play-card">
      <el-card>
        <div class="card-header" slot="header">
          <span>特色美食</span>
          <span @click="seeMore(0)" class="see-more">查看更多</span>
        </div>
        <div
          @click="toPlayDetail(item)"
          class="card-content"
          v-for="item in foods"
          :key="item.id"
        >{{item.title}}</div>
      </el-card>
      <el-card>
        <div class="card-header" slot="header">
          <span>特产购物</span>
          <span  @click="seeMore(1)" class="see-more">查看更多</span>
        </div>
        <div
          @click="toPlayDetail(item)"
          class="card-content"
          v-for="item in buys"
          :key="item.id"
        >{{item.title}}</div>
      </el-card>
      <el-card>
        <div class="card-header" slot="header">
          <span>休闲娱乐</span>
          <span @click="seeMore(2)" class="see-more">查看更多</span>
        </div>
        <div
          @click="toPlayDetail(item)"
          class="card-content"
          v-for="item in plays"
          :key="item.id"
        >{{item.title}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Content from '@/http/Content'
export default {
  data () {
    return {
      foods: [],
      buys: [],
      plays: []
    }
  },
  methods: {
    getFoodList () {
      Content.ContentPlayList(this, { pn: 0, pl: 10, type: 0, state: 1 }).then(
        res => {
          this.foods = res.data
          console.log(this.news)
        }
      )
    },
    getBuyList () {
      Content.ContentPlayList(this, { pn: 0, pl: 10, type: 1, state: 1 }).then(
        res => {
          this.buys = res.data
          console.log(this.notice)
        }
      )
    },
    getPlayList () {
      Content.ContentPlayList(this, { pn: 0, pl: 10, type: 2, state: 1 }).then(
        res => {
          this.plays = res.data
          console.log(this.notice)
        }
      )
    },
    toPlayDetail (item) {
      this.$router.push({
        name: 'detail',
        params: { id: item.id },
        query: { type: 'play' }
      })
    },
    seeMore (option) {
      this.$router.push({
        name: 'list',
        params: { type: option },
        query: { type: 'play' }
      })
    }
  },
  created () {
    this.getFoodList()
    this.getBuyList()
    this.getPlayList()
  }
}
</script>

<style lang="less" scoped>
.tabbar-play {
  .el-image {
    width: 100%;
    height: 500px;
  }
  .play-card {
    width: 1200px;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 380px;
      .card-header {
        display: flex;
        justify-content: space-between;
        .see-more {
          cursor: pointer;
          font-size: 14px;
          color: #409eff;
        }
      }
      .card-content {
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
