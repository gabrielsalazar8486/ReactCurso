type props = {
  id:string
  title:string
  url:string
}

const GifGridItem = ({title, url}:props) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem