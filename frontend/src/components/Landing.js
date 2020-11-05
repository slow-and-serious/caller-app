import React from "react";
import Body from "./Body";
import HowItWorks from "./HowItWorks";
import WeServe from "./weServe";
import withRoot from "./withRoot";

function Index(props) {
  return (
    <React.Fragment>
      <Body />
      <HowItWorks loggedIn={props.loggedIn} />
      <WeServe />
    </React.Fragment>
  );
}

export default withRoot(Index);
