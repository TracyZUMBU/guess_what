// import
import React from "react";
import { Link } from "react-router-dom"
import {connect} from "react-redux"

//component
import TitlePage from "../../components/titlePage/TitlePage";
import Button from "../../components/button/Button";

const Round = ({datasGame}) => {
console.log('props:', datasGame)

  return (
    <div className="container container--round">
      <TitlePage title={"Manche"} />
      <div className="round__box">
        <h2 className="round__team">Equipe n°1</h2>
        <p className="round__name">
          C'est à {datasGame.playerA} de faire deviner à {datasGame.playerB}
        </p>
      </div>
      <div className="button-container">
        <Link to="/startGame">
          <Button className="primary" text={"Lancer la manche"} />
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {datasGame : state.datasGame};
}

export default connect(mapStateToProps,null)(Round);
