<template>
  <div class="home">
    <yuntai-tab-bar></yuntai-tab-bar>
  </div>
</template>

<script>
import yuntaiTabBar from '@/components/yuntai-tab-bar/yuntaiTabBar'
export default {
  components: {
    yuntaiTabBar
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
}
</style>
