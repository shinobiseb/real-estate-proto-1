import React from 'react'
import SearchBar from './SearchBar'

export default function Nav() {
  return (
    <nav className='px-5 flex items-center justify-between w-full h-10 z-10'>
      <h2 className='text-2xl'>Mi Vistas</h2>
      <ul className='flex sm:w-1/2 justify-between'>
        <li>Comprar</li>
        <li>Vender</li>
        <li>Exclusives</li>
        <li> <SearchBar/> </li>
      </ul>
    </nav>
  )
}
