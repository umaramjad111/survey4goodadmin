import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Charity from "../component/charity";
import Login from "../component/login";
import Surveys from "../component/surveys";
export default function Routes() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Charity} />
        <Route exact path="/charities" component={Charity} />
        <Route exact path="/surveys" component={Surveys} />
      </Router>
    </>
  );
}
