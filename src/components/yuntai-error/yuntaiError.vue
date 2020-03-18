<template>
  <div class="yuntai-error">
    <el-image fit="cover" :src="importImgs.zifanghuDaizi"></el-image>
  </div>
</template>

<script>
import zifanghuDaizi from '@/assets/imgs/daizi-zifanghu.jpg'
export default {
  data () {
    return {
      importImgs: { zifanghuDaizi }
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-error {
  width: 100vw;
  height: 100vh;
  .el-image {
    width: 100%;
    height: 100%;
  }
}
</style>
