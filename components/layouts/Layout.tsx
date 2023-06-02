import Head from 'next/head'
import React, {FC} from 'react'
import { Navbar } from '../ui'

type Props = {
    children: React.ReactNode | Array<React.ReactNode>
    title?: string
  }

  const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout : FC<Props> = ({ children, title }) => {

  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="author" content='Santiago Aguirre'/>
        <meta name="description" content="Informacion sobre el pokemon XXXX"/>
        <meta name="keywords" content="XXXX, pokemon, pokedex"/>
        <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>
    <Navbar/>
    <main style={{padding: '0px 20px'}}>
        {children}
    </main>
    </>
  )
}
