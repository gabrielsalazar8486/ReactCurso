import GifGridItem from "../../componentes/GifGriditem"
import { shallow } from "enzyme"

describe('Pruebas en GifGridItem', async ()=>{

  const title = 'Un titulo'
  const url = 'https://localhost/algo.jpg'
  const id = '0001'

  const swager = await shallow(<GifGridItem {...{ title, url, id}} />)

  test('debe de mostrar el componente correcto', async ()=>{

    expect( swager ).toMatchSnapshot()
  })

  test('debe de tener un parrafo con el titulo',async ()=>{

    const titleUsed = swager.find('p').text().trim()

    expect( titleUsed ).toBe(title)
  })

  test('debe de tener la imagen igual al url y alt de los props',async ()=>{

    const img = swager.find('img')

    expect( img.props().src ).toBe(url)
    expect( img.props().alt ).toBe(title)
  })

  test('debe de tener animate__fadeInUp',async ()=>{

    const div = swager.find('div')
    const className = div.prop('className')

    expect( className.includes('animate__fadeInUp') ).toBe(true)
    expect(div.hasClass('animate__fadeInUp')).toBe(true)
  })
})