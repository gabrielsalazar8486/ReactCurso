import PrimeraApp from "../PrimeraApp"
import { shallow } from "enzyme"

describe('PrimeraApp test', ()=>{

  test('debe de mostrar <PrimeraApp /> correctamente', ()=>{
    const saludo = 'Hola soy Monkey D. Luffy'
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)

    expect( wrapper ).toMatchSnapshot();
  })

  test('debe de mostrar el sub titulo enviado por props', ()=>{
    const saludo = 'Hola soy Monkey D. Luffy'
    const subtitulo = 'El rey de los piratas'
    const wrapper = shallow(
      <PrimeraApp
        saludo={saludo}
        subtitulo={subtitulo}
      />
    )

    const textoParrafo = wrapper.find('p').text()
    expect( textoParrafo ).toBe(subtitulo);
  })
})