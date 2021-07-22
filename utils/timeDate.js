// 获取 时间 日期 常用方法

// 获取近 几天 时间 近7天 num = 7
export const getWeekTimeDate = (num) => {
  return [...new Array(num)].map((i, index) =>
    new Date(Date.now() + index * 8.64e7).toLocaleDateString());
}

// 获取两个日期之间的天数
export const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
// getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9

// 获取某一年的某个月有多少天
// new Date(2019, 12, 0).getDate(); // 31
// new Date(2018, 2, 0).getDate(); // 28
export const getMonthLength = (year, month) => {
  return new Date(year, month, 0).getDate();
}

// 给定日期是否是工作日
export const isWeekDay = (date) => date.getDay() % 6 !== 0;
// isWeekDay(new Date('2021-03-27'))  // false
// isWeekDay(new Date(2021, 2, 26))  // true

// 从日期获取时间
export const timeFromDate = date => date.toTimeString().slice(0, 8);
// timeFromDate(new Date()) // 当前时间
// timeFromDate(new Date(2021, 1, 12, 12, 0, 0)) // '12:00:00'

// 日期格式化
/**
 * @param {string} format
 * @param {number} timestamp - 时间戳
 * @return {string}
 * console.log(formatDate()); // 2020-7-22 19:10
 * console.log(formatDate("h:m Y/M/D")); // 19:10 2020/7/22
 */
 export function formatDate(format = "Y-M-D h:m", timestamp = Date.now()) {
  let date = new Date(timestamp);
  let dateInfo = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };
  let formatNumber = (n) => (n >= 10 ? n : "0" + n);
  let res = format
    .replace("Y", dateInfo.Y)
    .replace("M", dateInfo.M)
    .replace("D", dateInfo.D)
    .replace("h", formatNumber(dateInfo.h))
    .replace("m", formatNumber(dateInfo.m))
    .replace("s", formatNumber(dateInfo.s));
  return res;
}