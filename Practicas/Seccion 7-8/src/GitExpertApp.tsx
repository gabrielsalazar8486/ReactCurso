import { useState } from "react"
import AddAnime from "./componentes/AddAnime"
import GifGrid from "./componentes/GifGrid"

const GitExpertApp = ({ defaultValue = []}:{defaultValue:Array<string>})=>{

  // const [animes, setAnimes] = useState(['One piece', 'Naruto', 'Full metal alchemy B.'])
  const [animes, setAnimes] = useState(defaultValue)

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddAnime handleApp={setAnimes}/>
      <hr />

      <ol>
        {
          animes.map((anime) => {
            return <GifGrid
              key={anime}
              anime={anime}
            />
          })
        }
      </ol>
    </>
  )
}
export default GitExpertApp