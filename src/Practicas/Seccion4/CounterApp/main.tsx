import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from "./CounterApp"
import './index.css'

ReactDOM.render( <CounterApp value={ 10 }/>,
  document.getElementById('root'))


// ReactDOM.render(
//   <React.StrictMode>
//     <Saludo />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
