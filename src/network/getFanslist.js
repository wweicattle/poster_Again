import Vue from "vue";
import request from "./axios"
import qs from 'qs';



// 获取会员列表
export function getFanList(obj) {
  let params = {
    action: "fans",
    ctrl: "getfanscountlist",
    // pagesize:10,
    servername: "svr-saletool133",
    ...obj
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}

// 获取会员列表
export function getFanListDetail(obj) {
    let params = {
      action: "fans",
      ctrl: "getnewfanslistbyday",
      servername: "svr-saletool133",
      ...obj
    }
    let url = "/apis"
    return request.post(url, qs.stringify(params))
  }
  
