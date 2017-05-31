/**
 * Created by cuilanqing on 2017/5/23.
 */
import { fork } from 'redux-saga/effects';
import { watchRequestStartImageUrl } from './startImage';
import { watchRequestLatestStories, watchRequestPreviousStories } from './main';
import {watchRequestStoryDetail} from './storyDetail';

export default function* rootSaga() {
    yield [
        fork(watchRequestStartImageUrl),
        fork(watchRequestLatestStories),
        fork(watchRequestPreviousStories),
        fork(watchRequestStoryDetail)
    ];
}