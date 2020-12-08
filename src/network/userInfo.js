import request from "./axios"
import qs from 'qs';




// 获取标签数据
export function addTabData(obj) {
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
export function addUserInfo(obj) {
  let params = {
    action: "fans",
    ctrl: "addfeedback",
    servername: "svr-saletool133",
    ...obj,
    typecode: "SHHF"
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}


