import { useEffect, useState } from "react"
import { listFavorites } from "../Services/user"
import MovieItem from "../Components/MovieItem"
import LoaderPage from "../Components/LoaderPage"


const Favorites = () => {

    const [favorites, setFavorites] = useState([])
    const [ldFavorites, setLdFavorites] = useState(true)

    useEffect(() => {
        const callFavorites = async () => {
            const favorites = await listFavorites()
            setFavorites(favorites)
            setLdFavorites(false)
        }
        callFavorites()
    }, [])

    if (ldFavorites) return <LoaderPage />

    return  <div>
        <h1>Favorites</h1>
        <div className='Movies-container' >
        {
          favorites.map((movie, index) => {
            return <MovieItem key={index} movie={movie} />
          })
        }
      </div>
    </div>
    
}

export default Favorites