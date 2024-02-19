import { useEffect, useState } from 'react'

import { useRef } from "react";
function areEqual(prevdep,currdep){
    if(prevdep===null) return false
    if(prevdep.length!==currdep.length) return false
    for(let i=0;i<prevdep.length;i++){
        if(prevdep[i]!==currdep[i]){
            return false
        }
    }
    return true
}
function useCustomMemo(cb,dep){
    //to keep our value persistent

        const memoized=useRef(null)
       
    // changes in dependency
        if(!memoized.current ||  !areEqual(memoized.current.dep,dep)){
           memoized.current={value:cb(),
            dep
           }
        }
        // cleanup logic
        useEffect(()=>{
            return ()=>{
                memoized.current=null
            }
        },[])
    return memoized.current.value
}


const CustomuseMemo = () => {
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(100)
    function squaredVal(){
        console.log("expensive")
        return count*count
    }
    const memoized=useCustomMemo(squaredVal,[count])
  return (
    <div className='w-96 mx-auto mt-5'>
    
      <h2>COUNT1 -{count}</h2>
      <h3>Square count-{memoized}</h3>
      <button onClick={()=>setCount(count+1)} className='p-2 m-2 bg-green-300'>Increment</button>
     <h2>count 2={count2}</h2>
     <button onClick={()=>setCount2(count2-1)} className='p-2 m-2 bg-green-300'>Decrement</button>
    </div>
  )
}

export default CustomuseMemo


