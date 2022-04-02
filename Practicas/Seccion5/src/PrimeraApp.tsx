import PropTypes from 'prop-types'

type props = {
  saludo:string,
  subtitulo:string
}

const PrimeraApp = ( {saludo, subtitulo}:props) => {
  return (
    <>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </>
  )
};

PrimeraApp.propTypes = {
  saludo:PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  subtitulo: 'Subtitulo por defecto'
}

export default PrimeraApp;