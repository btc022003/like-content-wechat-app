import Taro from '@tarojs/taro';
import { getToken } from './tools';

/**
 * request请求
 * @param {*} url     请求地址
 * @param {*} method  请求方式
 * @param {*} data    传递的数据
 */
export default function request(url, method, data) {
  Taro.showLoading({
    title: '加载中...',
  });
  return Taro.request({
    url,
    method,
    data,
    header: {
      'content-type': 'application/json',
      Authorization: 'bearer ' + getToken(),
    },
  })
    .then(res => {
      Taro.hideLoading();
      if (res.statusCode == 401) {
        // 需要登录
        Taro.redirectTo({ url: '/pages/auth/login' });
      }
      return res.data;
    })
    .catch(err => {
      Taro.hideLoading();
      return err;
    });
}
