// 格式化金钱数字
// 正则
export const formatPriceReg = (price) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// toLocaleString
export const formatPriceToLocaleString = (price) => {
  return price.toLocaleString();
}

// toLocaleString 带单位
export const formatPriceToLocaleStringUnit = (price) => {
  const options = {
    style: 'currency',
    currency: 'CNY',
  };
  price.toLocaleString('zh-CN', options); // ¥123,456.00
}

// 脱敏处理
export const encryptReg = (before = 3, after = 4) => {
  return new RegExp('(\\d{' + before + '})\\d*(\\d{' + after + '})');
};
// 使用：'13456789876'.replace(encryptReg(), '$1****$2') -> "134****9876"

// 将数字四舍五入到指定的小数点
// Math.pow(base, exponent) // base 的指数 
export const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

// toFixed 自定义 解决兼容性问题
export const toFixedCustom = (origin, s) => {
  var e, changeNum, index, i, j;
    // 如果值小于0，先转成正数
    if (origin < 0) {
      e = -origin;
    } else {
      e = origin;
    }
    changeNum = (
      parseInt(e * Math.pow(10, s) + 0.5) / Math.pow(10, s)
    ).toString();
    index = changeNum.indexOf(".");
    if (index < 0 && s > 0) {
      changeNum = changeNum + ".";
      for (i = 0; i < s; i++) {
        changeNum = changeNum + "0";
      }
    } else {
      index = changeNum.length - index;
      for (j = 0; j < s - index + 1; j++) {
        changeNum = changeNum + "0";
      }
    }
    if (origin < 0) {
      if (Number(s) > 0) {
        return "-" + changeNum;
      } else {
        return -changeNum;
      }
    } else {
      return changeNum;
    }
}