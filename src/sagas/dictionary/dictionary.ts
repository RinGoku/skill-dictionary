import { Action } from "typescript-fsa";
import { call, put } from "redux-saga/effects";
import { hogeActions } from "../../actions";
import { pushSearch } from "../../api/api";

const dictionarySaga = {
  startRegister: function*(action: Action<any>): IterableIterator<any> {
    console.log("dictionarySaga: register started", action.payload);
    const state = action.payload;
    const { payload, error } = yield call(pushSearch, state);
    if (payload && !error) {
      yield put(hogeActions.doneRegister);
    } else {
      yield put(hogeActions.failedRegister);
    }
  }
};
export default dictionarySaga;
