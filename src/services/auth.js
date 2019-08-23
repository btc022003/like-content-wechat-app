import request from '../utils/request';
import { serverUrl } from '../utils/config';

/**
 * 登录
 * @param {*} data
 *  user_name
 *  password
 */
export function login(data) {
  return request(serverUrl + '/api/v1/auth/login', 'post', data);
}

/**
 * 注册
 * @param {*} data
 *  user_name 用户名(必填)
 *  password  密码(必填)
 *  nick_name 昵称
 *  avatars   头像
 *  mobile    手机号
 *  email     邮箱
 */
export function reg(data) {
  return request(serverUrl + '/api/v1/auth/reg', 'post', data);
}
