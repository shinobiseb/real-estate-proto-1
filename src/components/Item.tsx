import React from 'react'

export default function Item() {
  return (
    <div className="gal-item bg-light-pink h-56 w-48 rounded-lg drop-shadow-2xl mb-5">
        <img className="object-cover rounded-t-lg" src="https://a0.muscache.com/im/pictures/7b80d8b4-501b-4506-ae68-ea2966fa824e.jpg?im_w=720" alt=""/>
        <div className="text-div flex flex-col p-2">
            <h4 className="font-bold">DR Estate</h4>
            <h5 className="text-sm">San Pedro de Macoris</h5>
            <p className="text-xs italic">Small Manor within Dominican Republic</p>
        </div>
    </div>
  )
}
