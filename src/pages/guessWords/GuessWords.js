import React, { useState } from "react";

import Countdown from "react-countdown";

// components
import TitlePage from "../../components/titlePage/TitlePage";
import WordList from "../../components/wordList/WordList";

const GuessWords = () => {
  //States
  const [isGameOver, setIsGameOver] = useState(false);

  // setup the counter when is running and when is completed
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
  const Completionist = () => {
    return <span>FINI!</span>;
  };

  // function when counter is over
  const onComplete = () => {
    setIsGameOver(true);
  };

  return (
    <div className="container container--guessWords">
      <TitlePage title={"Manche n°1"} />

      <Countdown
        date={Date.now() + 5000}
        renderer={renderer}
        onComplete={onComplete}
      />

      <WordList isGameOver={isGameOver} />
    </div>
  );
};

export default GuessWords;
