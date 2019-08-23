import request from '../utils/request';
import { serverUrl } from '../utils/config';

/**
 * 发布内容
 * @param {*} data
 */
export function publish(data) {
  return request(serverUrl + '/api/v1/articles', 'post', data);
}
