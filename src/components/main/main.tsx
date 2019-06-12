import * as React from "react";
import { PostSkillState } from "../../reducers";
import { MainActions } from "../../containers/main";
import "./main.scss";
import PostSkill from "../postSkill/postSkill";
import SkillView from "../skillView/skillView";
import SkillSearch from "../skillSearch/skillSearch";
interface OwnProps {}

type MainProps = OwnProps & PostSkillState & MainActions;

const Main: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <PostSkill
        name={props.name}
        content={props.content}
        updateName={props.updateName}
        updateContent={props.updateContent}
        register={props.register}
      />
      <SkillSearch
        searchWord={props.searchWord}
        fetch={props.fetch}
        updateSearchWord={props.updateSearchWord}
      />
      <SkillView list={props.list} />
    </React.Fragment>
  );
};

export default Main;
