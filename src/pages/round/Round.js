// import
import React from "react";
import { Link } from "react-router-dom"
import {connect} from "react-redux"

//component
import TitlePage from "../../components/titlePage/TitlePage";
import Button from "../../components/button/Button";

const Round = ({currentGame, datasGame, updateRound}) => {
const {currentTeam, currentRound} = currentGame;
console.log('currentGame:', currentGame)

  return (
    <div className="container container--round">
      <TitlePage title={"Manche"} />
      <div className="round__box">
        <h2 className="round__team">Equipe n°{currentTeam+1}</h2>
        <p className="round__name">
          {Object.values(datasGame.teams[currentTeam])} et {Object.values(datasGame.teams[currentTeam+1])} à vous de jouer
        </p>
      </div>
      <div className="button-container">
        <Link to="/startGame" >
          <Button className="primary" text={"Lancer la manche"} />
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {datasGame : state.datasGame, currentGame : state.currentGame};
}

// component Conteneur
function mapDispatchToProps(dispatch) {
  return {
    updateRound: function (nextRound) {
      console.log('nextRound:', nextRound)
      dispatch({ type: "updateRound", nextRound: nextRound });
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Round);
