import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const WebPages = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={path}>
        <Home />
      </Route>
      <Route path={`${path}/about`}>
        <About />
      </Route>
    </Switch>
  );
};

export default WebPages;
