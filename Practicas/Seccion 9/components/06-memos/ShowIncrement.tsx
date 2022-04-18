import React from "react"

type Props = {
  increment:()=>void
};
export const ShowIncrement = React.memo(({increment}: Props) => {
  console.log(':´[')
  return (
    <button
    className='btn btn-outline-success'
    onClick={()=>{ increment(5) }}
    >Incrementar</button>
  )
})