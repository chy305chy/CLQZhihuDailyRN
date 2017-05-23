/**
 * Created by cuilanqing on 2017/5/23.
 */

import {put, take, call, fork} from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/actionTypes';
import {request} from '../utils/request';
import {receiveStartImageUrl} from '../actions/startImage';
import { API_START_IMAGE } from '../constants/urls';

export function* requestStartImageUrl() {
    try {
        const startImageInfoDict = yield call(request, API_START_IMAGE, 'get');
        yield put(receiveStartImageUrl(
            startImageInfoDict.creatives[0].url
        ));
    }catch (error) {
        yield put(receiveStartImageUrl(''));
    }
}

export function* watchRequestStartImageUrl() {
    while(true) {
        yield take(types.REQUEST_START_IMAGE_URL);
        yield fork(requestStartImageUrl);
    }
}