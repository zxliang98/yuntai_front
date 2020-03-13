<template>
  <div :class="pathName==='home'?'yuntai-tab-bar-home':'yuntai-tab-bar'">
    <el-image :src="pathName==='home'?imgLogo:imgLogoBlue" fit="contain"></el-image>
    <div class="nav">
      <div
        @click="toPage(item)"
        class="nav-item"
        v-for="item in navList"
        :key="item.id"
      >{{item.text}}</div>
    </div>
    <div class="action">
      <i class="iconfont el-icon-user"></i>
      <i class="iconfont el-icon-s-operation"></i>
    </div>
  </div>
</template>

<script>
import imgLogo from '@/assets/imgs/logo.png'
import imgLogoBlue from '@/assets/imgs/logoblue.png'
export default {
  data () {
    return {
      imgLogo,
      imgLogoBlue,
      navList: [
        {
          id: 1,
          text: '首页',
          path: '/home'
        },
        {
          id: 2,
          text: '导览',
          path: '/visit'
        },
        {
          id: 3,
          text: '展览',
          path: '/show'
        },
        {
          id: 4,
          text: '教育',
          path: '/edu'
        },
        {
          id: 5,
          text: '文创',
          path: '/creative'
        },
        {
          id: 6,
          text: '关于',
          path: '/about'
        }
      ]
    }
  },
  computed: {
    pathName () {
      return this.$route.name
    }
  },
  methods: {
    toPage (item) {
      this.$router.push(item.path)
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style lang="less" scoped>
.yuntai-tab-bar-home {
  width: 100%;
  height: 60px;
  background-color: rgba(25, 25, 25, 0.6);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 100;
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
.yuntai-tab-bar {
  width: 100%;
  height: 60px;
  background-color: rgba(255,255,255);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 100;
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
      color: #000000;
      cursor: pointer;
      text-align: center;
    }
  }
  .action {
    .iconfont {
      color: #000000;
      font-size: 26px;
    }
    .el-icon-s-operation {
      margin-left: 28px;
    }
  }
}
</style>
