export default function (
  initialGame = {
    currentTeam: 0,
    scoreTeam: [],
    currentRound: 1,
    teamRound: [],
  },
  action
) {
  console.log("action-currentGame:", action);
  console.log("currentGame:", initialGame);
  const {scoreTeam, teamRound, currentRound, currentTeam} = initialGame;
  const datas = action.datas;
  console.log('datas', action)

  if (action.type === "updateRound") {
  initialGame.currentRound += action.nextRound
  return initialGame;
} else if (action.type === "score") {
  //const datas = action.datas
  scoreTeam[datas.team] = datas.score
  teamRound[datas.team] = currentRound
  return initialGame;
} else if (action.type === "nextTeam"){
  if(currentTeam === action.currentTeam){
    initialGame.currentRound += 1 
  }
  console.log('nextTeam')
  initialGame.currentTeam += 2
  console.log(currentTeam)
  return initialGame;
}else {
  return initialGame;
}
}
