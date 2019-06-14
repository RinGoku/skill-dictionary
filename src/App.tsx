import React, { Component } from "react";
import "./App.scss";
import { PostSkillState } from "./reducers";
import PostSkill from "./components/postSkill/postSkill";
import SkillView from "./components/skillView/skillView";
import SkillSearch from "./components/skillSearch/skillSearch";
import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "./store/store";
import {
  postSkillActions,
  dictionaryActions,
  skillSearchActions
} from "./actions";
import { Route, Switch, RouteComponentProps, withRouter } from "react-router";
import landing from "./components/landing/landing";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/navbar/navbar";
import SkillInfo from "./models/skillInfo";
import SkillContent from "./components/skillContent/skillContent";

export interface MainActions {
  updateName: (v: string) => Action<string>;
  updateTag: (v: string) => Action<string>;
  updateContent: (v: string) => Action<string>;
  updateSearchWord: (v: string) => Action<string>;
  selectSkill: (v: SkillInfo) => Action<SkillInfo>;
  register: (v: any) => Action<any>;
  fetch: (v: any) => Action<any>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateName: (v: string) => dispatch(postSkillActions.updateName(v)),
    updateTag: (v: string) => dispatch(postSkillActions.updateTag(v)),
    updateContent: (v: string) => dispatch(postSkillActions.updateContent(v)),
    updateSearchWord: (v: string) =>
      dispatch(skillSearchActions.updateSearchWord(v)),
    selectSkill: (v: SkillInfo) => dispatch(skillSearchActions.selectSkill(v)),
    register: (v: any) => dispatch(dictionaryActions.startRegister(v)),
    fetch: (v: any) => dispatch(dictionaryActions.startFetch(v))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.postSkill);
}

interface OwnProps extends RouteComponentProps {}

type MainProps = OwnProps & PostSkillState & MainActions;
class App extends Component<MainProps> {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={landing} />
                  <Route
                    exact
                    path="/postSkill"
                    render={() => (
                      <PostSkill
                        name={this.props.name}
                        tag={this.props.tag}
                        content={this.props.content}
                        updateName={this.props.updateName}
                        updateContent={this.props.updateContent}
                        updateTag={this.props.updateTag}
                        register={this.props.register}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/skillSearch"
                    render={() => (
                      <SkillSearch
                        searchWord={this.props.searchWord}
                        fetch={this.props.fetch}
                        updateSearchWord={this.props.updateSearchWord}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/skillView"
                    render={() => (
                      <section className="page">
                        <SkillSearch
                          searchWord={this.props.searchWord}
                          fetch={this.props.fetch}
                          updateSearchWord={this.props.updateSearchWord}
                        />
                        <SkillView
                          list={this.props.list}
                          selectSkill={this.props.selectSkill}
                        />
                      </section>
                    )}
                  />
                  <Route
                    exact
                    path="/skillContent"
                    render={() => (
                      <SkillContent skillInfo={this.props.selectedSkill} />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
