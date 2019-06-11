import * as React from "react";
import { HogeState } from "../reducers";
import { HogeActions } from "../containers/hogeContainer";

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

export const HogeComponent: React.SFC<HogeProps> = (props: HogeProps) => {
  return (
    <div>
      <div className="field">
        <input
          type="text"
          placeholder="name"
          value={props.name}
          onChange={e => props.updateName(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={props.email}
          onChange={e => props.updateEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="button"
          onClick={e =>
            props.register({ name: props.name, email: props.email })
          }
        />
      </div>
    </div>
  );
};
