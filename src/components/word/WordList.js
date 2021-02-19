import React, { useState }  from "react";

// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

//  styled component rules
const BgColor = styled.li`
  background-color: ${(props) =>
    props.color == "yellow" ? "yellow" : "var(--color-white-secondary)"};
`;

const WordList = () => {
  //list of word to make guess
  let wordArray = ["chambre", "salon", "rire", "fusée"];

  const [nextQuestion, setNextQuestion] = useState(1);
  const [wordToDisplay, setWordToDisplay] = useState([wordArray[0]]);
  const [color, setColor] = useState("white");

  // push the next word to guess into the wordToDisplay array
  const nextWord = () => {
    setWordToDisplay([...wordToDisplay, wordArray[nextQuestion]]);
  };

  return (
    <ul className="word__list">
      {wordToDisplay.map((word, i) => (
        <BgColor key={i} color={color} className="word__item">
          <p className="word">{word}</p>
          <div className="icon-box">
            <span
              onClick={() => {
                setNextQuestion(nextQuestion + 1);
                setColor("black");
                nextWord();
              }}
            >
              <FontAwesomeIcon icon={faTimes} color={"#FF5252"} />
            </span>
            <span
              onClick={() => {
                setNextQuestion(nextQuestion + 1);
                setColor("yellow");
                nextWord();
              }}
            >
              <FontAwesomeIcon icon={faCheck} color={"#008000"} />
            </span>
          </div>
        </BgColor>
      ))}
    </ul>
  );
};

export default WordList;
