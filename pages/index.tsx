import { Inter } from 'next/font/google'
import { Grid, Image } from '@nextui-org/react'
import { Layout } from '@/components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props {
   pokemons: SmallPokemon[];
}

const inter = Inter({ subsets: ['latin'] })

const Home : NextPage<Props> =  ({pokemons}) => {

  return (
     <Layout>
        {/* <Button color={'gradient'} size='xl'>Hola mundo</Button> */}
        <Grid.Container gap={2} justify='flex-start'>
            {
               pokemons.map((pokemon) => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon}/>
               ))
            }
        </Grid.Container>
     </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
   
   const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
   const pokemons : SmallPokemon[] = data.results.map((poke, index) => ({
      ...poke,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
   }))
   
   return {
      props: {
         pokemons: pokemons,

      }
   }
}

export default Home;