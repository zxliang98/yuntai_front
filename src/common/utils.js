/**
 * 公共方法
 * 使用时 引入后再调用
 * 方法定义规则： 前缀添加 utils
*/

/**
 * 时间操作 有参数时，时间转换成时间戳 | 无参数就是，获取现在的时间戳
*/
const getTimeData = (times) => {
  if (times) {
    return new Date(times).getTime()
  } else {
    return new Date().getTime()
  }
}
// 时间戳转换成时间
const getDataTime = (times) => {
  if (!times) {
    return '无'
  }
  const getBYT = (num) => {
    if (num === 0) {
      return '00'
    } else if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }
  const date = new Date(times) // 13位时间戳
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = getBYT(date.getDate()) + ' '
  const h = getBYT(date.getHours()) + ':'
  const m = getBYT(date.getMinutes()) + ':'
  const s = getBYT(date.getSeconds())
  return Y + M + D + h + m + s
}

// 时间戳转换成时间,没有秒，‘2019-08-03 16:00’格式
const getDataTimeStr = (times) => {
  if (!times) {
    return '无'
  }
  const getBYT = (num) => {
    if (num === 0) {
      return '00'
    } else if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }
  const date = new Date(times) // 13位时间戳
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = getBYT(date.getDate()) + ' '
  const h = getBYT(date.getHours()) + ':'
  const m = getBYT(date.getMinutes())
  return Y + M + D + h + m
}

// 判断两个时间戳之间，相差天数
const VerificationTime = (opt1, opt2, num) => {
  const timever = (opt2 - opt1) / (1000 * 60 * 60 * 24)

  // 判断是否小于标准值
  if (num >= timever) {
    return true
  } else {
    return false
  }
}
// 秒转换成分钟和小时格式 (针对视频时长 00:00 格式)
const getVideoLength = (time) => {
  time = Math.round(time)
  let t
  if (time > -1) {
    const hour = Math.floor(time / 3600)
    const min = Math.floor(time / 60) % 60
    const sec = time % 60
    if (hour === 0) {
      t = ''
    } else {
      if (hour < 10) {
        t = '0' + hour + ':'
      } else {
        t = hour + ':'
      }
    }
    if (min < 10) {
      t += '0'
    }
    t += min + ':'
    if (sec < 10) { t += '0' }
    t += sec
  }
  return t
}

// 秒转换成分钟和小时格式 (针对视频时长 00分00秒 格式)
const getVideoChineseLength = (time) => {
  time = Math.round(time) - 1
  let t
  if (time > -1) {
    const hour = Math.floor(time / 3600)
    const min = Math.floor(time / 60) % 60
    const sec = time % 60
    if (hour === 0) {
      t = ''
    } else {
      if (hour < 10) {
        t = '0' + hour + '时'
      } else {
        t = hour + '时'
      }
    }
    if (min < 10) {
      t += '0'
    }
    t += min + '分'
    if (sec < 10) { t += '0' }
    t = t + sec + '秒'
  }
  return t
}

// 时间转换函数
const presentStr = (pubTime) => {
  let t = parseInt((new Date().getTime() - pubTime) / 1000)
  if (t < 0) {
    return '1小时前'
  }
  if (t < 60) {
    return '刚刚'
  }
  t = parseInt(t / 60)
  if (t < 60) {
    return `${t}分钟前`
  }
  t = parseInt(t / 60)
  if (t < 24) {
    return `${t}小时前`
  }
  t = parseInt(t / 24)
  if (t === 1) {
    return '昨天'
  } else if (t === 2) {
    return '前天'
  } else if (t < 10 && t > 2) {
    return `${t}天前`
  }

  const d = new Date(+pubTime)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  return `${year}.${month}.${day}`
}

// 时间方法
export const useTimes = {
  getTimeData, // 有参数时，时间转换成时间戳 | 无参数就是，获取现在的时间戳
  getDataTime, // 时间戳转换成时间
  VerificationTime, // 两个时间戳之间，相差天数，是否正确
  getVideoLength, // 秒转换成分钟和小时格式  "29:21"
  getVideoChineseLength, // 秒转换成分钟和小时格式  "29分21秒"
  getDataTimeStr, // 时间戳转换成时间,没有秒，‘2019-08-03 16:00’格式
  presentStr // 计算一个时间与当前时间的差值,
}
