import request from "./axios"
import qs from 'qs';



// 获取生日回访记录
export function addFeedBack(obj) {
  let params = {
    action: "fans",
    ctrl: "addfeedback",
    servername: "svr-saletool133",
    ...obj,
    typecode: "SRHF"
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}



// 获取生日回访列表
export function getBirthVaipList(obj) {
  let params = {
    action: "fans",
    ctrl: "getbirthdayviplist",
    // pagesize:10,
    servername: "svr-saletool133",
    ...obj
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}


// 获取回访话术
export function getTalkSkill(obj) {
    let params = {
      action: "fans",
      ctrl: "gettalkskill",
      servername: "svr-saletool133",
      type: "SRTX",
      ...obj
    }
    let url = "/apis"
    return request.post(url, qs.stringify(params))
  }