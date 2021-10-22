import {createStore, applyMiddleware, Store, Middleware} from "redux";
import {persistStore} from "redux-persist";
import {Persistor} from "redux-persist/es/types";

import logger from 'redux-logger';

import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer"

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}



export const store: Store = createStore(rootReducer, applyMiddleware(...middlewares))


sagaMiddleware.run(rootSaga);

export const persistor: Persistor = persistStore(store)

