<template>
  <div class="tabbar-view">
    <el-image
      fit="cover"
      src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495863258973/index2.jpg"
    ></el-image>
    <div class="notice-card">
      <el-card :body-style="{ padding: '0px' }" v-for="item in viewList" :key="item.id">
        <!-- <el-image
          fit="cover"
          src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        ></el-image>-->
        <div class="bot">
          <div class="title">{{item.title}}</div>
          <div class="action" @click="toViewDetail(item)">查看详情</div>
        </div>
      </el-card>
      <el-card class="see-more-card" :body-style="{ padding: '0px' }">
        <div @click="seeMore">
          查看更多
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Content from '@/http/Content'
export default {
  data () {
    return {
      viewList: []
    }
  },
  methods: {
    getViewList () {
      const params = {
        pn: 0,
        pl: 8,
        state: 1
      }
      Content.ContentViewList(this, params).then(res => {
        console.log(res)
        this.viewList = res.data
      })
    },
    toViewDetail (item) {
      this.$router.push({
        name: 'detail',
        params: { id: item.id },
        query: { type: 'view' }
      })
    },
    seeMore () {
      this.$router.push({
        name: 'list',
        query: { type: 'view' }
      })
    }
  },
  created () {
    this.getViewList()
  }
}
</script>

<style lang="less" scoped>
.tabbar-view {
  .el-image {
    width: 100%;
    height: 500px;
  }
  .notice-card {
    font-size: 30px;
    width: 1200px;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    flex-wrap: wrap;
    .el-card {
      width: 380px;
      // height: 380px;
      margin-left: 30px;
      margin-bottom: 20px;
      .el-image {
        width: 100%;
        height: 300px;
      }
      .bot {
        display: flex;
        justify-content: space-between;
        padding: 8px 20px 12px;
        .title {
          flex: 1;
          padding-right: 12px;
        }
        .action {
          width: 130px;
          cursor: pointer;
          color: #409eff;
        }
      }
      &:nth-child(3n + 1) {
        margin-left: 0;
      }
    }
    .see-more-card {
      cursor: pointer;
      text-align: center;
      padding: 8px 20px 12px;
    }
  }
}
</style>
