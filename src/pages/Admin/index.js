import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { PrivateRoute } from "../../component/PrivateRoute";
import CreatePlan from "./CreatePlan";
import Plans from "./Plans";

const Admin = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <PrivateRoute path={`${path}/dashboard`} component={Dashboard} />
      <PrivateRoute path={`${path}/createplan`}>
        <CreatePlan />
      </PrivateRoute>
      <PrivateRoute path={`${path}/plans`}>
        <Plans />
      </PrivateRoute>
    </Switch>
  );
};

export default Admin;
