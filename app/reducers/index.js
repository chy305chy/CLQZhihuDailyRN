/**
 * Created by cuilanqing on 2017/5/22.
 */
import {combineReducers} from 'redux';
import splash from './startImage';
import main from './main';
import storyDetail from './storyDetail';

const rootReducer = combineReducers({
    splash,
    main,
    storyDetail
});

export default rootReducer;