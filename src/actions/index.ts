import actionCreatorFactory, {
  ActionCreator,
  Success,
  Failure
} from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export enum ActionTypes {
  REGISTER = "ACTIONS_REGISTER",
  UPDATE_NAME = "ACTIONS_UPDATE_NAME",
  UPDATE_EMAIL = "ACTIONS_UPDATE_EMAIL"
}

export enum ActionAsyncTypes {
  STARTED = "_STARTED",
  DONE = "_DONE",
  FAILED = "_FAILED"
}

const register = actionCreator.async<{}, {}, {}>("ACTIONS_REGISTER");

export interface RegisterActions {
  startRegister: ActionCreator<{}>;
  failedRegister: ActionCreator<Failure<{}, {}>>;
  doneRegister: ActionCreator<Success<{}, {}>>;
}

export const hogeActions = {
  updateName: actionCreator<string>("ACTIONS_UPDATE_NAME"),
  updateEmail: actionCreator<string>("ACTIONS_UPDATE_EMAIL"),
  startRegister: register.started,
  failedRegister: register.failed,
  doneRegister: register.done
};
