import { shallow } from "enzyme"
import AddAnime from "../../componentes/AddAnime"
import { vitest } from "vitest"

describe('Pruebas en el componeste AddAnime',()=>{
  const handleApp = vitest.fn()
  let wrapper = shallow(<AddAnime handleApp={handleApp} />)

  beforeEach(()=>{
    vitest.clearAllMocks()
    wrapper = shallow(<AddAnime handleApp={handleApp} />)
  })

  test('Debe de mostrar el componete correctamente',()=>{
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de cambiar la caja de texto',()=>{
    const input = wrapper.find('input')
    const value = 'HunterX'
    input.simulate('change', {target:{ value }})
    const p = wrapper.find('p')

    expect(p.text().trim()).toBe(value)
  })

  test('No debe de postear la informacion con submit',()=>{
    wrapper.find('form').simulate('submit', { preventDefault() {}})
    expect( handleApp ).not.toHaveBeenCalled()
  })
})