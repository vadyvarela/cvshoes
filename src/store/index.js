import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMidleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMidleware = createSagaMidleware({
    sagaMonitor,
});

const enhancer =
    process.env.NODE_ENV === 'development'
        ? compose(
            console.tron.createEnhancer(),
            applyMiddleware(sagaMidleware)
        )
        : applyMiddleware(sagaMidleware);

const store = createStore(rootReducer, enhancer);

sagaMidleware.run(rootSaga);

export default store;
