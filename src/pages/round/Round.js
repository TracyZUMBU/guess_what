import React from "react";
import { Link } from "react-router-dom"

//component
import TitlePage from "../../components/titlePage/TitlePage";
import Button from "../../components/button/Button";

const Round = (props) => {
  console.log(
    "props:",
    props,
    "location: ",
    props.location,
    "state :",
    props.location.state
  );
  return (
    <div className="container container--round">
      <TitlePage title={"Manche"} />
      <div className="round__box">
        <h2 className="round__team">Equipe n°1</h2>
        <p className="round__name">
          C'est à Pauline de faire deviner à Clément
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

export default Round;
