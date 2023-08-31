import React from 'react'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between w-full h-10'>
      <h3>Mi Vistas</h3>
      <ul className='flex sm:w-1/2 justify-between'>
        <li>Comprar</li>
        <li>Vender</li>
        <li>Exclusives</li>
        <li>=</li>
      </ul>
    </nav>
  )
}
