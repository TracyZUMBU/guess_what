//Imports
import React, { useState} from "react";
import { Formik, Form } from "formik";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

//components
import FormItems from "./FormItems";
import FormikControl from "../../formSetup/FormikControl";
import Button from "../button/Button";
import validationSchema from "../../formSetup/ValidationSchema.js";
import { initialValues } from "../../formSetup/InitialValues";

// Modules
import {
  numOfPlayers,
  level,
  timeByRound,
  wordByRound,
  roundByGame,
} from "../../services/optionForm";

const Forms = (props) => {
  //States
  const [launchGame, setLaunchGame] = useState(false);
  const [totalPlayer, setTotalPlayer] = useState(0);

  if (launchGame) {
    return <Redirect to={{ pathname: "/jouer" }} />;
  }
  // display a number of input based on the number of player
  let inputForNameOfPlayer = [];
  for (let i = 0; i < totalPlayer / 2; i++) {
 
    inputForNameOfPlayer.push(
      <div key={i} className="form__box-input">
        <FormikControl
          control="input"
          label={`Equipe n°${i + 1}`}
          name={`team${i + 1}-A`}
          numOfPlayers={totalPlayer}
        ></FormikControl>
        <FormikControl
          control="input"
          label=""
          name={`team${i + 1}-B`}
          numOfPlayers={totalPlayer}
        ></FormikControl>
      </div>
    );
  }

  const onSubmit = (values) => {
    console.log("values:", values);
    const nbrKeys = Object.entries(values).length;
    let teams = [];


    // put the player of the same team inside the same object
    for (let i = 0; i < nbrKeys; i++) {
      if (Object.keys(values)[i].includes("team")) {
        console.log("values:", Object.keys(values)[i]);
        let obj = {};
        obj[Object.keys(values)[i]] = Object.values(values)[i];
        
        teams.push(obj);
      }
    }

    console.log("teams:", teams);
    teams.sort()
    //send the values object to the reducer
    props.storeDatasGame({...values, teams});
    setLaunchGame(true);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => {
        setTotalPlayer(
          formik.values.numOfPlayers === "" || formik.values.numOfPlayers === "2"
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
