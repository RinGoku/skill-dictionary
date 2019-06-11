import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/store";
import { hogeActions } from "../actions";
import { HogeComponent } from "../components/hogeComponent";

export interface HogeActions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
  register: (v: any) => Action<any>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateName: (v: string) => dispatch(hogeActions.updateName(v)),
    updateEmail: (v: string) => dispatch(hogeActions.updateEmail(v)),
    register: (v: any) => dispatch(hogeActions.startRegister(v))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.hoge);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HogeComponent);
