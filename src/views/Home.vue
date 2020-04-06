<template>
  <div class="home" @scroll="scrollHome">
    <yuntai-tabbar></yuntai-tabbar>
    <router-view style="min-width:1200px" :style="this.$route.name!=='home'?'margin-top:60px':''"></router-view>
    <yuntai-footer></yuntai-footer>
    <el-backtop target=".home"></el-backtop>
  </div>
</template>

<script>
import yuntaiTabbar from '@/components/yuntai-tabbar/yuntaiTabbar'
import yuntaiFooter from '@/components/yuntai-footer/yuntaiFooter'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    yuntaiTabbar,
    yuntaiFooter
  },
  computed: {
    ...mapState
  },
  methods: {
    ...mapMutations,
    scrollHome (e) {
      // console.log(e.target.scrollTop)
      // this.changeHomeScrollTop(e.target.scrollTop)
      this.homeScrollTop = e.target.scrollTop
      // console.log(this.homeScrollTop)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  transition: all 1s;
}
</style>
