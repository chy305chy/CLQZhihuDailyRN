/**
 * Created by cuilanqing on 2017/5/22.
 */
import * as types from '../constants/actionTypes';

// 向服务器请求startImage的url
export function requestStartImageUrl() {
    return {
        type: types.REQUEST_START_IMAGE_URL
    }
}

// 获取到startImage的url
export function receiveStartImageUrl(startImageUrl) {
    return {
        type: types.RECEIVE_START_IMAGE_URL,
        startImageUrl
    };
}
