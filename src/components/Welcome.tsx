
  type searchButton = {
    setPage : Function;
    page : Number;
  }

export default function Welcome(setPage : searchButton) {

  const click =( setPage: searchButton)=> {
    setPage.setPage()
    console.log(setPage.page)
  }

  return (
    <div className="flex flex-col items-center">
        <h1 className='text-white text-9xl font-bold font-sans'>WELCOME!</h1>
        <button 
        className="text-white text-2xl p-2 w-60 rounded-full bg-light-pink hover:bg-white hover:text-light-pink transition-all"
        onClick={()=> click(setPage)}
        >Buscar</button>
    </div>
  )
}
