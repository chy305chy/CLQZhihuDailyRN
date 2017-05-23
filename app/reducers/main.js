/**
 * Created by cuilanqing on 2017/5/23.
 */
import * as types from '../constants/actionTypes';

// 初始state
const initialState = {
    date: '',       // 最新的日期
    stories: [],    // story列表
    topStories: []  // 顶部story
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_LATEST_STORY_LIST:
            return Object.assign({}, state, {
                date: action.latestStory.date,
                stories: action.latestStory.stories,
                topStories: action.latestStory.top_stories
            });
        default:
            return state;
    }
}