import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./Dashboard";
import WebPages from "./WebPages";
import About from "./WebPages/About";
import Services from "./WebPages/Services";
import { PrivateRoute } from "../component/PrivateRoute";
import Admin from "./Admin";
import Home from "./Admin/Home";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={WebPages} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/admin/login" component={Home} />
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
  );
};

export default Pages;
