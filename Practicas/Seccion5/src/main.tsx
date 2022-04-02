import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from "./CounterApp"
import './index.css'
// import PrimeraApp from "./PrimeraApp"

// ReactDOM.render( <PrimeraApp saludo="Hola soy Monkey D. Luffy"/>,
//   document.getElementById('root'))

ReactDOM.render( <CounterApp value={ 10 }/>,
  document.getElementById('root'))

