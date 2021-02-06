import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//component
import Home from "./pages/home/Home"
import CreateGame from "./pages/createGame/CreateGame"
import Round from "./pages/round/Round"
import StartGame from "./pages/startGame/StartGame"


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/créer-une-partie" component={CreateGame} />
        <Route exact path="/jouer" component={Round}/>
        <Route exact path="/startGame" component={StartGame} />
        
      </Switch>
    </Router>
  );
};

export default App;

