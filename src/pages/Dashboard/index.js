import React from "react";
import { Switch, Route } from "react-router-dom";
import Plans from "./Plans";
import Home from "./Home";
import Investment from "./Investment";

const Dashboard = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/investment`}>
        <Investment />
      </Route>
      <Route path={`${path}/plans`}>
        <Plans />
      </Route>
    </Switch>
  );
};

export default Dashboard;
