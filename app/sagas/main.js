/**
 * Created by cuilanqing on 2017/5/23.
 */
import {put, take, call, fork} from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/actionTypes';
import {request} from '../utils/request';
import { receiveLatestStories, receivePreviousStories, receiveStoryDetailData } from '../actions/main';
import { API_STORY_LATEST, API_STORY_PREVIOUS, API_STORY_DETAIL } from '../constants/urls';

export function* requestLatestStories() {
    try {
        const latestStory = yield call(request, API_STORY_LATEST, 'get');
        yield call(store.save, 'currentDate', latestStory.date);
        yield put(receiveLatestStories(latestStory));
        yield call(store.save, 'isLoading', false);
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

export function* requestPreviousStories() {
    try {
        yield call(store.save, 'isLoading', true);
        const currDate = yield call(store.get, 'currentDate');
        const preStory = yield call(request, `${API_STORY_PREVIOUS}${currDate}`, 'get');
        yield call(store.save, 'currentDate', preStory.date);
        const tmpList = yield call(store.get, 'storyList');

        const tmpStorySectionIds = yield call(store.get, 'storySectionIds');
        const tmpStoryRowIds = yield call(store.get, 'storyRowIds');
        tmpStorySectionIds.push(preStory.date);
        const tmpRowIds = [];
        for (i = 0; i < preStory.stories.length; i++) {
            tmpRowIds.push(preStory.date+':'+i);
        }
        tmpStoryRowIds.push(tmpRowIds);

        yield call(store.save, 'storySectionIds', tmpStorySectionIds);
        yield call(store.save, 'storyRowIds', tmpStoryRowIds);

        tmpList[preStory.date] = preStory.date;
        for (i = 0; i < preStory.stories.length; i++) {
            tmpList[preStory.date+':'+i] = preStory.stories[i];
        }
        yield call(store.save, 'storyList', tmpList);
        yield put(receivePreviousStories(
            {
                date: preStory.date,
                stories: tmpList,
                storySectionIds: tmpStorySectionIds,
                storyRowIds: tmpStoryRowIds
            })
        );
        yield call(store.save, 'isLoading', false);
    }catch(error) {
        yield put(receivePreviousStories({}));
    }
}

export function* watchRequestPreviousStories() {
    while (true) {
        yield take(types.REQUEST_PREVIOUS_STORY_LIST);
        yield fork(requestPreviousStories);
    }
}
