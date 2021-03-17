import React from "react";
import { Link } from 'react-router-dom'
import  Button  from "../../components/button/Button";
import TitlePage from "../../components/titlePage/TitlePage";


const Home = () => {
  return (
    <div className="container container--home">
      <TitlePage title={"Guess What"} />
      <div className="button-container">
        <Button className="secondary" text="Regle du jeu" />
        <Link to={"/créer-une-partie"}><Button className="primary" text="Jouer" /></Link>
      </div>
    </div>
  );
};

export default Home