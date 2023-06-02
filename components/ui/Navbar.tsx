import React from 'react'
import {Text, Spacer, useTheme} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {

    const {theme, isDark} = useTheme()

  return (
    <div style={{display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '0px 20px',
    backgroundColor: theme?.colors.gray900.value}}>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='Icono App' width={70} height={70}></Image>
          <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Link>
        <Spacer css={{flex: 1}}/>
        <Link href="/favorites">
          <Text color='white'>Favoritos</Text>
        </Link>
    </div>
  )
}
