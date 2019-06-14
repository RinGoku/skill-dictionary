import { reducerWithInitialState } from "typescript-fsa-reducers";
import {
  postSkillActions,
  dictionaryActions,
  skillSearchActions
} from "../actions";
import SkillInfo from "../models/skillInfo";

export interface PostSkillState {
  name: string;
  tag: string;
  content: string;
  searchWord: string;
  selectedSkill: SkillInfo;
  list: any[];
}

const initialState: PostSkillState = {
  name: "",
  tag: "",
  content: "",
  searchWord: "",
  selectedSkill: {
    name: "",
    tag: "",
    content: ""
  },
  list: []
};

export const rootReducer = reducerWithInitialState(initialState)
  .case(postSkillActions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(postSkillActions.updateContent, (state, content) => {
    return Object.assign({}, state, { content });
  })
  .case(postSkillActions.updateTag, (state, tag) => {
    return Object.assign({}, state, { tag });
  })
  .case(skillSearchActions.updateSearchWord, (state, searchWord) => {
    return Object.assign({}, state, { searchWord });
  })
  .case(skillSearchActions.selectSkill, (state, selectedSkill) => {
    return Object.assign({}, state, { selectedSkill });
  })
  .case(dictionaryActions.startRegister, (state, info: any) => {
    console.log("reducer: register start");
    return Object.assign({}, state, { name: info.name, content: info.content });
  })
  .case(dictionaryActions.failedRegister, (state, info: any) => {
    console.log("reducer: register failed");
    return Object.assign({}, state, { name: info.name, content: info.content });
  })
  .case(dictionaryActions.doneRegister, (state, info: any) => {
    console.log("reducer: register done");
    return Object.assign({}, state, { name: info.name, content: info.content });
  })
  .case(dictionaryActions.startFetch, (state, info: any) => {
    console.log("reducer: fetch start");
    return state;
  })
  .case(dictionaryActions.failedFetch, (state, info: any) => {
    console.log("reducer: fetch failed");
    return state;
  })
  .case(dictionaryActions.doneFetch, (state, info: any) => {
    console.log("reducer: fetch done");
    return Object.assign({}, state, { list: info });
  });
