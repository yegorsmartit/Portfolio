import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { reducer as form } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import sagaReducers from '../reducers';
import history from '../utils/history';
import rootSaga from '../saga';
import { getProject } from '../saga/projectSaga';

const sagaMiddleware = createSagaMiddleware();

// const initialState = {};
// const middleware = [ sagaMiddleware ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const router = routerMiddleware(history);

const Store = createStore(
  sagaReducers,
  // initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware, router))
);
export default Store;


// const saga = createSagaMiddleware();
//
// const Store = createStore(sagaReducers, compose(applyMiddleware(
//   // thunk,
//   saga),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// ));
//
// export default Store;

// const initStore = () => {
//     // return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, router)));
//     return createStore(sagaReducers, composeEnhancers(applyMiddleware(sagaMiddleware, router)));
// };
//
// export default initStore;

sagaMiddleware.run(rootSaga);
