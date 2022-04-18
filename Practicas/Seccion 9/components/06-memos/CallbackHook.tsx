import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)
  // const increment = ()=>{ setCounter(counter+1)}
  const increment = useCallback((numb) => {setCounter(c => c+numb)}
    , [setCounter]
  );

  return (
    <div>
      <h1>useCallback hook: { counter}</h1>
      <hr/>

      <ShowIncrement increment={ increment } />
    </div>
  )
}