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
  let params = {
    action: "fans",
    ctrl: "getbgpiclist",
    // pagesize:10,
    servername: "svr-saletool133"

    // pagesize:10,
  }
  let url = "/apis"
  return request.post(url, qs.stringify(params))
}


// 获取导购关注我二维码地址
export function requestUserCode(obj) {
  let params = {
    action: "fans",
    ctrl: "getcontactme",
    cid: obj.cid,
    servername: "svr-saletool133"

  }
  let url = `/apis`
  return request.post(url, qs.stringify(params))

}


// 获取导购的头像和名称
export function requestUserAvator(obj) {
  // let url = `/ss/?action=fans&ctrl=getavatar&cid=${obj.cid}`
  let params = {
    action: "fans",
    ctrl: "getavatar",
    cid: obj.cid,
    servername: "svr-saletool133"

  }
  let url = `/apis`
  return request.post(url, qs.stringify(params))
}

// 
export function requestFansList(obj) {
  // obj为{sadffsdfsdgsg，gdsgdsgsgs}这样
  let url = `/apis`
  let params = {
    action: "fans",
    ctrl: "getfanslist",
    cid: obj.cid,
    servername: "svr-saletool133"
  }
  return request.post(url, qs.stringify(params))
}
// 图片上传base64返回一个url.
export function requesUrl(BaseUrl) {
  let url = `/apis`;
  let param = {
    imgName: "poster.png",
    base64Img: BaseUrl,
    createid: "110",
    createname: "weicattle"
  }
  let params = {
    action: "tool",
    servername: "svr-build",
    ctrl: "saveSignatureImage",
    data: JSON.stringify(param)
  }
  return request.post(url, qs.stringify(params))
}

export function requestSendGroupMess(obj) {
  let url = `/ss/?action=fans&ctrl=addmsgtemplate`
  let params = {
    cid: obj.cid,
    fansuserids: "",
    text: "",
    imageurl: "",
    title: "",
    url: "",
    picurl: "",
    desc: "",
    servername: "svr-saletool133"
  }
  return request.post(url, qs.stringify(params))
}
