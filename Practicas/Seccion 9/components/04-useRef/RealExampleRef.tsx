import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks"
import { useState } from "react"

export const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />

      { show && <MultipleCustomHooks />}

      <button
      className='btn btn-outline-success mt-0'
      onClick ={()=>{setShow(!show)}}>
        show
      </button>
    </div>
  )
}