import * as React from "react";
import { PostSkillState } from "../../reducers";
import { MainActions } from "../../containers/main";
import "./navbar.scss";
interface OwnProps {}

type MainProps = OwnProps & PostSkillState & MainActions;

const Navbar: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      {/* <section className="input-area">
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
          <button
            type="button"
            onClick={e =>
              props.register({ name: props.name, email: props.email })
            }
          >
            登録
          </button>
        </div>
      </section>
      <section>
        <input
          type="text"
          placeholder="name"
          value={props.name}
          onChange={e =>
            props.updateName(e.target.value) && props.fetch(e.target.value)
          }
        />
      </section>
      <section className="info-list">
        {props.list.map((item, i) => (
          <div key={i} className="info-list__item">
            <div>{item.name}</div>
            <div>{item.email}</div>
          </div>
        ))}
      </section> */}
    </React.Fragment>
  );
};

export default Navbar;
