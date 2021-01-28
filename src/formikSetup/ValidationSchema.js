import * as Yup from 'yup'

const ValidationSchema = Yup.object({
    numOfPlayers : Yup.string().required(),
})

export default ValidationSchema