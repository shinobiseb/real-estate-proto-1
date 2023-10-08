type propsType = {
    setPage : Function;
    page : any;
  }
  
import Item from "./Item";

export default function Form2( setPage : propsType) {

      const click =()=> {
    setPage.setPage(setPage.page + 1)
  }

  return (
    <div id="Gallery" className='shadow-lg min-w-[768px] w-2/5 h-4/5 bg-white z-10 border-solid rounded-md p-10 flex flex-col items-center justify-center'>
      <div className="flex flex-row flex-wrap h-full overflow-y-auto flex justify-evenly">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
      <button className='mt-5 bg-light-pink rounded-full px-10 py-1 text-white' onClick={()=>click()}>HOME</button>
    </div>
  )
}
