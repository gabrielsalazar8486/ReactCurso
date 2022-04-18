import axios from "axios"



export const getGifs = async (anime:string)=>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(anime) }&limit=10&api_key=F35DaWXAH0TwkGFVxszauS71Pz9N6als`
  const resp = await axios.get(url)
  const { data } = await resp.data
  const gifs = await data.map( (img:any) =>{
    return {
      id:     img.id,
      title:  img.title,
      url:    img.images.downsized_medium.url
    }
  })
  return gifs;
}
