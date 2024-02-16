import { useEffect, useState } from "react"
import { suggestions } from "../../utils/constants"

const Search = () => {
    const[query,setQuery]=useState('')
    const[data,setData]=useState([])
    const[show,setShow]=useState(false)
    const suggestionsdata=suggestions
    useEffect(()=>{
      const timer=setTimeout(()=>
        getSuggestions(),1000)
        return ()=>clearTimeout(timer)
    },[query])
     function getSuggestions(){
       const filterdata=suggestionsdata.filter((v)=>v.toLowerCase().includes(query.toLowerCase()))
      setData(filterdata)
    }
    console.log(show)
    if(!data) return

  return (
    <div className="bg-slate-400 h-screen ">
    
        <form className=" text-center pt-10">
           <input type="text" className="p-1 w-96 border border-black" 
           value={query} onChange={(e)=>setQuery(e.target.value)}
           onFocus={()=>setShow(true)}
          
           />
           <button className="px-1 py-2 bg-pink-400 rounded-md">Search</button>
        </form>
        {(show && query) && 
        <div className="bg-white w-1/3 mx-auto  text-center">
            {data.map((item,index)=><div key={index}>
                <h4 className="text-black my-1 cursor-pointer" onClick={()=>{setQuery(item)
                setShow(false)}}>{item}</h4>
            </div>)}
        </div>
}
    </div>
  )
}

export default Search
