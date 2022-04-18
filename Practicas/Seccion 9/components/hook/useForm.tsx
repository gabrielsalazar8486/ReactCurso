import React, { useState } from "react"

export function useForm( initialState = {}) {
  const [values, setValues] = useState(initialState)
  const handleInputChange = ({target}:React.ChangeEvent<HTMLInputElement>)=>{
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  return [values, handleInputChange]
}