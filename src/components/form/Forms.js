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

console.log("numOfPlayers:", numOfPlayers + validationSchema);

const Forms = () => {
  return (
    <Formik validationSchema={validationSchema}>
      {(formik) => {
        console.log("formik :" + formik);
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
                name="gameTime"
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
              <Button type="submit" className="primary" text="Jouer" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
