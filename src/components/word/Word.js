import React from "react";

const Word = () => {
  let wordArray = ["chambre", "salon", "rire", "fusée"];
  const numberOfWords = wordArray.length;
  return wordArray.map((el) => {
    {console.log('el:', el)}
    <p className="word">{el}</p>;
    <p>hello</p>
  });
};

export default Word;
