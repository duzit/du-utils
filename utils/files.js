// Blob 文件下载
export const downloadFileBlob = (fileName, data) => {
  const blob = new Blob([data])
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

// base64数据导出文件下载
/**
 * @param {string} filename - 下载时的文件名
 * @param {string} data - base64字符串
 */
 export const downloadFileBase64 = (filename, data) => {
  let downloadLink = document.createElement("a");
  if (downloadLink) {
    document.body.appendChild(downloadLink);
    downloadLink.style = "display: none";
    downloadLink.download = filename;
    downloadLink.href = data;
    if (document.createEvent) {
      let downloadEvt = document.createEvent("MouseEvents");
      downloadEvt.initEvent("click", true, false);
      downloadLink.dispatchEvent(downloadEvt);
    } else if (document.createEventObject) {
      downloadLink.fireEvent("onclick");
    } else if (typeof downloadLink.onclick == "function") {
      downloadLink.onclick();
    }
    document.body.removeChild(downloadLink);
  }
};