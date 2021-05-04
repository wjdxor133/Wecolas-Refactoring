import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
// import Signup from "./pages/Signup/Signup";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
