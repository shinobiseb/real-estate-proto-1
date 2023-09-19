import React from 'react'

export default function Form() {
  return (
    <div className='shadow-lg min-w-[768px] w-2/5 h-4/5 bg-white z-10 border-solid border-white rounded-md p-10 flex flex-col items-center'>
      <h3 className=''>What are you looking for?</h3>
      <div className='button-gallery'>
        <div className='gal-div'>
          <button className='button'>PRECONSTRUCTION</button>
          <button className='button'>CONSTRUCTION</button>
        </div>

        <div className="gal-div">
          <button className='button'>APARTMENT</button>
          <button className='button'>VILLA</button>
          <button className='button'>HOUSE</button>
        </div>
      </div>
    </div>
  )
}
