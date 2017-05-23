/**
 * Created by cuilanqing on 2017/5/23.
 */
import {put, take, call, fork} from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/actionTypes';
import {request} from '../utils/request';
import { receiveLatestStories } from '../actions/main';
import { API_STORY_LATEST } from '../constants/urls';

export function* requestLatestStories() {
    try {
        const latestStory = yield call(request, API_STORY_LATEST, 'get');
        yield put(receiveLatestStories(latestStory));
    }catch (error) {
        yield put(receiveLatestStories({}));
    }
}

export function* watchRequestLatestStories() {
    while(true) {
        yield take(types.REQUEST_LATEST_STORY_LIST);
        yield fork(requestLatestStories);
    }
}