import React from 'react'


//component
import TitlePage from '../../components/titlePage/TitlePage'
import Forms from '../../components/form/Forms'

const CreateGame = () => {
    return (
        <div className="container container--createGame">
            <TitlePage title={"Créer une partie"}/>
            <Forms/>
        </div>
    )
}

export default CreateGame
