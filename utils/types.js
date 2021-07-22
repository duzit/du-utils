// 类型判断
// Object.prototype.toString.call(null); // [object Null]
// Object.prototype.toString.call(undefined) // "[object Undefined]"
export const isType = (target, type) => {
  let targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  return targetType === type.toLowerCase();
};

// 判断数据类型
export const getDataType = (obj) => {
  const type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}