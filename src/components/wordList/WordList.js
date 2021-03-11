import React, { useState, useEffect } from "react";

// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

let wordsToGuess = ["chambre", "salon", "rire", "fusée"];

const WordList = ({ isGameOver }) => {
  console.log("isGameOver:", isGameOver);

  // States
  const [indexWord, setIndexWord] = useState(0);
  console.log("indexWord:", indexWord);
  const [wordToDisplay, setWordToDisplay] = useState([wordsToGuess[0]]);
  const [settled, setSettled] = useState(Array(wordsToGuess.length).fill(null));
  console.log("settled:", settled);

  useEffect(() => {
    //each time that the indexWord change the wordToDisplay array will receive the next element of wordToGuess array
    setWordToDisplay(wordsToGuess.slice(0, indexWord + 1));
  }, [indexWord]);

  const handleAnswer = (index, answer) => {
    // will change the color of li element
    if (settled[index] === null) {
      setSettled((settled) =>
        settled.map((el, i) => (i === indexWord ? answer : el))
      );
      if (indexWord < wordsToGuess.length - 1) {
        setIndexWord(indexWord + 1);
      }
    }
  };

  return (
    <ul className="word__list">
      {wordToDisplay.map((word, i) => (
        <li
          key={i}
          className={classNames("word__item", {
            "settled-true": settled[i] === true,
            "settled-false": settled[i] === false,
          })}
        >
          <p className="word">{word}</p>
          <div className="icon-box">
            <span 
              onClick={isGameOver ? null : () => {
                handleAnswer(i, false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} color={"#FF5252"} />
            </span>
            <span
              onClick={isGameOver ? null : () => {
                handleAnswer(i, true);
              }}
            >
              <FontAwesomeIcon icon={faCheck} color={"#008000"} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WordList;
