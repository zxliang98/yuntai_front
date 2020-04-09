export default class Content {
  /**
   * 获取公告列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentNoticeList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/noticeList'
    })
  }

  /**
   * 获取单个公告
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentNotice (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/notice'
    })
  }

  /**
   * 获取景区列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentViewList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/viewList'
    })
  }

  /**
   * 获取单个景区
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentView (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/view'
    })
  }

  /**
   * 获取游玩列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentPlayList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/playList'
    })
  }

  /**
   * 获取单个游玩
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentPlay (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/play'
    })
  }
}
