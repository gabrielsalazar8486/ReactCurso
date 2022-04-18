import {memo} from "react"

type Props = {
  value:number
};
export const Small = memo(({value}: Props) => {
  console.log(':´(')
  return (
    <small> {value} </small>
  )
})