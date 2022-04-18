import React, { useEffect, useState } from "react"
import Message from "./Message"

const SimpleForm = ()=>{

  const [form, setForm] = useState({
    name:'',
    email: '',
  })

  const {name, email} = form

  useEffect(()=>{
    console.log('hey')
  }, [])

  const handleInputChange = ({target}:React.ChangeEvent<HTMLInputElement>)=>{
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={ handleInputChange }
        />

      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message />}
    </>
  )
}

export default SimpleForm