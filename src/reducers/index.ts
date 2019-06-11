import { reducerWithInitialState } from "typescript-fsa-reducers";
import { hogeActions } from "../actions";

export interface HogeState {
  name: string;
  email: string;
}

const initialState: HogeState = {
  name: "",
  email: ""
};

export const hogeReducer = reducerWithInitialState(initialState)
  .case(hogeActions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(hogeActions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  })
  .case(hogeActions.startRegister, (state, info: any) => {
    console.log("reducer: register start");
    return Object.assign({}, state, { name: info.name, email: info.email });
  })
  .case(hogeActions.failedRegister, (state, info: any) => {
    console.log("reducer: register failed");
    return Object.assign({}, state, { name: info.name, email: info.email });
  })
  .case(hogeActions.doneRegister, (state, info: any) => {
    console.log("reducer: register done");
    return Object.assign({}, state, { name: info.name, email: info.email });
  });
