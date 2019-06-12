import { Action } from "typescript-fsa";
import { call, put } from "redux-saga/effects";
import { dictionaryActions } from "../../actions";
import { pushSearch, fetchData } from "../../api/api";

const dictionarySaga = {
  register: function*(action: Action<any>): IterableIterator<any> {
    console.log("dictionarySaga: register started", action.payload);
    const state = action.payload;
    const { payload, error } = yield call(pushSearch, state);
    if (payload && !error) {
      yield put(dictionaryActions.doneRegister(state));
    } else {
      yield put(dictionaryActions.failedRegister(state));
    }
  },
  fetch: function*(action: Action<any>): IterableIterator<any> {
    console.log("dictionarySaga: register started", action.payload);
    const state = action.payload;
    const { payload, error } = yield call(fetchData, { name: state });
    if (payload && !error) {
      if (payload.hits && payload.hits.hits) {
        yield put(
          dictionaryActions.doneFetch(
            payload.hits.hits.map((hit: any) => hit._source)
          )
        );
      }
    } else {
      yield put(dictionaryActions.failedFetch(state));
    }
  }
};
export default dictionarySaga;
