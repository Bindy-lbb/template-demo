import request from "@/utils/request";
import axios from "axios";

export function login(data) {
  return request({
    url: "/vue-admin-template/user/login",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post",
  });
}

export function getPlace() {
  return axios.get({
    url: "http://api.map.baidu.com/place/v2/suggestion",
  });
}
