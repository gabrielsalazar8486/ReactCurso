import useCounter from "../hook/useCounter"
import { Small } from "./Small"
import { useState } from "react"

export const Memorize = () => {

  const {counter, increment} = useCounter(10)
  const [show,setShow] = useState(true)

  return (
    <div>
      <h1>Counter: <Small value={counter} /> </h1>
        <hr />

      <button
      className='btn btn-success mr-3'
      onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-outline-success ml-3'
        onClick={()=>{setShow(!show)}}>
        Show/Hide {JSON.stringify(show)}
      </button>

    </div>
  )
}