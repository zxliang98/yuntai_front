<template>
  <div class="yuntai-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="item.path" v-for="item in breadcrumb" :key="item.name">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
</style>
