type props = {
  id:string
  title:string
  url:string
}

const GifGridItem = ({title, url}:props) => {
  return (
    <>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </>
  )
}

export default GifGridItem