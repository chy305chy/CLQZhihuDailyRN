/**
 * Created by cuilanqing on 2017/5/22.
 */
import * as types from '../constants/actionTypes';

// 初始state
const initialState = {
    startImageUrl: ''
};

export default function startImage(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_START_IMAGE_URL:
            return Object.assign({}, state, {
                startImageUrl: action.startImageUrl
            });
        default:
            return state;
    }
}