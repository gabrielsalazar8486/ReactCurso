import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"

describe('Pruebas en funciones de heroes', () => {
  test('debe retornar un heroe por id', () => {
    const id = 1
    const hero = getHeroeById(id)
    const dataHero = heroes.find((hero)=> hero.id === id)

    expect(hero).toEqual(dataHero)
  })

  test('debe retornar undefined si el heroe no existe', () => {
    const id = 10
    const hero = getHeroeById(id)

    expect(hero).toBe( undefined )
  })

  test('debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel'
    const heros = getHeroesByOwner(owner)
    const dataHeros = heroes.filter((hero)=> hero.owner === owner)

    expect(heros).toEqual(dataHeros)
  })

  test('debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'
    const heros = getHeroesByOwner(owner)

    expect(heros.length).toBe(3)
  })

})