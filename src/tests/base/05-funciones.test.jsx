import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas a 05-funciones', ()=>{
  test('Pruebas a getUser', ()=>{
    const userTest = getUser()

    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    expect(userTest).toEqual(user)
  })

  test('getUsuarioActivo debe retornar un objeto ', ()=>{

    const userName = 'Gabriel'
    const userTest = getUsuarioActivo(userName)
    const user = {
      uid: 'ABC567',
      username: userName
    }

    expect(userTest).toEqual(user)
  })
})