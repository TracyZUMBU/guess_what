import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Redirect } from "react-router-dom";

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
  const [redirect, setRedirect] = useState(false);
  const [setUpGame, setSetUpGame] = useState(null);

  useEffect(() => {
    try {
      if (setUpGame != null) {
        setRedirect(true);
      }
    } catch (e) {
      console.log("error: ", e);
    }
  }, [setUpGame]);

  if (redirect && setUpGame != false) {
    return <Redirect to={{ pathname: "/jouer", state: setUpGame }} />;
  }

  const onSubmit = (values) => {
    setSetUpGame(values);
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
              <div className="form__box-input">
                <FormikControl
                  control="input"
                  label="Equipe n°1"
                  name="playerA"
                  numOfPlayers={formik.values.numOfPlayers}
                ></FormikControl>
                <FormikControl
                  control="input"
                  label=""
                  name="playerB"
                  numOfPlayers={formik.values.numOfPlayers}
                ></FormikControl>
              </div>

              {formik.values.numOfPlayers == 4 ||
              formik.values.numOfPlayers == 6 ? (
                <div className="form__box-input">
                  <FormikControl
                    control="input"
                    label="Equipe n°2"
                    name="playerC"
                    numOfPlayers={formik.values.numOfPlayers}
                  ></FormikControl>
                  <FormikControl
                    control="input"
                    label=""
                    name="playerD"
                    numOfPlayers={formik.values.numOfPlayers}
                  ></FormikControl>
                </div>
              ) : null}

              {formik.values.numOfPlayers == 6 ? (
                <div className="form__box-input">
                  <FormikControl
                    control="input"
                    label="Equipe n°3"
                    name="playerE"
                    numOfPlayers={formik.values.numOfPlayers}
                  ></FormikControl>
                  <FormikControl
                    control="input"
                    label=""
                    name="playerF"
                    numOfPlayers={formik.values.numOfPlayers}
                  ></FormikControl>
                </div>
              ) : null}
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
              <Button type="submit" className="primary" text="Jouer" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
