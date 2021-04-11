export default function (datas = {}, action) {
  
  if (action.type === "datasGame") {
    const datasGame = action.datas;
    const detailsGame = {
      level: datasGame.level,
      nbrOfTeam: parseInt(datasGame.numOfPlayers),
      nbrOfRound:
        parseInt(datasGame.roundByGame *
        (datasGame.numOfPlayers / 2)),
      timeByRound: parseInt(datasGame.timeByRound),
      wordsByRound: parseInt(datasGame.wordByRound),
      teams: datasGame.teams,
    };
  
    return detailsGame;
  } else {
    return datas;
  }
}
