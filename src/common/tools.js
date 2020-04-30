// 保存、移除本地存储
export const Storage = {
  set: (key, item) => {
    if (!key) return
    if (typeof item !== 'string') {
      // 转为字符串
      item = JSON.stringify(item)
    }
    localStorage.setItem(key, item)
  },
  get: key => {
    return key ? localStorage.getItem(key) : ''
  },
  remove: key => {
    if (!key) return
    // 移除本地存储
    localStorage.removeItem(key)
  },
  setToken: (token) => {
    Storage.set('token-yuntai-front', token)
  },
  getToken: () => {
    return Storage.get('token-yuntai-front')
  },
  removeToken: () => {
    Storage.remove('token-yuntai-front')
  }
}
