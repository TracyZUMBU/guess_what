import React from 'react'
import { Field } from "formik"

const RadioButtons = (props) => {
    const { label, name, options, ...rest } = props;
    return(
        <Field name={name} {...rest} >
            {({field}) => {
                //console.log(field);
                return options.map(opt => {
                    return (
                        <div key={opt.key}className="form__opt">
                        <input
                            type="radio"
                            id={opt.value}
                            {...field}
                            value={opt.value}
                            checked={field.value === opt.value}
                        />
                        <label htmlFor={opt.value}>{opt.key}</label>
                        </div>
                    )
                })
            }}
        </Field>
    ) 
         
    
}

export default RadioButtons
