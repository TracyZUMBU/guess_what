import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//component
import Home from "./pages/home/Home";
import CreateGame from "./pages/createGame/CreateGame";
import Round from "./pages/round/Round";
import StartGame from "./pages/startGame/StartGame";
import Game from "./pages/game/Game";
import GuessWords from "./pages/guessWords/GuessWords";

//Reducer
import datasGame from "./reducers/datasGame.reducer";
//Provider
import { Provider } from "react-redux";
//Store
import { createStore, combineReducers } from "redux";
const store = createStore(
  combineReducers({ datasGame})
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/créer-une-partie" component={CreateGame} />
          <Route exact path="/jouer" component={Round} />
          <Route exact path="/startGame" component={StartGame} />
          <Route exct path="/jeu" component={Game} />
          <Route exact path="/deviner" component={GuessWords} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
