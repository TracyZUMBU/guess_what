export default function (
  initialGame = {
    currentTeam: 0,
    scoreTeam: [0, 1, 5],
    currentRound: 1,
  },
  action
) {
  console.log("action-currentGame:", action);
  if (action.type === "currentGame") {
    const currentTeam = action.updateDatas
    const currentGame = {
      scoreTeam: [0, 1, 5],
      currentTeam: currentTeam,
      currentRound: 1,
    };
    console.log("currentGame:", currentGame);
    return currentGame;
  } else {
    return initialGame;
  }
}
