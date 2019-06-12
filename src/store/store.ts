import { createStore, combineReducers, applyMiddleware } from "redux";
import { hogeReducer, PostSkillState } from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";
import { createLogger } from "redux-logger";

export type AppState = {
  hoge: PostSkillState;
};
const logger = createLogger({
  diff: true,
  collapsed: true
});
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers<AppState>({
      hoge: hogeReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
