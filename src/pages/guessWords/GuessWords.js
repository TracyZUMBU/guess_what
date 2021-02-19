import React from "react";

import Countdown from "react-countdown";

// components
import TitlePage from "../../components/titlePage/TitlePage";
import WordList from "../../components/word/WordList";

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

  return (
    <div className="container container--guessWords">
      <TitlePage title={"Manche n°1"} />

      <Countdown date={Date.now() + 30000} renderer={renderer} />

      <WordList />
    </div>
  );
};

export default GuessWords;
