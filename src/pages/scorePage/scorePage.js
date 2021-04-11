import React from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";

//component
import Button from "../../components/button/Button";

const scorePage = ({ datasGame, currentGame, updateCurrentTeam }) => {
  const { nbrOfTeam, nbrOfRound } = datasGame;
  const { scoreTeam, currentRound, teamRound } = currentGame;

  // Create un component which display score for each team
  const displayScore = [];
  for (let i = 0; i < nbrOfTeam / 2; i++) {
    console.log("currentRound", currentRound);
    displayScore.push(
      <div>
        <p>{scoreTeam[i] ? scoreTeam[i] : 0}</p>
        <span>
          {teamRound[i] ? teamRound[i] : 0}/{nbrOfRound}
        </span>
      </div>
    );
  }

  return (
    <div className="container container--scorePage">
      <div>{displayScore}</div>
      <Link to="/jouer" onClick={() => updateCurrentTeam(nbrOfTeam/2)}>
      <Button className="primary" text={"Manche suivante"} />
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return { datasGame: state.datasGame, currentGame: state.currentGame };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentTeam: function (nbrOfTeam){
      dispatch({type: "nextTeam", currentTeam: nbrOfTeam});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(scorePage);
