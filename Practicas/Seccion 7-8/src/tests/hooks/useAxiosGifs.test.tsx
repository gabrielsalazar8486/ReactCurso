import { useAxiosGifs } from "../../hooks/useAxiosGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('Probar el Hook useAxiosGifs',()=>{
  test('debe de retornar el estado inicial',  async ()=>{

    const {result, waitForNextUpdate} =  renderHook(() =>useAxiosGifs('One piece'))
    const {data, loading} = result.current;
    await waitForNextUpdate()

    expect(data.length).toBe(0)
    expect(loading).toBe(true)
  }, 5000)

  test('debe de retornar un arreglo de imgs y el loading en false',  async ()=>{

    const {result, waitForNextUpdate} =  renderHook(() =>useAxiosGifs('One piece'))
    await waitForNextUpdate()

    const {data, loading} = result.current;

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  }, 10000)
})