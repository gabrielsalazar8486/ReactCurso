import { shallow } from "enzyme"
import GitExpertApp from "../GitExpertApp"

describe('Pruebas en el componente GitExpertApp', ()=>{
  let wrapper = shallow(<GitExpertApp />)

  test('Se debe de mostrar corectamente el componente', ()=>{
    expect(wrapper).toMatchSnapshot()
  })

  test('Se debe de mostrar una lista de categorias', ()=>{
    const animeList = ['One piece', 'HunterXHunter']

    let wrapper = shallow(<GitExpertApp defaultValue={animeList}/>)
    expect(wrapper.find('GifGrid').length).toBe(animeList.length)
  })
})