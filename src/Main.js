import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/1" component={One}></Route>
      <Route exact path="/2" component={Two}></Route>
      <Route exact path="/3" component={Three}></Route>
    </Switch>
  );
};

export default Main;
