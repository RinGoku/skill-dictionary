import * as React from "react";
import "./skillContent.scss";
import SkillInfo from "../../models/skillInfo";
import Markdown from "../markdown/markdown";
interface OwnProps {
  skillInfo: SkillInfo;
}

type MainProps = OwnProps;

const SkillContent: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <section className="page">
        <div className="title">{props.skillInfo.name}</div>
        <section className="tag-area">
          {props.skillInfo.tag &&
            props.skillInfo.tag.split(",").map((aTag, i) => (
              <div key={i} className="tag-chip">
                {aTag}
              </div>
            ))}
        </section>
        <Markdown markdown={props.skillInfo.content} />
      </section>
    </React.Fragment>
  );
};

export default SkillContent;
