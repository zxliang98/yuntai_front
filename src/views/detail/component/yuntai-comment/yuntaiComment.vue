<template>
  <div class="yuntai-comment">
    <el-input
      type="textarea"
      resize="none"
      :rows="3"
      placeholder="请输入内容"
      v-model="comment"
      maxlength="100"
      show-word-limit
    ></el-input>
    <div class="button">
      <el-button @click="sendComment" type="primary" size="small">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    sendComment () {
      this.$emit('commentSend', this.comment)
      this.comment = ''
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-comment {
  width: 100%;
  .button {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
