import request from "./axios"
import qs from 'qs';



// 保存卡券到期记录
export function addFeedBack(obj) {
  let params = {
    action: "fans",
    ctrl: "addfeedback",
    servername: "svr-saletool133",
    ...obj,
    typecode: "KJDQHF"
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}



// 获取卡券到期列表
export function getCardOvertimelist(obj) {
  let params = {
    action: "fans",
    ctrl: "getcardovertimelist",
    servername: "svr-saletool133",
    ...obj
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
      type: "KJDQTX",
      ...obj
    }
    let url = "/apis"
    return request.post(url, qs.stringify(params))
  }