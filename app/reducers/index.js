/**
 * Created by cuilanqing on 2017/5/22.
 */
import {combineReducers} from 'redux';
import splash from './startImage';
import main from './main';

const rootReducer = combineReducers({
    splash,
    main
});

export default rootReducer;