import React, { Dispatch, SetStateAction, useState } from "react"
import PropTypes from "prop-types"

type props={
  // handleApp:(nombreAnime:string)=>void
  handleApp:Dispatch<SetStateAction<string[]>>
}


const AddAnime = ({handleApp}:props) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = ({value}:{value:string})=>{
    setInputValue(value)
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (inputValue.trim().length > 0){
      handleApp(animes => [inputValue, ...animes])
      setInputValue("")
    }
  }
  return (
    <>
      <form onSubmit={(e)=>{ handleSubmit(e) }}>
        <input
          type='text'
          value={inputValue}
          onChange={(e)=>{ handleInputChange(e.target)}}
        />
      </form>
    </>
  )
}

AddAnime.propTypes = {
  handleApp: PropTypes.func.isRequired
}

export default AddAnime