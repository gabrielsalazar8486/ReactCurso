import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes"

describe('pruebas con promesas ', () => {
  test('getHeroeByIdAsync debe de retornar un heroe async', ( done) => {
    const id = 1
    getHeroeByIdAsync(id)
      .then(heroe =>{
        const heroeData = heroes.find((h)=>h.id === id)
        expect(heroe).toBe(heroeData)
        done()
    })
  })

  test('debe de obtener un error si el heroe no existe', ( done) => {
    const id = 10
    getHeroeByIdAsync(id)
      .then()
      .catch(err =>{
        expect(err).toBe('No se pudo encontrar el héroe')
        done()
      })
  })
})