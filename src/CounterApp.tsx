import React, { useState } from "react"
import PropTypes from 'prop-types'

type props = {
  value:number
}

const CounterApp = ({value = 10 }:props) =>{

  const [counter, setCounteralue ] = useState(value)

  const handleApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounteralue( counter + 1)
  }
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounteralue( value)
  }
  const handleSubtract = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounteralue( counter - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={handleApp}> +1 </button>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleSubtract}> -1 </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;