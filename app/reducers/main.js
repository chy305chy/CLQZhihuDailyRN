/**
 * Created by cuilanqing on 2017/5/23.
 */
import * as types from '../constants/actionTypes';
import store from 'react-native-simple-store';

// 初始state
const initialState = {
    date: '',       // 最新的日期
    stories: {},    // story列表
    topStories: [],  // 顶部story
    storySectionIds: [],
    storyRowIds: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        case types.RECEIVE_LATEST_STORY_LIST:
            const tmpStory = setStoriesData(action.latestStory);
            store.save('storyList', tmpStory);

            const tmpSectionIds = [];
            tmpSectionIds.push(action.latestStory.date);
            store.save('storySectionIds', tmpSectionIds);

            const tmpRowId = [];
            for (i = 0; i < action.latestStory.stories.length; i++) {
                tmpRowId.push(action.latestStory.date+':'+i);
            }
            const tmpRowIds = [];
            tmpRowIds.push(tmpRowId);
            store.save('storyRowIds', tmpRowIds);

            return Object.assign({}, state, {
                date: action.latestStory.date,
                stories: tmpStory,
                topStories: action.latestStory.top_stories,
                storySectionIds: tmpSectionIds,
                storyRowIds: tmpRowIds
            });

        case types.RECEIVE_PREVIOUS_STORY_LIST:
            return Object.assign({}, state, {
                date: action.preStory.date,
                stories: action.preStory.stories,
                storySectionIds: action.preStory.storySectionIds,
                storyRowIds: action.preStory.storyRowIds
            });
        default:
            return state;
    }
}

function setStoriesData(storyData) {
    const tmpDataBlob = {};
    tmpDataBlob[storyData.date] = storyData.date;
    const length = storyData.stories.length;
    for (i = 0; i < length; i++) {
        tmpDataBlob[storyData.date+':'+i] = storyData.stories[i];
    }
    return tmpDataBlob;
}