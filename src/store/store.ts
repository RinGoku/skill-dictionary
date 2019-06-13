import { createStore, combineReducers, applyMiddleware } from "redux";
import { PostSkillState, rootReducer } from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";
import { createLogger } from "redux-logger";

export type AppState = {
  postSkill: PostSkillState;
};
const logger = createLogger({
  diff: true,
  collapsed: true
});
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers<AppState>({
      postSkill: rootReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
