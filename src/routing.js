import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MonthView from "./pages/MonthView";

export default function AppRouting() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MonthView} />
        <Route exact path="/:year/:month" component={MonthView} />
      </Switch>
    </Router>
  );
}
