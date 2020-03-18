<template>
  <div class="yuntai-footer">
    <div>
      <span>网站访问量：</span>
      <span>{{webVisit}}</span>
    </div>
    <ul class="footer-friend">
      <li class="friend-path" v-for="item in friendList" :key="item.id">{{item.text}}</li>
    </ul>
    <ul class="footer-friend">
      <li>© 现在-未来 云台山景区</li>
      <li>京ICP备01010101010号-1</li>
      <li>网站建设：黄淮信工</li>
    </ul>
    <ul class="footer-friend">
      <li>网站维护：云台山景区资料信息部</li>
      <li>联系方式：132123@163.com</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      webVisit: 123456789,
      friendList: [
        { id: 1, text: '网站地图', path: '' },
        { id: 2, text: '相关链接', path: '' },
        { id: 3, text: '影像授权', path: '' },
        { id: 4, text: '隐私政策', path: '' },
        { id: 5, text: '版权声明', path: '' },
        { id: 6, text: '在线咨询', path: '' },
        { id: 7, text: '联系我们', path: '' },
        { id: 8, text: '关于我们', path: '' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.yuntai-footer {
  width: 100%;
  background-color: #272727;
  color: #ffffff;
  font-size: 14px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer-friend {
    display: flex;
    justify-content: center;
    &:nth-child(n + 2) {
      margin-top: 8px;
    }
    li:nth-child(n + 2) {
      margin-left: 12px;
    }
    .friend-path {
      cursor: pointer;
    }
  }
}
</style>
