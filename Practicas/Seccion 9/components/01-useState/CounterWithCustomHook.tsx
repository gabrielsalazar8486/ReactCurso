// import { useState } from "react"

import useCounter from "../hook/useCounter"

const CounterWithCustomHook = () => {

  const {state, increment, reset, decrement} = useCounter(100);

  return (
    <>
      <h1> Counter with hook: {state}</h1>
      <hr/>

      <button onClick={() => increment(2) } className="btn btn-primary">+1</button>
      <button onClick={ reset } className="btn btn-default">Reset</button>
      <button onClick={() => decrement(2) } className="btn btn-danger">-1</button>
    </>
  )
}
export default CounterWithCustomHook