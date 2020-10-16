import request from "./axios"
import qs from 'qs';



// 保存会员维系回访记录
export function addFeedBack(obj) {
  let params = {
    action: "fans",
    ctrl: "addfeedback",
    servername: "svr-saletool133",
    ...obj,
    typecode: "HYWXHF"
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}



// 获取会员维系回访列表
export function getVipList(obj) {
  let params = {
    action: "fans",
    ctrl: "getviplist",
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
      type: "HYWX",
      ...obj
    }
    let url = "/apis"
    return request.post(url, qs.stringify(params))
  }