import Vue from "vue";
import request from "./axios"
import qs from 'qs';
export function requestUserInfo() {
  let url = "/api/?action=logininfo&ctrl=&systemid=1"
  return request.get(url)
}

export function requestUserCode(obj) {

  let url = `/api/?action=fans&ctrl=getcontactme&cid=${obj.cid}}`
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

export function requestUserAvator(obj) {

  let url = `/api/?action=fans&ctrl=getavatar&cid=${obj.cid}}`
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
export function requestSendGroupMess() {
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
  return request.post(url, qs.stringify(params))
}
