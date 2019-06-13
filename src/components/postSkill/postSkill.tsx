import * as React from "react";
import "./postSkill.scss";
import "marked";
import "highlightjs";
import Markdown from "../markdown/markdown";

interface SkillInfo {
  name: string;
  content: string;
}

interface OwnProps {
  name: string;
  content: string;
  updateName: (v: string) => void;
  updateContent: (v: string) => void;
  register: (v: SkillInfo) => void;
}

type MainProps = OwnProps;

const PostSkill: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <section className="input-area page">
        <div className="input-area__item">
          <input
            type="text"
            className="input-area__textbox"
            placeholder="タイトル"
            value={props.name}
            onChange={e => props.updateName(e.target.value)}
          />
        </div>
        <div className="input-area__item">
          <textarea
            className="input-area__textarea"
            placeholder="内容"
            value={props.content}
            onChange={e => props.updateContent(e.target.value)}
          />
        </div>
        <div className="input-area__item">
          <Markdown markdown={props.content} />
        </div>
        <div className="input-area__item">
          <button
            type="button"
            className="input-area__register-button"
            onClick={e =>
              props.register({ name: props.name, content: props.content })
            }
          >
            登録
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PostSkill;
