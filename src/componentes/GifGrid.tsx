import axios from "axios"
import { useEffect, useState } from "react"
import GifGridItem from "./GifGriditem"

type props ={
  anime:string
}
const GifGrid = ({anime}:props)=>{

  const [images, setImages] = useState([])

  useEffect(()=>{
    getGifs()
  }, [])

  const getGifs = async ()=>{
    const url = 'https://api.giphy.com/v1/gifs/search?q=One+piece&limit=10&api_key=F35DaWXAH0TwkGFVxszauS71Pz9N6als'
    const resp = await axios.get(url)
    const { data } = await resp.data
    const gifs = await data.map( (img:any) =>{
      return {
        id:     img.id,
        title:  img.title,
        url:    img.images.downsized_medium.url
      }
    })
    setImages(gifs)
  }
  return (
    <>
      <h3> { anime }</h3>
        {
          images.map((img) => (
           <GifGridItem key={ img.id } {...img} />
          ))
        }
    </>
  )
}

export default GifGrid