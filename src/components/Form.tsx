
export default function Form() {
  return (
    <div className='shadow-lg min-w-[768px] w-2/5 h-4/5 bg-white z-10 border-solid rounded-md p-10 flex flex-col items-center justify-evenly '>
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

      <div className="where-div p-5 w-full items-center justify-center flex flex-col">
        <label htmlFor="Locations"> 
          <h3 className='text-center'>Where?</h3> 
        </label>
        <select className='button' name="" id="">
          <option value="Place">Place</option>
          <option value="Place">Place</option>
          <option value="Place">Place</option>
          <option value="Place">Place</option>
          <option value="Place">Place</option>
          <option value="Place">Place</option>
        </select>
      </div>

      <div className="money-div p-5 w-full items-center justify-center flex flex-col">
        <h3>How Much</h3>
        <div className="slide-container ">
          <input type="range" min="1" max="10" value="50" className="slider bg-light-pink" id="myRange"></input>
        </div>
      </div>

      <div className="many-div p-5">
          <div className="bathroom-num w-full items-center justify-evenly flex flex-col">
            <h3>
              How Many?
            </h3>
            <input className='border rounded-full' type="number" name="Bathrooms" id=""/>
            <input className='border rounded-full mt-2' type="number" name="Bathrooms" id=""/>
          </div>
      </div>

      <button className='mt-10 bg-light-pink rounded-full px-10 py-1 text-white'>Next</button>
    </div>
  )
}
