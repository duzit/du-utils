/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function isAvailableEmail(sEmail) {
  var reg = /^([\w+\.])+@\w+([.]\w+)+$/
  return reg.test(sEmail)
}

// 输入框内容不能全为空格
export function validateSpace(rule, value, callback) {
  let reg = /^(?!(\s+$))/

  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error('输入内容不能全为空格'))
  }
}

// 校验非法字符
export function validateIllegality(rule, value, callback) {
  let reg = rule.reg || /^[a-zA-Z0-9_\u4e00-\u9fa5-#*,.$()]+$/
  if (reg.test(value)) {
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule.message || '请输入中英文、数字、_-#*,.$()'))
    }
  }
}

// INT校验
export function validateINT(rule, value, callback) {
  let reg = /^[0-9]*[1-9][0-9]*$/

  if (reg.test(value) || value == 0) {
    if (value > 2147483647) {
      callback(new Error('请输入合法的Int值'))
    } else {
      callback()
    }
  } else {
    callback(new Error('请输入整数'))
  }
}

// double校验
export function validateDOUBLE(rule, value, callback) {
  let reg = /^(([1-9][0-9]*)|((([1-9][0-9]*)|0)\.[0-9]{1,4}))$/

  if (reg.test(value) || value == 0) {
    callback()
  } else {
    callback(new Error('请输入浮点数(最多4位小数)'))
  }
}

// 中英文校验
export function validateChEng(rule, value, callback) {
  let reg = rule.reg || /^[\u4e00-\u9fa5a-zA-Z]+$/
  if (reg.test(value)) {
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule.message || '请输入中英文'))
    }
  }
}

// 正整数 支持一位小数
export function validateTimeOut(value) {
  let reg = /^[0-9]+([.]{1}[0-9]{1})?$/

  if (reg.test(value)) {
    return true
  } else {
    return false
  }
}

// 校验大于0且可有4位小数的数字
export function validateNumdecimalsFour(rule, value, callback) {
  let reg = rule.reg || /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,4})?$/
  let val = rule.max || 999999
  if (reg.test(value)) {
    if (Number(value) > val) {
      callback(new Error(`超出最大范围${val}`))
      return
    }
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule._message || '请输入大于0且最多四位小数的数字'))
    }
  }
}

// 大于等于0的正整数
export function validateZeroNumFour(rule, value, callback) {
  let reg = /^(?:[1-9]\d*|0)(?:\.\d{1,4})?$/
  const res = reg.test(value)
  let val = rule.max || 999999
  if (res) {
    if (Number(value) > val) {
      callback(new Error(`超出最大${val}范围`))
      return
    }
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error('请输入不小于0且最多四位小数的数字'))
    }
  }
}

// 校验大于0且可有两位小数的数字
export function validateNumdecimals(rule, value, callback) {
  let reg = rule.reg || /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
  let val = rule.max || 999999
  if (reg.test(value)) {
    if (Number(value) > val) {
      callback(new Error(`超出最大范围${val}`))
      return
    }
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule._message || '请输入大于0且最多两位小数的数字'))
    }
  }
}
// 正整数 || 整数
export function validateNumber(rule, value, callback) {
  let reg = rule.reg || /^[0-9]*[1-9][0-9]*$/
  reg.lastIndex = 0
  const res = reg.test(value)
  let val = rule.max || 999999
  if (res) {
    if (Number(value) > val) {
      callback(new Error(`超出最大${val}范围`))
      return
    }
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error('请输入正整数 !'))
    }
  }
}
/**
 * 校验非法字符并防止sql注入(仅为搜索使用)
 * @param {Object} param 
 * @param {*} callback 
 */
export function validateIllegalitySearch(param, callback) {
  let reg = param.reg || /((?![a-zA-Z0-9_\u4e00-\u9fa5-#*,.$()]).)|select|update|delete|exec|count/i
  if (reg.test(param.value)) {
    return {
      type: false,
      message: `请您不要在${param.message || '参数'}中输入特殊字符或SQL关键字 !`
    }
  }
  return {
    type: true
  }
}
// 校验网址
export function validateUrl(rule, value, callback) {
  let reg = /[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  if (reg.test(value)) {
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule.message || '请输入正确的网址'))
    }
  }
}

// emoji表情校验
export function emoji(rule, value, callback) {
  let reg = /[\ud800-\udbff][\udc00-\udfff]/g
  if (reg.test(value)) {
    callback(new Error('请勿输入表情符号'))
  } else {
    callback()
  }
}

// 自定义工厂 初始化 url 校验
export function urlValidate(rule, value, callback) {
  let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/
  if (reg.test(value)) {
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule.message || '请输入合理的URL格式'))
    }
  }
}

// 字母 数字 下划线 中划线
export function dbNameValidate1(rule, value, callback) {
  let reg = /^(?!\d+$)[\da-zA-Z_-]+$/
  if (reg.test(value)) {
    callback()
  } else {
    if (!value) {
      callback()
    } else {
      callback(new Error(rule.message || '请输入字母、数字、_（不能全为数字）'))
    }
  }
}

export function pathValidate(rule, value, callback) {
  let reg = /^\/[0-9a-zA-Z_/-]+$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(rule.message || '路径要"/"开头，并支持数字字母下划线以及中划线'))
  }
}