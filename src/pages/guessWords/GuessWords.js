import React, { useState } from "react";
import Countdown from "react-countdown";
import { connect } from "react-redux";


// components
import TitlePage from "../../components/titlePage/TitlePage";
import WordList from "../../components/wordList/WordList";

const GuessWords = ({ datasGame }) => {
  console.log("datasGame:", datasGame);
  //States
  const [isGameOver, setIsGameOver] = useState(false);
 

  return (
    <div className="container container--guessWords">
      <TitlePage title={"Manche n°1"} />

      <Countdown
        //date={Date.now() + datasGame.timeByRound}
        className="countdown"
        date={Date.now() + 3000}
        renderer={(props)=> <span>
          {props.formatted.minutes}:{props.formatted.seconds}
        </span>}
        onComplete={() => setIsGameOver(true)}
      />

      <WordList isGameOver={isGameOver} />
      
    </div>
  );
};
function mapStateToProps(state) {
  return { datasGame: state.datasGame };
}

export default connect(mapStateToProps, null)(GuessWords);
