import {FormEvent} from "react"

export default function ProductSearch() {
    function formSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        
    }
  return (
    <div className="flex w-full h-full">
      <form className="w-full h-full flex" onSubmit={formSubmit}>
        <input className=" w-[75%] focus:outline-none h-full ps-5 bg-white ml-16 rounded-md border-2 border-black" placeholder="Search Product"/>
        <button className="w-20 h-full bg-black rounded-md text-white">Search</button>
      </form>
    </div>
  );
}
