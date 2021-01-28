import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//component
import Home from "./pages/home/Home"
import CreateGame from "./pages/createGame/CreateGame"


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/créer-une-partie" component={CreateGame} />
      </Switch>
    </Router>
  );
};

export default App;

