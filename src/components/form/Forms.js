import React from "react";
import { Formik, Form } from "formik";
import FormItems from "./FormItems";
import FormikControl from "../../formikSetup/FormikControl";

import numOfPlayers from "../../services/optionForm";
import validationSchema from "../../formikSetup/ValidationSchema.js"

console.log("numOfPlayers:", numOfPlayers + validationSchema);

const Forms = () => {
  return (
    <Formik
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log("formik :" + formik)
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
            <FormItems question={"Noms des joueurs"}>
              <FormikControl 
                control="input"
                label="Equipe n°"
                name="nameOfPlayers"
              >

              </FormikControl>
            </FormItems>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
