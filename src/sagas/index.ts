import { takeEvery, all } from "redux-saga/effects";
import { ActionTypes, ActionAsyncTypes } from "../actions";
import dictionarySaga from "./dictionary/dictionary";

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    takeEvery(
      `${ActionTypes.REGISTER}${ActionAsyncTypes.STARTED}`,
      dictionarySaga.register
    ),
    takeEvery(
      `${ActionTypes.FETCH}${ActionAsyncTypes.STARTED}`,
      dictionarySaga.fetch
    )
  ]);
}
