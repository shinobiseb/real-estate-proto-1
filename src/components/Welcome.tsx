
  type searchButton = {
    setPage : Function
  }

export default function Welcome(setpage : searchButton) {

  function changePage() {
    
  }

  return (
    <div className="flex flex-col items-center">
        <h1 className='text-white text-9xl font-bold font-sans'>WELCOME!</h1>
        <button 
        className="text-white text-2xl p-2 w-60 rounded-full bg-light-pink hover:bg-white hover:text-light-pink transition-all"
        >Buscar</button>
    </div>
  )
}
