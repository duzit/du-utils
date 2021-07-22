// 类型判断
// Object.prototype.toString.call(null); // [object Null]
// Object.prototype.toString.call(undefined) // "[object Undefined]"
export const isType = (target, type) => {
  const targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  return targetType === type.toLowerCase();
}

// 对象属性剔除
// const objO = {
//   name: 'xiaom',
//   age: 12,
//   Null: null,
//   other: {
//     sex: 'male',
//   },
// };

// console.log(delProperty(objO, 'age'));
// {
//   name: 'xiaom',
//   Null: null,
//   other: {
//     sex: 'male'
//   }
// }
export const delProperty = (object, props = []) => {
  const res = {};
  Object.keys(object).forEach((key) => {
    if (props.includes(key) === false) {
      res[key] =
        typeof object[key] === 'object' && object[key] !== 'null'
          ? JSON.parse(JSON.stringify(object[key]))
          : object[key];
    }
  });
  return res;
}

// 防抖 连续多次点击只触发一次
// 性能优化方案，防抖用于减少函数请求次数，对于频繁的请求，只执行这些请求的最后一次
export const debounce = (fn, time = 300) => {
  let timer = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, time);
  };
}

// 节流
// 性能优化方案，节流用于减少函数请求次数，与防抖不同，节流是在一段时间执行一次。
export const throttle = (fn, time = 300) => {
  let timer = null;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this);
        timer = null;
      }, time);
    }
  };
}