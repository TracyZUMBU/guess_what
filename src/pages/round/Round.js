import React from 'react'


//component
import TitlePage from "../../components/titlePage/TitlePage"
import Button from '../../components/button/Button'

const Round = (props) => {
    console.log('props:', props, "location: ", props.location, "state :", props.location.state) ;
    return (
        <div className="container container--round">
            <TitlePage title={"Manche"}/>
            <h2>Equipe</h2>
            <div className="button-container">
            <Button className="primary" text={"Lancer la manche"}/>
            </div>
        </div>
    )
}

export default Round