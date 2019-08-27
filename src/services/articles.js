import request from '../utils/request';
import { serverUrl } from '../utils/config';

/**
 * 发布内容
 * @param {*} data
 */
export function publish(data) {
  return request(serverUrl + '/api/v1/articles', 'post', data);
}

/**
 * 获取文章数据
 */
export function pagedList() {
  return request(serverUrl + '/api/v1/articles', 'get');
}

/**
 * 获取详情
 * @param {*} id
 */
export function one(id) {
  return request(serverUrl + '/api/v1/articles/' + id, 'get');
}
