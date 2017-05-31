/**
 * Created by cuilanqing on 2017/5/27.
 */
import * as types from '../constants/actionTypes';

export function requestStoryDetail(storyId) {
    return {
        type: types.REQUEST_STORY_DETAIL_INFO,
        storyId
    }
}

export function receiveStoryDetailData(storyDetail) {
    return {
        type: types.RECEIVE_STORY_DETAIL_INFO,
        storyDetail
    }
}