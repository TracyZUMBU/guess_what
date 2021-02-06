import React from "react";
import { Link } from "react-router-dom";

//component
import TitlePage from "../../components/titlePage/TitlePage";
import Button from "../../components/button/Button";

const StartGame = () => {
  return (
    <div className="container container--startGame">
      <TitlePage title={"Premier mot à faire deviner"} />
      <div className="startGame__box">
        <p className="word">CHAMBRE</p>
      </div>
      <div className="button-container">
        <Link to="">
          <Button className="primary" text={"Lancer la manche"} />
        </Link>
      </div>
    </div>
  );
};

export default StartGame;
