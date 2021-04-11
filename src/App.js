import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/App";
import Register from "./components/Register";
import Docs from "./components/Docs";

export default function All() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/api-docs" component={Docs} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
