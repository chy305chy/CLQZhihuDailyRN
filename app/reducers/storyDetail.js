/**
 * Created by cuilanqing on 2017/5/27.
 */
import * as types from '../constants/actionTypes';
import store from 'react-native-simple-store';

// 初始state
const initialState = {
    storyDetail: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case types.RECEIVE_STORY_DETAIL_INFO:
            return Object.assign({}, state, {
                storyDetail: action.storyDetail
            });
        default:
            return state;
    }
}