export default {
  setSession: function (name, data) {
    sessionStorage.setItem(name, data);
  },
  getSession: function (name) {
    return sessionStorage.getItem(name);
  },
  delSession: function (name) {
    return sessionStorage.removeItem(name);
  },
  clearSession: function () {
    sessionStorage.clear();
  },
  setLocal: function (name, data) {
    localStorage.setItem(name, data);
  },
  getLocal: function (name) {
    return localStorage.getItem(name);
  },
  removeLocal: function (name) {
    localStorage.removeItem(name);
  }
}