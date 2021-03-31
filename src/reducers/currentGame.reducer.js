export default function (
  initialGame = {
    currentTeam: 0,
    scoreTeam: [],
    currentRound: 0,
    teamRound: [],
  },
  action
) {
  console.log("action-currentGame:", action);
  console.log("currentGame:", initialGame);
  const {scoreTeam, teamRound, currentRound, currentTeam} = initialGame;
  if (action.type === "currentGame") {
  initialGame.currentRound += action.updateDatas
  return initialGame;
} else if (action.type === "score") {
  const datas = action.datas
  scoreTeam[datas.team] = datas.score
  teamRound[datas.team] = currentRound
  return initialGame;
} else {
  return initialGame;
}
}
