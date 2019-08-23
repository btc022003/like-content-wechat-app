import Taro from '@tarojs/taro';

export function setToken(token) {
  Taro.setStorageSync('token', token);
}

export function getToken() {
  return Taro.getStorageSync('token');
}

export function isLogined() {
  if (getToken()) {
    return true;
  } else {
    return false;
  }
}
