export default class User {
  /**
   * 用户登录
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static userLogin (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: '/login'
    })
  }

  /**
   * 用户注册
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static userRegister (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: '/register'
    })
  }

  /**
   * 获取用户信息
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static getUserInfo (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: '/user'
    })
  }
}
