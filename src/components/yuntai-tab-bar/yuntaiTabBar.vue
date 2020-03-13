<template>
  <div class="yuntai-tab-bar">
    <el-image :src="imgLogo" fit="contain"></el-image>
    <div class="nav">
      <div class="nav-item" v-for="item in navList" :key="item.id">{{item.text}}</div>
    </div>
    <div class="action">
      <i class="iconfont el-icon-user"></i>
      <i class="iconfont el-icon-s-operation"></i>
    </div>
  </div>
</template>

<script>
import imgLogo from '@/assets/imgs/logo.png'
export default {
  data () {
    return {
      imgLogo,
      navList: [
        {
          id: 1,
          text: '首页'
        },
        {
          id: 2,
          text: '导览'
        },
        {
          id: 3,
          text: '展览'
        },
        {
          id: 4,
          text: '教育'
        },
        {
          id: 5,
          text: '文创'
        },
        {
          id: 6,
          text: '关于'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-tab-bar {
  width: 100%;
  height: 60px;
  background-color: rgba(25, 25, 25, 0.6);
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > .el-image {
    width: 138px;
    height: 60px;
  }
  .nav {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    .nav-item {
      width: 100px;
      height: 100%;
      line-height: 60px;
      color: #ffffff;
      cursor: pointer;
      text-align: center;
    }
  }
  .action {
    .iconfont {
      color: #fff;
      font-size: 26px;
    }
    .el-icon-s-operation {
      margin-left: 28px;
    }
  }
}
</style>
