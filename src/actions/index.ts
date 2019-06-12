import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export enum ActionTypes {
  REGISTER = "ACTIONS_REGISTER",
  FETCH = "ACTIONS_FETCH",
  UPDATE_SEARCH_WORD = "ACTIONS_UPDATE_SEARCH_WORD",
  UPDATE_NAME = "ACTIONS_UPDATE_NAME",
  UPDATE_CONTENT = "ACTIONS_UPDATE_CONTENT"
}

export enum ActionAsyncTypes {
  STARTED = "_STARTED",
  DONE = "_DONE",
  FAILED = "_FAILED"
}

const register = actionCreator.async<{}, {}, {}>(ActionTypes.REGISTER);
const fetch = actionCreator.async<{}, {}, {}>(ActionTypes.FETCH);

export const postSkillActions = {
  updateName: actionCreator<string>(ActionTypes.UPDATE_NAME),
  updateContent: actionCreator<string>(ActionTypes.UPDATE_CONTENT)
};

export const skillSearchActions = {
  updateSearchWord: actionCreator<string>(ActionTypes.UPDATE_SEARCH_WORD)
};

export const dictionaryActions = {
  startRegister: register.started,
  failedRegister: register.failed,
  doneRegister: register.done,
  startFetch: fetch.started,
  doneFetch: fetch.done,
  failedFetch: fetch.failed
};
