import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', ()=>{
  test('getSaludo debe retornar Hola Gabriel', () =>{

    const nombre = 'Gabriel'

    const saludo = getSaludo(nombre)

    expect(`Hola ${nombre}`).toBe(saludo)
  })

  test('getSaludo debe retornar Hola Jose! si no hay argumento nombre', () =>{

    const saludo = getSaludo()

    expect(`Hola Jose!`).toBe(saludo)
  })
})
