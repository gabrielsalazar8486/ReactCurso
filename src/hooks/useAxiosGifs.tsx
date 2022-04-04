import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useAxiosGifs = (anime:string)=>{
  const [state, setState] = useState({
    data:[],
    loading:true
  })

  useEffect(()=>{
    getGifs( anime ).then(imgs => {
      setState({
        data: imgs,
        loading: false
      })
    })
  }, [anime])

  return state
}