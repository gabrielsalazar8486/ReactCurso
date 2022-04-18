import useCounter from "../hook/useCounter"
import { useMemo, useState } from "react"
import procesoPesado from "../../helpers/procesoPesado"

export const MemoHook = () => {

  const {counter, increment} = useCounter(2000)
  const [show,setShow] = useState(true)


  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>Memo hook </h1>
      <h3>Counter: <small>{counter}</small> </h3>
      <hr />
      <p> { memoProcesoPesado }</p>
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