import { useState } from "react"

const useCounter = ( initialState = 10) => {

  const [counter, setCouter] = useState(initialState)

  const increment = () =>{
    setCouter(counter + 1)
  }

  const reset = () =>{
    setCouter(initialState)
  }

  const decrement = () =>{
    setCouter(counter - 1)
  }

  return {counter, increment, reset, decrement}

}
export default useCounter