import React from 'react'
import {Grid} from '@nextui-org/react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    favoritePokemons: number[]
}

export const FavoritePokemons= ({favoritePokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
        favoritePokemons?.map(id => (
            <FavoriteCardPokemon id={id} key={id}/>
        ))
        }
    </Grid.Container>
  )
}
