import Vue from "vue";
import request from "./axios"
import qs from 'qs';






// 获取背景图列表
export function getVipList(obj) {
  let params = {
    action: "fans",
    ctrl: "getvipscountlist",
    // pagesize:10,
    servername: "svr-saletool133",
    ...obj
    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}

// 获取背景图列表
export function getVipListDetail(obj) {
    let params = {
      action: "fans",
      ctrl: "getvipslistbyday",
      servername: "svr-saletool133",
      ...obj
    }
    let url = "/apis"
    return request.post(url, qs.stringify(params))
  }
  
