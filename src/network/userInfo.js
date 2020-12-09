import request from "./axios"
import qs from 'qs';




// 获取标签数据
export function getTabData(obj) {
  let params = {
    action: "fans",
    ctrl: "taglist",
    servername: "svr-saletool133",
    ...obj,
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}



// 获取售后回访记录
export function getUserInfos(obj) {
  let params = {
    action: "fans",
    ctrl: "userlist",
    servername: "svr-saletool133",
    ...obj,
    pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}
