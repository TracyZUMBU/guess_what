import React from "react";
import { Field } from "formik";

const Input = (props) => {
  const { label, name, numOfPlayers, ...rest } = props;

  return (
    <>
      <div className="form__opt form__opt--column">
        <label>{label}</label>
        <Field name={name} {...rest}></Field>
      </div>
    </>
  );
};

export default Input;
