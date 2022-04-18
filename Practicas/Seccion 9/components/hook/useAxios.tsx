import { useEffect, useRef, useState } from "react"
import axios from "axios"

export const useAxios = ( url: string) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => { isMounted.current = false }
  }, [])


  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    axios.get(url)
      .then(response => response.data)
      .then(data => {
        if (isMounted.current){
          setState({
            data: data,
            loading: false,
            error: null
          })
        }
      })
    return () => {}
  }, [url])

  return state
}