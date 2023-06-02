import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces'
import { getPokemonInfo } from '@/utils'
import { Grid, Card, Container, Text, Image } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

interface Props {
    pokemon: Pokemon;
}

export default function PokemonByNamePage ({pokemon}: Props) {

  return (
    <Layout title={pokemon.name}>
    <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
            <Card isHoverable isPressable css={{padding: '30px'}}>
                <Card.Body>
                    <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} alt={pokemon.name}
                    width="100%" height={200}/>
                </Card.Body>
            </Card>                
        </Grid>
        <Grid xs={12} sm={8}>
            <Card>
                <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text h1 transform='capitalize'>{pokemon.name}</Text>
                    {/* <Button color="gradient" ghost={!isInFavorites} onPress={onToggleFavorite}>{isInFavorites ? "En Favoritos" :"Guardar en favoritos"}</Button> */}
                </Card.Header>
                <Card.Body>
                    <Text size={30}>Sprites:</Text>
                    <Container direction='row' display='flex' gap={0}>
                        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                        <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                        <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/>
                    </Container>
                </Card.Body>
            </Card>
        </Grid>
    </Grid.Container>
</Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {

    const {data} = await  pokeApi.get('/pokemon?limit=151')

    const pokemon151: Array<string> = data?.results?.map((value: any) => {
        return `${value?.name}`
    })

    return {
        paths: pokemon151.map(value => ({
            params: {
                name: value
            }
        })),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {  
   
    const {name} = params as {name: string}

    const pokemon = await getPokemonInfo(name)
    
    return {
       props: {
          pokemon
       }
    }
 }
