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

const APIs = {
  getPlace(params) {
    return Promise.resolve([
      {
        name: "111",
        count: "2",
      },
    ]);
  },
};

export default {
  ...APIs,
};
