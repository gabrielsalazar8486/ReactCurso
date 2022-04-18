import { shallow } from "enzyme"
import AddAnime from "../../componentes/AddAnime"
import { vitest } from "vitest"

describe('Pruebas en el componeste AddAnime',()=>{
  const handleApp = vitest.fn()
  const value = 'HunterX'
  let wrapper = shallow(<AddAnime handleApp={handleApp} />)

  beforeEach(()=>{
    vitest.clearAllMocks()
    wrapper = shallow(<AddAnime handleApp={handleApp} />)
  })

  test('Debe de mostrar el componete correctamente',()=>{
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de cambiar la caja de texto',()=>{
    wrapper.find('input').simulate('change', {target:{ value }})
    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('No debe de postear la informacion con submit',()=>{
    wrapper.find('form').simulate('submit', { preventDefault() {}})
    expect( handleApp ).not.toHaveBeenCalled()
  })

  test('Debe de llamar el handleApp y limpiar la caja de texto',()=>{

    wrapper.find('input').simulate('change', {target:{ value }})
    wrapper.find('form').simulate('submit', { preventDefault() {}})

    expect( handleApp ).toHaveBeenCalled()
    expect( handleApp ).toHaveBeenCalledTimes(1)
    expect( handleApp ).toHaveBeenCalledWith(expect.any(Function))

    expect(wrapper.find('input').text().trim()).toBe('')
  })
})