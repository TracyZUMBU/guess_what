import React, { useState, useEffect } from "react";

// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const classNames = require("classnames");
let wordsToGuess = ["chambre", "salon", "rire", "fusée"];
const WordList = () => {
  //list of word to make guess
  const numberOfWordToGuess = wordsToGuess.length;

  const [indexWord, setIndexWord] = useState(0);
  console.log("indexWord:", indexWord);
  const [wordToDisplay, setWordToDisplay] = useState([wordsToGuess[0]]);
  const [settled, setSettled] = useState(Array(wordsToGuess.length).fill(null));
  console.log("settled:", settled);

  useEffect(() => {
    setWordToDisplay(wordsToGuess.slice(0, indexWord + 1));
  }, [indexWord]);

  
  const handleAnswer = (index, answer) => {
    console.log('index:', index)
    console.log("onclick");
    if (settled[index] === null) {
      setSettled((settled) =>
        settled.map((el, i) => (i === indexWord ? answer : el))
      );
      if(indexWord < wordsToGuess.length - 1){
        setIndexWord(indexWord + 1)
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
              onClick={() => {
                handleAnswer(i, false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} color={"#FF5252"} />
            </span>
            <span
              onClick={() => {
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
