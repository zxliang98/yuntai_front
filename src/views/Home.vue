<template>
  <div class="home">
    <yuntai-tabbar></yuntai-tabbar>
    <router-view style="min-width:1200px" :style="this.$route.name!=='home'?'padding-top:60px':''"></router-view>
    <yuntai-footer></yuntai-footer>
  </div>
</template>

<script>
import yuntaiTabbar from '@/components/yuntai-tabbar/yuntaiTabbar'
import yuntaiFooter from '@/components/yuntai-footer/yuntaiFooter'
export default {
  components: {
    yuntaiTabbar,
    yuntaiFooter
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
// .home {
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   overflow: auto;
//   transition: all 1s;
// }
</style>
