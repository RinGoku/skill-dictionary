import * as React from "react";
import "./navbar.scss";
import { RouteComponentProps, withRouter } from "react-router";
var FA = require("react-fontawesome");

interface OwnProps extends RouteComponentProps {}

type MainProps = OwnProps;

const Navbar: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <div
      className="nav"
      style={{
        visibility: props.location.pathname === "/" ? "hidden" : "visible"
      }}
    >
      <FA
        name="edit"
        className="icon-button"
        onClick={() => props.history.push("/postSkill")}
      />
      <FA
        name="search"
        className="icon-button"
        onClick={() => props.history.push("/skillView")}
      />
    </div>
  );
};

export default withRouter(Navbar);
