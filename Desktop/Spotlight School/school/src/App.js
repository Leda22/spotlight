import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from "./Admin";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Admin} />
      </Switch>
    </Router>
  );
}