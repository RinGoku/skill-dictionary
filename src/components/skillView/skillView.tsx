import * as React from "react";
import "./skillView.scss";
import SkillInfo from "../../models/skillInfo";
import { RouteComponentProps, withRouter } from "react-router";
interface OwnProps {
  list: any[];
  selectSkill: (skillInfo: SkillInfo) => void;
}

type MainProps = OwnProps & RouteComponentProps;

const SkillView: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <section className="info-list page">
        {props.list.map((item, i) => (
          <SkillCard
            key={i}
            name={item.name}
            tag={item.tag}
            content={item.content}
            selectSkill={(skill: SkillInfo) => {
              props.selectSkill(skill);
              props.history.push("/skillContent");
            }}
          />
        ))}
      </section>
    </React.Fragment>
  );
};

type CardProps = SkillInfo & {
  selectSkill: (skillInfo: SkillInfo) => void;
};

const SkillCard: React.SFC<CardProps> = (props: CardProps) => {
  return (
    <div className="info-list__item" onClick={() => props.selectSkill(props)}>
      <div>{props.name}</div>
      {props.tag && (
        <section className="info-list__item__tag-area">
          {props.tag.split(",").map((aTag, i) => (
            <div key={i} className="info-list__item__tag-chip">
              {aTag}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default withRouter(SkillView);
