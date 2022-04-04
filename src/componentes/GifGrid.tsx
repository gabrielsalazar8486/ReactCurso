import GifGridItem from "./GifGriditem"
import { useAxiosGifs } from "../hooks/useAxiosGifs"

type props ={
  anime:string
}
const GifGrid = ({anime}:props)=>{

 const { data:images, loading } = useAxiosGifs(anime);

  return (
    <>
      <h3> { anime }</h3>
      { loading && <p className='animate__animated animate__fadeInUp'>Cargando...</p>}
      <div className="card-grid">

        {
          images.map((img) => (
            <GifGridItem key={ img.id } {...img} />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid