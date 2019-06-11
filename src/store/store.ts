import { createStore, combineReducers, applyMiddleware } from "redux";
import { hogeReducer, HogeState } from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";

export type AppState = {
  hoge: HogeState;
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers<AppState>({
      hoge: hogeReducer
    }),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
