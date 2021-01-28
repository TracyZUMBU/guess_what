import React from "react";

const FormItems = (props) => {
  return (
    <div className="form__item">
      <h2 className="form__question">{props.question}</h2>
      <div className="form__answer">{props.children}</div>
    </div>
  );
};

export default FormItems;
