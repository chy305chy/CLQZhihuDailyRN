/**
 * Created by cuilanqing on 2017/5/23.
 */
import { fork } from 'redux-saga/effects';
import { watchRequestStartImageUrl } from './startImage';
import { watchRequestLatestStories } from './main';

export default function* rootSaga() {
    yield [fork(watchRequestStartImageUrl), fork(watchRequestLatestStories)];
}