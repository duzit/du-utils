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