  type propsType = {
    setPage : Function;
    page : any;
  }

export default function Form2( setPage : propsType) {

      const click =()=> {
    setPage.setPage(setPage.page + 1)
  }

  return (
    <div className='shadow-lg min-w-[768px] w-2/5 h-4/5 bg-white z-10 border-solid rounded-md p-10 flex flex-col items-center justify-center'>
      <h3>Anything Else?</h3>
      <div className="flex flex-row flex-wrap h-100">
        <div className="gal-div">
          <button className='button'>PLAY AREA</button>
          <button className='button'>ELEVATORS</button>
        </div>
        <div className="gal-div">
          <button className='button'>BALCONY</button>
          <button className='button'>OFFICE SPACE</button>
          <button className='button'>FAMILY ROOM</button>
        </div>
        <div className="gal-div">
          <button className='button'>GYM</button>
          <button className='button'>COMMON SPACE</button>
          <button className='button'>POOL</button>
        </div>
        <div className="gal-div">
          <button className='button'>PRIVATE TERRACE</button>
          <button className='button'>ELECTRICAL PLANT</button>
          <button className='button'>JACUZZI</button>
        </div>
      </div>
      <button className='mt-10 bg-light-pink rounded-full px-10 py-1 text-white' onClick={()=>click()}>Next</button>
    </div>
  )
}
