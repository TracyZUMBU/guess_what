//Imports
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Redirect } from "react-router-dom";

//components
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

import { connect } from "react-redux";

const Forms = (props) => {
  //States
  const [redirect, setRedirect] = useState(false);
  const [totalPlayer, setTotalPlayer] = useState(0);
  console.log("totalPlayer:", totalPlayer);

  

  // component input
  let inputForNameOfPlayer = [];
  console.log("inputForNameOfPlayer:", inputForNameOfPlayer);
  for (let i = 0; i < totalPlayer / 2; i++) {
    let teamNumber = "";
    console.log("teamNumber:", teamNumber);

    if (totalPlayer == 2) {
      teamNumber = 1;
    } else if (totalPlayer == 4) {
      teamNumber = 2;
    } else if (totalPlayer == 6) {
      teamNumber = 3;
    }

    inputForNameOfPlayer.push(
      <div className="form__box-input">
        <FormikControl
          control="input"
          label={`Equipe n°${teamNumber}`}
          name="playerA"
          numOfPlayers={totalPlayer}
        ></FormikControl>
        <FormikControl
          control="input"
          label=""
          name="playerB"
          numOfPlayers={totalPlayer}
        ></FormikControl>
      </div>
    );
  }

  // function that will call when submitting the form
  const onSubmit =  (values) => {
    //send the values object to the reducer
    props.storeDatasGame(values)
    
    setRedirect(true)
  
  };

  // launch the game
  if (redirect) {
    return <Redirect to={{ pathname: "/jouer"}} />;
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => {
        setTotalPlayer(
          formik.values.numOfPlayers === "" || formik.values.numOfPlayers == "2"
            ? 2
            : formik.values.numOfPlayers
        );
      

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
              {inputForNameOfPlayer}
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

// component Conteneur
function mapDispatchToProps(dispatch) {
  return {
    storeDatasGame: function (values) {
      dispatch({ type: "datasGame", datas: values });
    },
  };
}

export default connect(null, mapDispatchToProps)(Forms);
