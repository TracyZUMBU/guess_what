import React from "react";
import { Formik, Form } from "formik";

//component
import FormItems from "./FormItems";
import FormikControl from "../../formSetup/FormikControl";
import Button from "../button/Button";


// Modules
import {
  numOfPlayers,
  level,
  timeByRound,
  wordByRound,
  roundByGame,
} from "../../services/optionForm";
import validationSchema from "../../formSetup/ValidationSchema.js";
import { initialValues } from "../../formSetup/InitialValues";


const Forms = () => {


  const onSubmit = (values) => {
    console.log("values:", values);
    //window.location.replace("/jouer")
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => {
     console.log(formik.errors, formik.isValid, formik.isSubmitting);
     
        return (
          <Form className="form">
            <FormItems question={"Nombre de partie"}>
              <FormikControl
                control="radio"
                options={numOfPlayers}
                name="numOfPlayers"
              />
            </FormItems>

            <FormItems question={"Noms des joueurs"}>
              <FormikControl
                control="input"
                label="Equipe n°"
                name="nameOfPlayers"
                numOfPlayers={formik.values.numOfPlayers}
              ></FormikControl>
              <FormikControl
                control="input"
                label="k"
                name="nameOfPlayers1"
                numOfPlayers={formik.values.numOfPlayers}
              ></FormikControl>
            </FormItems>

            <FormItems question={"Choix du niveau"}>
              <FormikControl
                control="radio"
                options={level}
                name="level"
              ></FormikControl>
            </FormItems>

            <FormItems question={"Temps par manche"}>
              <FormikControl
                control="radio"
                options={timeByRound}
                name="timeByRound"
              ></FormikControl>
            </FormItems>

            <FormItems question={"Mots par manche"}>
              <FormikControl
                control="radio"
                options={wordByRound}
                name="wordByRound"
              ></FormikControl>
            </FormItems>

            <FormItems question={"Nombre de manche par partie"}>
              <FormikControl
                control="radio"
                options={roundByGame}
                name="roundByGame"
              ></FormikControl>
            </FormItems>
            <div className="button-container">
              <Button type="submit" className="primary" text="Jouer"/>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
