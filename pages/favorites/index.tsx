import { Layout } from '@/components/layouts'
import { FavoritePokemons } from '@/components/pokemon'
import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils'
import {useEffect, useState} from 'react'

const FavouritesPage = () => {

  const[favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons()) 
  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>
        {
          favoritePokemons.length === 0 ? 
          (
            <NoFavorites/>
          ) : (
            <FavoritePokemons favoritePokemons={favoritePokemons} />
          )
        }
    </Layout>
  )
}

export default FavouritesPage
 