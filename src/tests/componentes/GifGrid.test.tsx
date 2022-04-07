import { shallow } from "enzyme"
import GifGrid from "../../componentes/GifGrid"
import { useAxiosGifs } from "../../hooks/useAxiosGifs"
import { vitest } from "vitest"
vitest.mock("../../hooks/useAxiosGifs")

describe('Pruebas en el componente GifGrid', ()=>{
  const anime = 'One piece'

  test('El componente se debe mostar correctamente ', ()=>{
    useAxiosGifs.mockReturnValue({
        data:[],
        loading:true
      })
    const wrapper = shallow(<GifGrid anime={anime} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar items cuando se cargan las imagenes useAxiosGifs ', ()=>{

    const gifs = [
      {
        id: 'ABC',
        url: 'http://localhost/one/piece.jpg',
        title: 'one piece'
      }
    ]

    useAxiosGifs.mockReturnValue({
      data:gifs,
      loading:true
    })
    const wrapper = shallow(<GifGrid anime={anime} />)
    expect(wrapper).toMatchSnapshot()
  })
})