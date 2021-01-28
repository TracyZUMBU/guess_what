import React from "react";
import { Formik, Form } from "formik";
import FormItems from "./FormItems";
import FormikControl from "../../formikSetup/FormikControl";

import numOfPlayers from "../../services/optionForm";

console.log("numOfPlayers:", numOfPlayers);

const Forms = () => {
  return (
    <Formik>
      {(formik) => {
        return (
          <Form className="form">
            <FormItems question={"Nombre de partie"}>
              <FormikControl 
                control="radio" 
                options={numOfPlayers}
                label="nombre de joueur"
                name="numOfPlayers" 
              />
            </FormItems>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
