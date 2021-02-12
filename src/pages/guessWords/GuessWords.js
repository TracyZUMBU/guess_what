import React, { useEffect } from "react";
import TitlePage from "../../components/titlePage/TitlePage";
import Countdown from "react-countdown";
import Word from "../../components/word/Word";

const GuessWords = () => {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  //Text that appears when the time is over
  const Completionist = () => <span>FINI!</span>;
  console.log(Word());

  let wordArray = ["chambre", "salon", "rire", "fusée"];
  const numberOfWords = wordArray.length;

  let wordToDisplay = [];
  for (let i = 0; i < numberOfWords; i++) {
    wordToDisplay.push(<p className="word">{"lo"}</p>);
  }

  return (
    <div className="container container--guessWords">
      <TitlePage title={"Manche n°1"} />

      {/* <Countdown date={Date.now() + 30000} renderer={renderer} /> */}
      {wordArray.map((el) => (
                <p className="word">{el}</p>
              ))}
    </div>
  );
};

export default GuessWords;
