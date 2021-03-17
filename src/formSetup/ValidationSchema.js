import * as Yup from 'yup'

const errorMsgRadio = "sélectionner une option"
const ValidationSchema = Yup.object({
    numOfPlayers : Yup.string().required(errorMsgRadio),
    level: Yup.string().required(errorMsgRadio),
    timeByRound:Yup.string().required(errorMsgRadio),
    wordByRound: Yup.string().required(errorMsgRadio),
    roundByGame: Yup.string().required(errorMsgRadio)

})

export default ValidationSchema