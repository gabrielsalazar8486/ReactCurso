import { useAxios } from "../hook/useAxios"
import useCounter from "../hook/useCounter"

import './layout.css'
import { useLayoutEffect, useRef, useState } from "react"

export const Layout = () => {

  const { counter, increment }  = useCounter(1)

  const {data} = useAxios(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const {quote} = !!data && data[0]

  const pTag = useRef()
  const [boxSize, setBoxSize, ] = useState({})

  useLayoutEffect(()=>{
    setBoxSize( pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr/>

      <blockquote className='blockquote text-right'>
        <p ref={pTag} className='mb-0'> {quote}</p><br />
      </blockquote>

      <pre>{JSON.stringify(boxSize,null, 3)}</pre>
      <button
        className='btn btn-primary'
        onClick={()=>{ increment() }}>
        Siguiente quote
      </button>
    </>
  )
}