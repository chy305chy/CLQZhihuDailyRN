/**
 * Created by cuilanqing on 2017/5/23.
 */
import * as types from '../constants/actionTypes';

export function requestLatestStories() {
    return {
        type: types.REQUEST_LATEST_STORY_LIST
    }
}

export function receiveLatestStories(latestStory) {
    return {
        type: types.RECEIVE_LATEST_STORY_LIST,
        latestStory
    }
}

export function requestPreviousStories() {
    return {
        type: types.REQUEST_PREVIOUS_STORY_LIST
    }
}

export function receivePreviousStories(preStory) {
    return {
        type: types.RECEIVE_PREVIOUS_STORY_LIST,
        preStory
    }
}
