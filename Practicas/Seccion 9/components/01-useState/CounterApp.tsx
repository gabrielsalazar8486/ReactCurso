import { useState } from "react"

const CounterApp = () => {
  const [counters, setCounter] = useState({
    counter1:10,
    counter2:20
  })

  const {counter1, counter2}= counters

  return (
    <>
      <h1> Counter1 { counter1 }</h1>
      <h1> Counter2 { counter2}</h1>
      <hr/>

      <button onClick={()=>{setCounter({ ...counters,counter1: counter1+1 })}}
        className="btn btn-primary">
        +1
      </button>
    </>
  )
}
export default CounterApp