import {FormEvent} from "react"

export default function ProductSearch() {
    function formSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        
    }
  return (
    <div className="flex w-full h-full ">
      <form className="w-full md:w-[75%] h-full flex" onSubmit={formSubmit}>
        <input className="  text-xs md:text-base ps-1 w-full focus:outline-none h-full  md:ps-5 bg-white ml-4  md:ml-16 rounded-md border-2 border-black" placeholder="Search Product"/>
        <button className="w-20 text-xs md:text-base h-full bg-black rounded-md text-white">Search</button>
      </form>
    </div>
  );
}
