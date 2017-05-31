/**
 * Created by cuilanqing on 2017/5/27.
 */
import {put, take, call, fork} from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/actionTypes';
import {request} from '../utils/request';
import { receiveStoryDetailData } from '../actions/storyDetail';
import {  API_STORY_DETAIL } from '../constants/urls';

export function* requestStoryDetail(storyId) {
    const storyDetailData = yield call(request, `${API_STORY_DETAIL}${storyId}`);
    yield put(receiveStoryDetailData(storyDetailData));
}

export function* watchRequestStoryDetail() {
    while (true) {
        const {storyId} = yield take(types.REQUEST_STORY_DETAIL_INFO);
        yield fork(requestStoryDetail, storyId);
    }
}