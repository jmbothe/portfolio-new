import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Connect from "./Connect";
import JustBecause from "./JustBecause";
import Initial from "./Initial";

class Sections extends Component {
  render() {
    const section =
      `${this.props.activeSection}`.charAt(0).toUpperCase() +
      `${this.props.activeSection}`.slice(1);
    const componentList = {
      Initial,
      About,
      Projects,
      Skills,
      Connect,
      JustBecause
    };
    const Element = componentList[section];

    return (
      <CSSTransitionGroup
        component="div"
        className="sections-container"
        transitionName="sections"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
      >
        <Element key={section} />
      </CSSTransitionGroup>
    );
  }
}

export default Sections;
