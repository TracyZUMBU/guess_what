import React from "react";

import RadioButtons from "../formikSetup/elementsForm/RadioButtons"

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
      case "input":
        //return <Input {...rest} />;
        break
      case "radio":
        return <RadioButtons {...rest} />;
      default:
        return null;
    }
  };
  
export default FormikControl