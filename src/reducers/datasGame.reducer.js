export default function (datas = {}, action) {
  console.log('action:', action)
  if (action.type === "datasGame") {
    const datasGame = action.datas;
    return datasGame;
  } else {
    return datas;
  }
}
