import React from "react";
import { Switch, Route } from "react-router-dom";
import EditUser from "./EditUser";
import Home from "./Home";

const Dashboard = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/:id`}>
        <EditUser />
      </Route>
    </Switch>
  );
};

export default Dashboard;
