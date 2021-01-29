import React from "react";

import RadioButtons from "../formSetup/elementsForm/RadioButtons"
import Input from "../formSetup/elementsForm/Input"

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
      case "input":
        return <Input {...rest} />;
        break
      case "radio":
        return <RadioButtons {...rest} />;
        break
      default:
        return null;
    }
  };
  
export default FormikControl