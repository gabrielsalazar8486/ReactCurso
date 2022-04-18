import PropTypes from "prop-types"

interface props {
  id:string
  title:string
  url:string
}

const GifGridItem = ({title, url}:props) => {
  console.log(title, url)
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

GifGridItem.protoType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


export default GifGridItem