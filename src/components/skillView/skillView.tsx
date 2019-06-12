import * as React from "react";
import "./skillView.scss";
interface OwnProps {
  list: any[];
}

type MainProps = OwnProps;

const SkillView: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <section className="info-list">
        {props.list.map((item, i) => (
          <SkillCard name={item.name} content={item.content} />
        ))}
      </section>
    </React.Fragment>
  );
};

interface CardProps {
  name: string;
  content: string;
}

const SkillCard: React.SFC<CardProps> = (props: CardProps) => {
  return (
    <div className="info-list__item">
      <div>{props.name}</div>
    </div>
  );
};

export default SkillView;
