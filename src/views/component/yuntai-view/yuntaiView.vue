<template>
  <div class="yuntai-view">
    <div class="item" v-for="item in list" :key="item.id">
      <el-image :src="item.url"></el-image>
      <i :class="item.icon"></i>
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          url:
            'https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a5845f08b.jpg',
          icon: 'el-icon-postcard',
          text: '最新资讯'
        },
        {
          id: 2,
          url:
            'https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a58eb4421.jpg',
          icon: 'el-icon-ship',
          text: '景点介绍'
        },
        {
          id: 3,
          url:
            'https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a57aca965.jpg',
          icon: 'el-icon-data-line',
          text: '经典线路'
        },
        {
          id: 4,
          url:
            'https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a58eb4421.jpg',
          icon: 'el-icon-chat-line-square',
          text: '攻略美文'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-view {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-between;
  .item {
    cursor: pointer;
    width: 290px;
    height: 100%;
    position: relative;
    color: #ffffff;
    .el-image {
      width: 100%;
      height: 100%;
    }
    i {
      font-size: 90px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, calc(-50% - 10px));
    }
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, calc(-50% + 50px));
    }
  }
}
</style>
