import CounterApp from "../CounterApp"
import { shallow } from "enzyme"

describe('Pruebas al componente CounterApp', ()=>{

  const wrapper = shallow( <CounterApp />)

  test('Mostar en componente con los valores por defecto', ()=>{

    expect( wrapper).toMatchSnapshot()

  })

  test('Debe de mostrar el valor por defecto de 100', ()=>{

    const wrapper = shallow( <CounterApp value={100}/>)
    const defaultValue = wrapper.find('h2').text().trim()

    expect( defaultValue).toBe('100')

  })

  test('debe de incrementar con el boton de +1', ()=>{
    wrapper.find('button').at(0).simulate('click')

    const defaultValue = wrapper.find('h2').text().trim()
    expect( defaultValue).toBe('11')
  })

  test('debe de incrementar con el boton de -1', ()=>{
    wrapper.find('button').at(2).simulate('click')
    wrapper.find('button').at(2).simulate('click')

    const defaultValue = wrapper.find('h2').text().trim()
    expect( defaultValue).toBe('9')
  })


  test('debe de incrementar con el boton de Resect', ()=>{
    wrapper.find('button').at(1).simulate('click')

    const defaultValue = wrapper.find('h2').text().trim()
    expect( defaultValue).toBe('10')
  })
})