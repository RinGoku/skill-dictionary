import * as React from "react";
import "./landing.scss";
import { RouteComponentProps, withRouter } from "react-router";
import Top from "../../assets/images/Top.jpg";

interface OwnProps extends RouteComponentProps {}

type MainProps = OwnProps;

const Landing: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <div className="landing-image" style={{ backgroundImage: `url(${Top})` }}>
        <div className="landing-content">
          <div className="typography">Enjoy Knowledge!</div>
          <button
            className="use-button"
            onClick={() => props.history.push("/postSkill")}
          >
            Start
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

interface CardProps {
  name: string;
  content: string;
}

export default withRouter(Landing);
