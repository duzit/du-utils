// https://mp.weixin.qq.com/s/uvWozBOZxRorgi2RBMPTtQ

// 比较两个对象数组 删除重复项 根据属性合并对象
// 根据 array2 筛选 
export const compareArrayByProperty = (array1, array2, key) => {
  const ret = array2.filter(o2 => (
    array1.some(o1 => o2[key] === o1[key])
  ))

  return ret;
}

// 比较对象的两个数组合并，并删除重复项
// 根据 array1 合并 array2 中不等于 obj[key] 的项
export const compareArrayByPropertyDelRepeat = (array1, array2, key) => {
  const arrsKey = array1.map(o => o[key]);
  const ret = [...array1, ...array2.filter(o => !arrsKey.includes(o[key]))];
  return ret;
}

// Lodash支持_differenceBy和 _differenceWith查找两个数组之间差异的方法。
export const differenceByKey = (array1, array2, key) => {
  const lodashresult = _.differenceBy(array2, array1, "id");
  return lodashresult;
}

// 参考 compareArrayByProperty 效果同 differenceByKey
export const compareArrayDiffByKey = (array1, array2, key) => {
  const ret = array2.filter(o2 => (
    !array1.some(o1 => o2[key] === o1[key])
  ))

  return ret;
}
