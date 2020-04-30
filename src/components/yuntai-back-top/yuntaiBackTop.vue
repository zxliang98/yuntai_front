<template>
  <div @click="backTop" v-if="showBtn" class="yuntai-back-top">
    <i class="el-icon-caret-top"></i>
  </div>
</template>

<script>
export default {
  props: {
    showBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backTop () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-back-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  color: #409eff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:hover {
    background-color: rgb(242, 245, 246);
  }
}
</style>
