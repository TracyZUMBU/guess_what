import React from 'react'
import { ErrorMessage, Field } from "formik"

const Input = (props) => {
    const { label, name, ...rest } = props;
    return(
        <Field name={name} {...rest} >
            {({field}) => {
                console.log(field);
                return(
                    <div className="form__opt form__opt--column">
                        <label>{label}</label>
                    <input/>
                    <input/>
                    </div>
                )
                
            }}
        </Field>
    ) 
         
    
}

export default Input
