import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from './reducers.js';
import rootSaga from './rootSaga.js';

const initStore = () => {
    const middlewares = [];
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);
    middlewares.push(thunk);

    const store = createStore(
        reducers,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default initStore;
