/**
 * url通过名字获取参数
 * @param attrName
 * @returns {*}
 */
 export const getUrlParamByName = (attrName) => {
  let locs = location.search.slice(1);
  if (locs === "") {
    return null;
  }
  let params = locs.split("&");
  let value = null;
  for (let i = 0; i < params.length; i++) {
    let param = params[i].split("=");
    if (param[0] === attrName) {
      value = param[1].split("#")[0];
      break;
    }
  }
  return value;
};

// url参数转对象
export const parseQueryString = function(url) { //url参数转对象
  url = !url ? window.location.href : url;
  if (url.indexOf('?') === -1) {
    return {};
  }
  let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  search = search.split('&');
  let query = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}