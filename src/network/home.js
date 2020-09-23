import Vue from "vue";
import request from "./axios"
import qs from 'qs';


// 登录用户的登录信息(特殊接口)
export function requestUserInfo() {
  let url = "/api/?action=logininfo&ctrl=&systemid=3"
  return request.get(url)
}

// 获取背景图列表
export function requestBacImage() {
  let params={
    action:"fans",
    ctrl:"getbgpiclist",
    // pagesize:10,
  }
  let url = "/api"
  return request.post(url,qs.stringify(params))
}


// 获取导购关注我二维码地址
export function requestUserCode(obj) {
  let params = {
    action: "fans",
    ctrl: "getcontactme",
    cid: obj.cid,
  }
  let url = `/api?action=fans&ctrl=getcontactme&cid=${obj.cid}`
  return request.get(url)
}


// 获取导购的头像和名称
export function requestUserAvator(obj) {
  let url = `/api/?action=fans&ctrl=getavatar&cid=${obj.cid}`
  let params = {
    actions: "fans",
    ctrl: "getavatar",
    cid: obj.cid,
  }
  return request.get(url)
}

// 
export function requestFansList(obj) {
  // obj为{sadffsdfsdgsg，gdsgdsgsgs}这样
  let url = `/api/?action=fans&ctrl=getfanslist&cid=${obj.cid}}`
  let params = {
    actions: "fans",
    ctrl: "getcontactme",
    cid: obj.cid,
    cuserid: obj.cid,
    remarks: "",
    state: "",
    skipverify: ""
  }
  return request.get(url, params)
}
export function requestSendGroupMess(obj) {
  let url = `/api/?action=fans&ctrl=addmsgtemplate`
  let params = {
    cid: obj.cid,
    fansuserids: "",
    text: "",
    imageurl: "",
    title: "",
    url: "",
    picurl: "",
    desc: ""
  }
  console.log(qs.stringify(params));

  return request.post(url, qs.stringify(params))
}
