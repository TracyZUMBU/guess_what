import React from "react";
import { connect } from "react-redux";

const scorePage = ({ datasGame, currentGame }) => {
  const { nbrOfTeam, nbrOfRound } = datasGame;
  console.log("nbrOfTeam", nbrOfTeam);
  const { scoreTeam, currentRound, teamRound } = currentGame;
  
  // Create un component which display score for each team
  const displayScore = [];
  for (let i = 0; i < nbrOfTeam / 2; i++) {
      console.log('currentRound', currentRound[i])
    displayScore.push(
      <div>
        <p>{scoreTeam[i] ? scoreTeam[i] : 0}</p>
        <span>
          {teamRound[i] ?teamRound[i] : 0 }/{nbrOfRound}
        </span>
      </div>
    );
  }

  return <div className="container container--scorePage">{displayScore}</div>;
};

function mapStateToProps(state) {
  return { datasGame: state.datasGame, currentGame: state.currentGame };
}

export default connect(mapStateToProps, null)(scorePage);
