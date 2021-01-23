import React from 'react'
import { Button } from '../../components/button/Button'
import { TitlePage } from '../../components/titlePage/TitlePage'

export const Home = (props) => {
    
    return (
        <div className="container container--home"> 
        <TitlePage title={"Guess What"}/>
        <Button className="secondary" text="Regle du jeu"/>
        <Button className="primary" text="Jouer"/>
        </div>
    )
}
