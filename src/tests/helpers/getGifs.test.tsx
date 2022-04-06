import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Axios', ()=>{
  test('debe de traer 10 elementos', async ()=>{

    const gifs = await getGifs('One piece')
    expect( gifs.length ).toBe(10)
  }, 10000)

  test('debe de traer 0 elementos', async ()=>{

    const gifs = await getGifs('')
    expect( gifs.length ).toBe(0)
  }, 10000)
})