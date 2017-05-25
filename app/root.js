/**
 * Created by cuilanqing on 2017/5/23.
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootSaga from './sagas/index';
import App from './app';

const store = configureStore();

store.runSaga(rootSaga);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;