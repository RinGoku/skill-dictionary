import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/store";
import {
  postSkillActions,
  dictionaryActions,
  skillSearchActions
} from "../actions";
import Main from "../components/main/main";

export interface MainActions {
  updateName: (v: string) => Action<string>;
  updateContent: (v: string) => Action<string>;
  updateSearchWord: (v: string) => Action<string>;
  register: (v: any) => Action<any>;
  fetch: (v: any) => Action<any>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateName: (v: string) => dispatch(postSkillActions.updateName(v)),
    updateContent: (v: string) => dispatch(postSkillActions.updateContent(v)),
    updateSearchWord: (v: string) =>
      dispatch(skillSearchActions.updateSearchWord(v)),
    register: (v: any) => dispatch(dictionaryActions.startRegister(v)),
    fetch: (v: any) => dispatch(dictionaryActions.startFetch(v))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.hoge);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
