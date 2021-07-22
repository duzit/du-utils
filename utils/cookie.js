export default {
  /**
   * 获取cookie
   * @param name
   * @returns {null}
   */
  getCookie(name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    return arr ? unescape(arr[2]) : null;
  },
  /**
   * 设置cookie
   * @param name
   * @param value
   * @param expires
   */
  setCookie(name, value, expires) {
    const exp = new Date();
    if (expires) {
      exp.setTime(exp.getTime() + expires);
    }
    document.cookie = `${name}=${escape(value)};expires=${expires ? exp.toGMTString() : ''}`;
  },
  /**
   * 删除cookie
   * @param name
   */
  removeCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const value = this.getCookie(name);
    if (value) {
      document.cookie = `${name}=${value};expires=${exp.toGMTString()}`;
    }
  }
}
